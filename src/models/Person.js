const { Model } = require("objection");

class Person extends Model {
  static get tableName() {
    return "people";
  }
}

module.exports = Person;
