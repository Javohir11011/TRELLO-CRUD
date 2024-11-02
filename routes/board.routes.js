import express from "express"
import { createBoardCon, deleteByIDBoardCon, getAllBoardCon, getByIDBoardCon, putByIDBoardCon } from "../controller/index.js"


export const boardRouter = express.Router()

boardRouter.get("/all", getAllBoardCon)
boardRouter.get("/:id", getByIDBoardCon)
boardRouter.post("/new", createBoardCon)
boardRouter.put("/:id", putByIDBoardCon)
boardRouter.delete("/:id", deleteByIDBoardCon)
