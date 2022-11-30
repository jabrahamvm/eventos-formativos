import ModeloResponsable from "../models/ModeloResponsable.js"

export const consultarMisSolicitudes = async (req,res) => {
    try {
        const solicitudes = await ModeloResponsable.findAll({where: {idResponsable:req.params.id}})
        res.json(solicitudes)
    } catch (error){
        res.json({message: error.message})
    }
}

export const consultarResponsable = async (req,res) => {
    try {
        const resp = await ModeloResponsable.findOne({where: {idResponsable:req.params.id}})
        res.json(resp)
    } catch (error){
        res.json({message: error.message})
    }
}