const fs = require("fs");
const path = require("path");
const pluralize = require("pluralize");
const { Sequelize, DataTypes } = require("sequelize");
const parseQuery = require("./parseQuery");
const testConnection = require("./testConnection");
const { constants } = require("../utils");

const { featuresDir } = constants;

const env = process.env.NODE_ENV || "development";
const config = require("../../db/config")[env];

const db = {};

const sequelize = new Sequelize(config);

if (env === "development") {
  testConnection(sequelize);
}

function setModel(feature, matchedModel) {
  const model = require(path.join(featuresDir, feature, matchedModel))(
    sequelize,
    DataTypes
  );

  db[model.name] = model;
}

fs.readdirSync(featuresDir).forEach((feature) => {
  const [matchedModel] = fs
    .readdirSync(path.join(featuresDir, feature))
    .filter((file) => file === `${pluralize.singular(feature)}.js`);

  if (matchedModel) {
    setModel(feature, matchedModel);
  }
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.parseQuery = parseQuery;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
