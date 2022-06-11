import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"
import * as argon2 from "argon2"

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.createMany({
    data: [
      {
        id: uuidv4(),
        email: "assar@classon.se",
        password: await argon2.hash("asdfasdf"),
      },
      {
        id: uuidv4(),
        email: "sam@smith.com",
        password: await argon2.hash("password"),
      },
    ],
    skipDuplicates: true,
  })
  await prisma.note.createMany({
    data: [
      {
        id: uuidv4(),
        content: {
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Det här är innehållet av den första anteckningen",
                },
              ],
            },
          ],
        },
      },
      {
        id: uuidv4(),
        content: {
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Det här är innehållet av den andra anteckningen",
                },
              ],
            },
          ],
        },
      },
    ],
    skipDuplicates: true,
  })
}

main()
  .catch((e) => {
    throw e
  })

  .finally(async () => {
    await prisma.$disconnect()
  })

console.log("Database seeded")
