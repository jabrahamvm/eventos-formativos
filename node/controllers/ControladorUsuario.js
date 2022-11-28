import ModeloUsuario from "../models/ModeloUsuario.js";

// Metodos para los CRUD
// Mostrar todos los registros
export const consultarAllUsuarios = async (req, res) => {
    try {
        const usuarios = await ModeloUsuario.findAll()
        res.json(usuarios)
    } catch (error){
        res.json({message: error.message})
    }
}
//Mostrar un registro
export const consultarUsuario = async (req,res) => {
    try {
        const usuario = await ModeloUsuario.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(usuario[0])
    } catch {
        res.json({message: error.message})
    }
}