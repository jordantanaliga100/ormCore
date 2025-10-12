import dotenv from "dotenv";
import express, { Request, Response } from "express";
import "reflect-metadata";
import dataSource from "./datasource/datasource";
import { User } from "./entities /user.entity";
dotenv.config();

const app = express();
app.use(express.json());

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// app.get("/", async (req: Request, res: Response) => {
//   let userRero = dataSource.getRepository(User);

//   const user1 = new User();
//   user1.firstName = "Timber";
//   user1.lastName = "Saw";
//   user1.isActive = true;

//   const user2 = new User();
//   user2.firstName = "Timber";
//   user2.lastName = "Saw";
//   user2.isActive = true;

//   const user3 = new User();
//   user3.firstName = "Timber";
//   user3.lastName = "Saw";
//   user3.isActive = true;

//   const users = await userRero.save([user1, user2, user3]);

//   res.status(200).json({ message: "List of Users", users });
// });

app.post(
  "/users",
  async (
    req: Request<
      {},
      {},
      { firstName: string; lastName: string; isActive: boolean },
      {}
    >,
    res: Response<{ message: string; data?: User }>
  ) => {
    const {
      body: { firstName, lastName },
    } = req;
    if (!firstName || !lastName) {
      return res.status(400).json({ message: "Invalid request body" });
    }

    // get repo
    let userRepo = dataSource.getRepository(User);

    // query here...
    const newUser = userRepo.create(req.body);
    await userRepo.save(newUser);
    // returns
    res.status(201).json({ message: "List of all Users", data: newUser });
  }
);
app.get(
  "/users",
  async (
    req: Request<{}, {}, {}>,
    res: Response<{ message: string; data?: Partial<User>[] }>
  ) => {
    // get repo
    let userRepo = dataSource.getRepository(User);

    // query here...
    const users = await userRepo.find({
      order: { id: "DESC" },
    });
    // returns
    res.status(200).json({
      message: users.length > 0 ? "List of all Users" : "No Users Found",
      data: users,
    });
  }
);

app.get(
  "/users/:id",
  async (
    req: Request<{ id?: string }>,
    res: Response<{ message: string; data?: Partial<User> }>
  ) => {
    const {
      params: { id },
    } = req;
    // get repo
    let userRepo = dataSource.getRepository(User);

    // query here...
    const user = await userRepo.findOneBy({ id: Number(id) });
    // returns
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "Single User", data: user });
  }
);

app.put(
  "/users/:id",
  async (
    req: Request<
      { id?: string },
      {},
      { firstName?: string; lastName?: string; isActive?: boolean }
    >,
    res: Response<{ message: string; data?: User }>
  ) => {
    const {
      params: { id },
      body: { firstName, lastName, isActive },
    } = req;
    if (!firstName && !lastName && isActive === undefined) {
      return res.status(400).json({ message: "Invalid request body" });
    }

    // get repo
    let userRepo = dataSource.getRepository(User);
    // query here...
    const user = await userRepo.findOne({ where: { id: Number(id) } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    userRepo.merge(user, req.body);
    const updatedUser = await userRepo.save(user);

    res.status(200).json({ message: "User updated", data: updatedUser });
  }
);

app.delete(
  "/users/:id",
  async (
    req: Request<{ id?: string }>,
    res: Response<{ message: string; data?: User }>
  ) => {
    const {
      params: { id },
    } = req;

    // get repo
    let userRepo = dataSource.getRepository(User);

    // query here...
    const userToDelete = await userRepo.findOneBy({ id: Number(id) });
    if (!userToDelete) {
      return res.status(404).json({ message: "User not found" });
    }
    await userRepo.remove(userToDelete);
    // returns
    res.status(200).json({ message: "User deleted", data: userToDelete });
  }
);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

//  const {
//    body: { firstName, lastName, isActive },
//  } = req;
//  // validate here...
//  if (!firstName || !lastName || isActive === undefined) {
//    return res.status(400).json({ message: "Invalid request body" });
//  }
