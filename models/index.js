const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize(`postgres://postgres:T#st1234@localhost:5432/training`)

const sequelize = new Sequelize('training', 'postgres', 'T#st1234', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate().then(() => {
  console.log(`Yay!! Connected to the database successfully!`);
}).catch((error) => {
  console.log(`Error connecting to the database`);
  console.log(`Error is ${error}`);
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel')(sequelize, DataTypes);
db.users.sync({ alter: true });

module.exports = db