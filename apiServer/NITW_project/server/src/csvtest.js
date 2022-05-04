import neatCsv from 'neat-csv';
import fs from "fs"
const results = [];

///Users/henrywiest/NITW_project/server/csv/IncomeByCounty.xlsm - Median Income by County.csv

const stream = fs.createReadStream('/Users/henrywiest/NITW_project/server/csv/Workforce Wages.xlsx - US_St_Cn_MSA.csv')

const data = await neatCsv(stream)

const filteredData = data.filter((element) => {
  return (element.Ownership == "Total Covered" && element["Area Type"]=="County"&& !element["Area"].includes("Unknown"))
})
filteredData.forEach((element)=> {
  console.log(element["St Name"])
  console.log(element["Area\nCode"])
  console.log(element["Area"].split(",")[0])
})
// console.log(filteredData)