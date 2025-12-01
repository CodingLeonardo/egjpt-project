import { Server } from "./server";
import { prisma } from "./lib/prisma";

const server = new Server();
server
  .start()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
