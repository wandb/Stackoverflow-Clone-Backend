const {DataTypes} = require('sequelize');
const db = require('../config/db.config');

const UsersModel = db.define(
  'users',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: 'username',
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    gravatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    db,
    underscored: true,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{name: 'id'}],
      },
      {
        name: 'username',
        unique: true,
        using: 'BTREE',
        fields: [{name: 'username'}],
      },
    ],
  }
);

module.exports = {UsersModel};
