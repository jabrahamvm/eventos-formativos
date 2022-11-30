// Trabaja con la tabla de retroalimentacion
import ModeloRetroalimentacion from "../models/ModeloRetroalimentacion.js";
// getRetroalimentaciones
export const getRetroalimentaciones = async (req,res) => {
    try {
        const retroalimentaciones = await ModeloRetroalimentacion.findAll()
        res.json(retroalimentaciones)
    } catch (error){
        res.json({message: error.message})
    }
}
// createRetro...
export const crearRetroalimentacion = async (req,res) => {
    try {
        await ModeloRetroalimentacion.create(req.body)
        res.json({
            "message": "Retroalimentacion creada con exito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
// updateRetroalimentacion
export const modificarRetroalimentacion = async (req,res) => {
    try {
        await ModeloRetroalimentacion.update(req.body, {where: {idRetroalimentacion:req.params.id}})
        res.json({message:`Modificación a Solicitud ${req.params.id} ha sido procesada con exito.`})
    } catch (error) {
        res.json({message:error.message})
    }
}

export const eliminarRetroalimentacion = async (req,res) => {
    try {
        await ModeloRetroalimentacion.destroy({where:{idRetroalimentacion:req.params.id}})
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}