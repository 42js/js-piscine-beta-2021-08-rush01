'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    }, 
    nickname: {
      type: DataTypes.STRING(20),
    }, 
    photo: {
      type: DataTypes.STRING(200),
    }, 
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Users'
  });
  return Users;
};
