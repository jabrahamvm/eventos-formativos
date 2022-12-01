import ModeloEvento from "../models/ModeloEvento.js";

// crearEvento
export const crearEvento = async (req, res) => {
    try {
        await ModeloEvento.create(req.body)
        res.json({
            "message": "Evento creado con exito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
// detallesEvento
export const detallesEvento = async (req, res) => {
    try {
        console.log(req.params)
        const evento = await ModeloEvento.findOne({where: {id:req.params.id}});
        res.json(evento)
    } catch (error) {
        res.json({message: error.message})
    }
}
// mostrarEventos
export const mostrarEventos = async (req, res) => {
    try {
        const eventos = await ModeloEvento.findAll()
        res.json(eventos)
    } catch (error) {
        res.json({message: error.message})
    }
}