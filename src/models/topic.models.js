'use strict';

module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique:true
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    tableName: 'topics',
    timestamps: true
  });

  Topic.associate = function(models) {
    // Topic hasMany Posts
    Topic.hasMany(models.Post, {
      foreignKey: 'topicId',
      as: 'posts'
    });
  };

  return Topic;
};
