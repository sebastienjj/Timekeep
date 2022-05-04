import { countiesTable } from "../../models/index.js";
import neatCsv from 'neat-csv';
import fs from "fs"
// /Users/henrywiest/NITW_project/server/src/db/seeders/countySeeder.js

class countiesSeeder {
  static scoreAlgo =(taxRate,unemploymentRate,medianIncome,averageManufacturingWages) => {
    const taxRateComponent = 10-((taxRate-0)*(10/(9.45-0)))
    const unemploymentRateComponent = (unemploymentRate-1.9)*(10/(18.9-1.9))
    const medianIncomeComponent = (medianIncome-27859)*(70/(140362-27859))
    const averageManufacturingWagesComponent = 10-((averageManufacturingWages-20852)*(10/(143884-20852)))

    const output = taxRateComponent+unemploymentRateComponent+medianIncomeComponent+averageManufacturingWagesComponent
    return parseInt((output-10)*(99/70))

  
  }



  static async seed() {
    const taxesStream = fs.createReadStream("../server/csv/clean-now_-_numeric_only_-_0503-1421_-_localtaxrates.xlsx_-__rb_.csv")
    const worforceWagesStream = fs.createReadStream('../server/csv/Workforce Wages.xlsx - US_St_Cn_MSA.csv')
    const incomeByCountyStream = fs.createReadStream("../server/csv/IncomeByCounty.xlsm - Median Income by County.csv")
    const latLongStream = fs.createReadStream("../server/csv/county lat_long data - table-1.csv")
    const latLongData = await neatCsv(latLongStream)
    const taxesData = await neatCsv(taxesStream)
    const incomeByCountyData = await neatCsv(incomeByCountyStream)
    const workforceWagesData = await neatCsv(worforceWagesStream)
    let filteredData = workforceWagesData.filter((element) => {
      return (element.Ownership == "Total Covered" && element["Area Type"] == "County" && !element["Area"].includes("Unknown"))
    })
    filteredData = filteredData.filter((element) => {
      const industries = workforceWagesData.find(x => {
        return (element["Area\nCode"] == x["Area\nCode"] && x.Industry == "1013 Manufacturing" && parseInt(x["Annual Average Establishment Count"].replaceAll(",", ""))>9 && x["Annual Average Status Code"]!="N" )
      })
      return !!industries
    })
    filteredData = filteredData.filter(element => {
      const income = incomeByCountyData.find(x => {
        return parseInt(x["County Code"]) == parseInt(element["Area\nCode"])
      })
      return income
    })
    const mappedData = filteredData.map((element) => {
      const industries = workforceWagesData.filter(x => {
        return (element["Area\nCode"] == x["Area\nCode"] && x.Industry == "1013 Manufacturing")
      })
      const income = incomeByCountyData.find(x => {
        return (parseInt(x["County Code"]) == parseInt(element["Area\nCode"]))
      })
      const state = taxesData.find(x => {
        return x.State == element["St Name"]
      })
      const latlong = latLongData.find(x => {
        return x.FIPS == parseInt(element["Area\nCode"])
      })
      
      const score =this.scoreAlgo(parseFloat(state["Combined Tax Rate"]),parseFloat(income["Unemployment 2018"]),parseInt(income["Median Income 2018"].replaceAll(",", "").replaceAll("$", "")),parseInt(industries[0]["Annual Average Pay"].replaceAll(",", "")))
  
      return {
        latitude:parseFloat(latlong.Latitude.replaceAll("–","-")),
        longitude:parseFloat(latlong.Longitude.replaceAll("–","-")),
        localTaxRate:parseFloat(state["Combined Tax Rate"]),
        unemploymentRate: parseFloat(income["Unemployment 2018"]),
        medianIncome: parseInt(income["Median Income 2018"].replaceAll(",", "").replaceAll("$", "")),
        averageManufacturingWages: parseInt(industries[0]["Annual Average Pay"].replaceAll(",", "")),
        score: score,
        state: element["St Name"],
        countyName: element["Area"].split(",")[0],
        countyCode: parseInt(element["Area\nCode"])
      }
    })
    for (const element of mappedData) {
      await countiesTable.query().insertAndFetch(element)
    }
    // console.log(await countiesTable.query().select())
  }
}

export default countiesSeeder



/*
min unemployment rate - 18.9%, Lyon County, Iowa
max unemployment rate - 1.9%, imperial county, California
min average manufacturing wages - 20852,  Starr County, Texas
max manufacturing wages - 143884, Marin County, California
min median income -  27859, Sumter County, Alabama
max median income - 140382,Loudoun County, Virginia,
min localTaxRate - 0, anywhere in Oregon, Delaware, Montana. Oregon
max localTaxRate - 9.45, Tennessee
*/

