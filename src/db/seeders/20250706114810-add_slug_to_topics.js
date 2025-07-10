"use strict";

const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const topics = await queryInterface.sequelize.query(
      `SELECT id, name FROM topics;`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    for (const topic of topics) {
      let slug = "";
      if (topic.name) {
        slug = topic.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "");
      } else {
        slug = faker.helpers.slugify(faker.lorem.words(3)).toLowerCase();
      }

      await queryInterface.sequelize.query(
        `UPDATE topics SET slug = :slug WHERE id = :id;`,
        {
          replacements: { slug, id: topic.id },
        }
      );
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `UPDATE topics SET slug = NULL;`
    );
  },
};
