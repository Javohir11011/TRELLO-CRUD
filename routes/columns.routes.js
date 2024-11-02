import express from "express"
import { createColumnsCon, deleteByIDColumnsCon, getAllColumnsCon, getByIDColumnsCon, putByIDColumnsCon } from "../controller/index.js"


export const columnsRouter = express.Router()

columnsRouter.get("/all", getAllColumnsCon)
columnsRouter.get("/:id", getByIDColumnsCon)
columnsRouter.post("/new", createColumnsCon)
columnsRouter.put("/:id", putByIDColumnsCon)
columnsRouter.delete("/:id", deleteByIDColumnsCon)
