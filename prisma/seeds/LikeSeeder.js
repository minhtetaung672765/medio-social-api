const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();

async function LikeSeeder() {
    console.log("Post like seeding started...");

    for (let i = 0; i < 8; i++) {
        await prisma.postLike.create({
            data: {
                postId: 21,
                userId: faker.number.int({ min: 1, max: 10 }),
            },
        });
    }

    console.log("Post like seeding done.");
}

LikeSeeder();

module.exports = { LikeSeeder };