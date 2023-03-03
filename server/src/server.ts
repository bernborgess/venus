import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@admin.com",
      role: "ADMIN"
    }
  })
  console.log(user)
}

main()