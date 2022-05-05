import { connection } from '../src/boot.js';
import neatCsv from 'neat-csv';
import fs from "fs"
import countiesTable from '../src/models/countiesTable.js';

const table =await countiesTable.query()

const taxesStream = fs.createReadStream("../csv/clean-now_-_numeric_only_-_0503-1421_-_localtaxrates.xlsx_-__rb_.csv")
const worforceWagesStream = fs.createReadStream('../csv/Workforce Wages.xlsx - US_St_Cn_MSA.csv')
const incomeByCountyStream = fs.createReadStream("../csv/IncomeByCounty.xlsm - Median Income by County.csv")
const latLongStream = fs.createReadStream("../csv/county lat_long data - table-1.csv")
const latLongData = await neatCsv(latLongStream)
const taxesData = await neatCsv(taxesStream)
const incomeByCountyData = await neatCsv(incomeByCountyStream)
const workforceWagesData = await neatCsv(worforceWagesStream)

console.log(taxesData)