import express from "express";
import { countiesTable } from "../../../models/index.js";
const countyRouter = new express.Router()
countyRouter.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  next()
})
countyRouter.get("/",async (req, res)=> {
  const table = await countiesTable.query()
  res.status(200).json(table)
})

export default countyRouter