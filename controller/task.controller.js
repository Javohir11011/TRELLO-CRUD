import pool from "../database/connection.js"
export const getAllTaskCon = async(req, res, next)=>{
    try {
        const data = await pool.query(`select * from tasks`) 
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const createTaskCon  = async(req, res, next)=>{
    try {
        const {title, orders, description, userId, boardId, columnId} = req.body
        const data = await pool.query(`
        insert into tasks(title , orders, description, userId, boardId, columnId)
        values($1, $2, $3,$4,$5,$6)`, [title, orders, description, userId,boardId, columnId]) 
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const getByIDTaskCon  = async(req, res, next)=>{
    try {
        const id = parseInt(req.params.id)
        const data = await pool.query(`
        select * from tasks
        where id = $1`,[id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const putByIDTaskCon  = async(req, res, next)=>{
    try {
        // res.send("update boldi") 
        const id = parseInt(req.params.id)
        const {title} = req.body
        const data = await pool.query(`
        update tasks
        set title = $1
        where id = $2`,[title, id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const deleteByIDTaskCon  = async(req, res, next)=>{
    try {
        // res.send("Ochirildi") 
        const id = parseInt(req.params.id)
        const data = await pool.query(`
        delete from tasks
        where id = $1`,[id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

