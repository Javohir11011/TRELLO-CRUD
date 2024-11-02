import express from "express"
import dotenv from "dotenv"
import { boardRouter, columnsRouter, taskRouter, userRouter } from "./routes/index.js"
import {connectDatabase, createTables} from "./database/index.js"
dotenv.config()
const app = express()

app.use(express.json())
app.use("/users", userRouter)
app.use("/board", boardRouter)
app.use("/columns", columnsRouter)
app.use("/tasks", taskRouter)

app.use("/setUp", (req, res) => {
    createTables();
    res.status(201).send("Tables were created");
});

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server running...`);
    connectDatabase()
    createTables()
})




  






