import express from "express"
import {deleteByIDUesersCon, getAllUesersCon, getByIDUesersCon, putByIDUesersCon } from "../controller/index.js"


export const userRouter = express.Router()

userRouter.get('/all', getAllUesersCon)
userRouter.get('/:id', getByIDUesersCon)
userRouter.put('/:id', putByIDUesersCon)
userRouter.delete('/:id', deleteByIDUesersCon)










