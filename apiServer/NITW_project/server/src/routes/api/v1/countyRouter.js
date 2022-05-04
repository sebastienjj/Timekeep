import express from "express";
import passport from "passport";
import { countiesTable } from "../../../models/index.js";
const countyRouter = new express.Router()

countyRouter.get("/",async (req, res)=> {
  const table = await countiesTable.query()
  console.log(table)
  res.status(200).json(table)
})

export default countyRouter