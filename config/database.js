const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('postgres', 'admin', '1234567890', {
  host: 'localhost',
  port: 5433,
  dialect:  'postgres'
});

const connectDB = async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
}

module.exports = {sequelize, connectDB};

