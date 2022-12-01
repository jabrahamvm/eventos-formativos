// Trabajar con tabla de Inscripciones
import ModeloEvento from "../models/ModeloEvento.js";
import ModeloEstudiante from "../models/ModeloEstudiante.js";
import ModeloInscripciones from "../models/ModeloInscripciones.js";
// Get mis eventos -> Trabaja con la tabla inscripciones WHERE idEstudiante = id (la de la tabla usuario)

// Inscribirse a evento -> Insert into inscripciones VALUES (id_evento, id_est)
// detallesEvento
export const misEventos = async (req, res) => {
    try {
        console.log(req.params)
        const inscr = await ModeloEstudiante.findAll({include:{model:ModeloEvento},
        where:{idUsuario:req.params.id}})
        
        const inscripciones = await ModeloEstudiante.findAll(
            {include:{
                model:ModeloEvento
            },
            where:{
                idUsuario:req.params.id
            }
        })
        res.json(inscripciones[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
// mostrarEventos
export const inscribirEstudiante = async (req, res) => {
    try {
        await ModeloInscripciones.create(req.body)
        res.json({message: `Inscripción exitosa al evento ${req.body.idEvento}`})
    } catch (error) {
        res.json({message: error.message})
    }
}