import pool from "../database/connection.js"
export const getAllColumnsCon  = async(req, res, next)=>{
    try {
        const data = await pool.query(`select * from columns`) 
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const createColumnsCon  = async(req, res, next)=>{
    try {
        const {title} = req.body
        const data = await pool.query(`
        insert into columns(title)
        values($1, $2)`, [title]) 
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const getByIDColumnsCon  = async(req, res, next)=>{
    try {
        const id = parseInt(req.params.id)
        const data = await pool.query(`
        select * from columns
        where id = $1`,[id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const putByIDColumnsCon  = async(req, res, next)=>{
    try {
        // res.send("update boldi") 
        const id = parseInt(req.params.id)
        const {title} = req.body
        const data = await pool.query(`
        update columns
        set title = $1
        where id = $2`,[title, id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const deleteByIDColumnsCon  = async(req, res, next)=>{
    try {
        // res.send("Ochirildi") 
        const id = parseInt(req.params.id)
        const data = await pool.query(`
        delete from columns
        where id = $1`,[id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

