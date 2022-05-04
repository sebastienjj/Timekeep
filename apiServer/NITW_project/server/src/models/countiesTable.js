const Model = require("./Model");

class countiesTable extends Model {
  static get tableName() {
    return "counties"
  }

  static get jsonSchema() {
    return {
      type:"object",
      required: ["state","countyName","countyCode","score"],
      properties: {
        state: {type:"string"},
        countyCode:{type:"integer"},
        countyName:{type:"string"},
        score:{type:"integer"},
        averageManufacturingWages:{type:"integer"},
        unemploymentRate:{type:"float"},
        medianIncome: {type:"integer"},
        localTaxRate: {type:"float"}

      }
    }
  }



}

module.exports = countiesTable