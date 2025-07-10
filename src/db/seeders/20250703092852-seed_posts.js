'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    const topics = await queryInterface.sequelize.query(`SELECT id FROM topics;`);
    const topicRows = topics[0];

    const posts = [];
    for (const topic of topicRows) {
      for (let i = 0; i < 50; i++) {
        posts.push({
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          topicId: topic.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    await queryInterface.bulkInsert('posts', posts, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
