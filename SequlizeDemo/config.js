const { Sequelize } = require("sequelize");

const db = new Sequelize("demo", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(() => {
    console.error("Unable to connect to the database");
  });

module.exports = db;
