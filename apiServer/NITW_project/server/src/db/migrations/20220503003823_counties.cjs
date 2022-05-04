/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {

  return knex.schema.createTable("counties",(table) => {
    table.bigIncrements("id")
    table.bigInteger("score")
    table.string("state").notNullable()
    table.string("countyName").notNullable()
    table.integer("countyCode").notNullable()
    table.integer("averageManufacturingWages").notNullable()
    table.float("unemploymentRate")
    table.integer("medianIncome").notNullable()
    table.float("localTaxRate")
    table.float("latitude")
    table.float("longitude")
    table.json("url")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("counties")
}
