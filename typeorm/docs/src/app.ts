import "reflect-metadata";

import express, { Request, Response } from "express";
import { MysqlDataSource } from "./app-data-source";
import { User } from "./entity/user.entity";

// create and setup express app
const app = express();
app.use(express.json());

// CRUD ROUTES

app.post("/users", async (req: Request, res: Response) => {
  try {
    console.log("REQ BODY:", req.body);

    const userRepository = MysqlDataSource.getRepository(User);

    // // Create entity instance (synchronous)
    const user = userRepository.create(req.body);

    // // Save to DB (async)
    const result = await userRepository.save(user);

    return res
      .status(201)
      .json({ message: "User created successfully", result });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
app.get("/users", async function (req: Request, res: Response) {
  const users = await MysqlDataSource.getRepository(User).find({});
  return res
    .status(201)
    .json({ message: "List of Users", count: users.length, users });
});

app.get("/users/:id", async function (req: Request, res: Response) {
  const results = await MysqlDataSource.getRepository(User).findOneBy({
    id: req.params.id,
  });
  return res.send(results);
});

app.put("/users/:id", async function (req: Request, res: Response) {
  const user = await MysqlDataSource.getRepository(User).findOneBy({
    id: req.params.id,
  });
  MysqlDataSource.getRepository(User).merge(user!, req.body);
  const results = await MysqlDataSource.getRepository(User).save(user!);
  return res.status(201).json({ message: " User Updated", results });
});

app.delete("/users/:id", async function (req: Request, res: Response) {
  const results = await MysqlDataSource.getRepository(User).delete(
    req.params.id!
  );
  const users = await MysqlDataSource.getRepository(User).find({});

  return res.status(201).json({
    message: " User Deleted",
    data: {
      msg: `This user has been successfully deleted : ${results}`,
    },
  });
});

// start express server
app.listen(5000);

console.log("RUNNING.... 🚀");
console.log("RUNNING.... 🚀");
