console.log("TESTING...🚀");
console.log("TESTING...🚀");
console.log("TESTING...🚀");
console.log("TESTING...🚀");
console.log("TESTING...🚀");

// 1
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "../generated/prisma";

// 2
const prisma = new PrismaClient().$extends(withAccelerate());

// 3
async function main() {
  // ... you will write your Prisma Client queries here

  // 🩸 POST REQUEST
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Jordan",
  //     email: "jordan@prisma.io",
  //     posts: {
  //       create: { title: "Hello Ph!" },
  //     },
  //   },
  // });
  // 🩸 GET REQUEST
  const allUsers = await prisma.user.findMany();
  console.log(`List of all users: `, allUsers);
  // 🩸 GET_ONE REQUEST
  // 🩸 PUT REQUEST
  // 🩸 DELETE REQUEST
}

// 4
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    // 5
    await prisma.$disconnect();
    process.exit(1);
  });
