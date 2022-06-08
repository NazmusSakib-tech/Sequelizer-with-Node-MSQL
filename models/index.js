const debConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  debConfig.DB,
  debConfig.USER,
  debConfig.PASSWORD,
  {
    host: debConfig.HOST,
    dialect: debConfig.dialect,
    pool: {
      max: debConfig.pool.max,
      min: debConfig.pool.min,
      acquire: debConfig.pool.acquire,
      idle: debConfig.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("error", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/userModel")(sequelize, DataTypes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.log("error", err);
  });

module.exports = db;
