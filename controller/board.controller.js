import pool from "../database/connection.js"
export const getAllBoardCon  = async(req, res, next)=>{
    try {
        const data = await pool.query(`select * from boards`) 
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const createBoardCon  = async(req, res, next)=>{
    try {
        const {title, columns} = req.body
        const data = await pool.query(`
        insert into boards(title , columns)
        values($1, $2)`, [title, columns]) 
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const getByIDBoardCon  = async(req, res, next)=>{
    try {
        const id = parseInt(req.params.id)
        const data = await pool.query(`
        select * from boards
        where id = $1`,[id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const putByIDBoardCon  = async(req, res, next)=>{
    try {
        // res.send("update boldi") 
        const id = parseInt(req.params.id)
        const {title} = req.body
        const data = await pool.query(`
        update boards
        set title = $1
        where id = $2`,[title, id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const deleteByIDBoardCon  = async(req, res, next)=>{
    try {
        // res.send("Ochirildi") 
        const id = parseInt(req.params.id)
        const data = await pool.query(`
        delete from boards
        where id = $1`,[id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

