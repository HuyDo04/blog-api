"use strict";

const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const posts = await queryInterface.sequelize.query(
      `SELECT id, title FROM posts;`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    for (const post of posts) {
      // Tạo slug từ title hoặc random slug nếu title null
      let slug = "";
      if (post.title) {
        slug = post.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "");
      } else {
        slug = faker.helpers.slugify(faker.lorem.words(5)).toLowerCase();
      }

      await queryInterface.sequelize.query(
        `UPDATE posts SET slug = :slug WHERE id = :id;`,
        {
          replacements: { slug, id: post.id },
        }
      );
    }
  },

  async down(queryInterface, Sequelize) {
    // Xóa slug nếu rollback
    await queryInterface.sequelize.query(
      `UPDATE posts SET slug = NULL;`
    );
  },
};
