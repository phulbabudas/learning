const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Teacher = sequelize.define('Teacher', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  subject: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },

  salary: {
    type: DataTypes.INTEGER
  },
  password: {
    type: DataTypes.STRING
    
 },
});

module.exports = Teacher;