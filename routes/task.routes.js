import express from "express"
import { createTaskCon, deleteByIDTaskCon, getAllTaskCon, getByIDTaskCon, putByIDTaskCon } from "../controller/index.js"


export const taskRouter = express.Router()

taskRouter.get('/all', getAllTaskCon)
taskRouter.get('/:id', getByIDTaskCon)
taskRouter.post('/new', createTaskCon)
taskRouter.put('/:id', putByIDTaskCon)
taskRouter.delete('/:id', deleteByIDTaskCon)










