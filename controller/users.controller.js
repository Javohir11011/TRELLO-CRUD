import pool from "../database/connection.js"
export const getAllUesersCon  = async(req, res, next)=>{
    try {
        const data = await pool.query(`select * from users`) 
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const getByIDUesersCon  = async(req, res, next)=>{
    try {
        const id = parseInt(req.params.id)
        const data = await pool.query(`
        select * from users
        where id = $1`,[id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const putByIDUesersCon  = async(req, res, next)=>{
    try {
        // res.send("update boldi") 
        const id = parseInt(req.params.id)
        const {name} = req.body
        const data = await pool.query(`
        update users
        set name = $1
        where id = $2`,[name, id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

export const deleteByIDUesersCon  = async(req, res, next)=>{
    try {
        // res.send("Ochirildi") 
        const id = parseInt(req.params.id)
        const data = await pool.query(`
        delete from users
        where id = $1`,[id])
        res.send(data.rows)
    } catch (error) {
        next(error)
    }
}

