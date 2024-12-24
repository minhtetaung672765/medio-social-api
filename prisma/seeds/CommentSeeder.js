const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();

// Use this seeder for newly data creation: db reset condition
// If db is not entirely reset, use seeder below instead
async function CommentSeeder() {
    const data = [];
    for (let i = 0; i < 40; i++) {
        const content = faker.lorem.paragraph();
        const userId = faker.number.int({ min: 1, max: 10 });
        const postId = faker.number.int({ min: 1, max: 20 });
        data.push({ content, userId, postId });
    }
    console.log("Comment seeding started...");
    await prisma.comment.createMany({ data });
    console.log("Comment seeding done.");
}

// If db is not entirely reset when migrated, use this seeder for comments
// this seeder will only seed the existed data of users and posts to comments, ensures foreign key
// async function CommentSeeder() {
//     const users = await prisma.user.findMany({ select: { id: true } });
//     const posts = await prisma.post.findMany({ select: { id: true } });

//     const userIds = users.map(user => user.id);
//     const postIds = posts.map(post => post.id);

//     const data = [];
//     for (let i = 0; i < 40; i++) {
//         const content = faker.lorem.paragraph();
//         const userId = faker.helpers.arrayElement(userIds);
//         const postId = faker.helpers.arrayElement(postIds);
//         data.push({ content, userId, postId });
//     }

//     console.log("Comment seeding started...");
//     await prisma.comment.createMany({ data });
//     console.log("Comment seeding done.");
// }


module.exports = { CommentSeeder };