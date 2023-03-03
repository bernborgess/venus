import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();

app.listen(
  process.env.BACKEND_PORT,
  () => {
    console.log(`It's alive on port ${process.env.BACKEND_PORT}`);
  }
);

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();

  console.log(users);

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });