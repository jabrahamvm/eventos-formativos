import ModeloSolicitud from "../models/ModeloSolicitud.js";

export const consultarAllSolicitudes = async (req,res) => {
    try {
        const solicitudes = await ModeloSolicitud.findAll()
        res.json(solicitudes)
    } catch (error){
        res.json({message: error.message})
    }
}

export const consultarSolicitud = async (req,res) => {
    try {
        console.log(req.params.id)
        const solicitud = await ModeloSolicitud.findOne({where: {id:req.params.id}})
        res.json(solicitud)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const modificarSolicitud = async (req,res) => {
    try {
        console.log(req.body)
        await ModeloSolicitud.update(req.body, {where: {id:req.params.id}})
        res.json({message:`Modificación a Solicitud ${req.params.id} ha sido procesada con exito.`})
    } catch (error) {
        res.json({message:error.message})
    }
}

export const crearSolicitud = async (req,res) => {
    try {
        await ModeloSolicitud.create(req.body)
        res.json({
            "message": "Solicitud creada con exito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


export const consultarMisSolicitudes = async (req,res) => {
    try {
        const solicitudes = await ModeloSolicitud.findAll({where: {idResponsable:req.params.id}})
        res.json(solicitudes)
    } catch (error){
        res.json({message: error.message})
    }
}
// Metodo para modificar el estado de una solicitud UPDATE solicitud (status) VALUES ()
