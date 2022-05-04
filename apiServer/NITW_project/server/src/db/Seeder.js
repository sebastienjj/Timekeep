/* eslint-disable no-console */
import { connection } from "../boot.js"
import countiesSeeder from "./seeders/countySeeder.js"
class Seeder {
  static async seed() {
    // include individual seed commands here
    await countiesSeeder.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder