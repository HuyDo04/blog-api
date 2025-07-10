'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    const posts = await queryInterface.sequelize.query(`SELECT id FROM posts;`);
    const postRows = posts[0];

    const comments = [];
    for (const post of postRows) {
      for (let i = 0; i < 5; i++) {
        comments.push({
          content: faker.lorem.sentences(2),
          postId: post.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    await queryInterface.bulkInsert('comments', comments, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
