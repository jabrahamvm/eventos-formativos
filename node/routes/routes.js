import express from 'express';
import { inscribirEstudiante, misEventos } from '../controllers/ControladorEstudiante.js';
import { crearEvento, detallesEvento, mostrarEventos } from '../controllers/ControladorEvento.js';
import { consultarResponsable } from '../controllers/ControladorResponsable.js';
import { crearRetroalimentacion, eliminarRetroalimentacion, getRetroalimentaciones, modificarRetroalimentacion } from '../controllers/ControladorRetroalimentacion.js';
import { consultarAllSolicitudes, consultarSolicitud, crearSolicitud, modificarSolicitud,consultarMisSolicitudes } from '../controllers/ControladorSolicitud.js';
import { consultarAllUsuarios, consultarUsuario } from '../controllers/ControladorUsuario.js';

const router = express.Router();

// Rutas para la informacion de un usuario
router.get('/usuarios/', consultarAllUsuarios)
router.get('/usuarios/:id/', consultarUsuario)

// Rutas para solicitud
router.get('/solicitudes/', consultarAllSolicitudes)
router.get('/solicitudes/:id/', consultarSolicitud)
router.post('/solicitudes/', crearSolicitud)
router.put('/solicitudes/:id/', modificarSolicitud)

// Rutas para eventos
router.get('/eventos', mostrarEventos)
router.get('/eventos/:id', detallesEvento)
router.post('/eventos/', crearEvento)

// Rutas para responsable de solicitud
router.get('/responsable/:id/',consultarResponsable)
router.get('/responsable/:id/solicitudes/', consultarMisSolicitudes)

// Retroalimentaciones
router.get('/solicitudes/:id/retro/',getRetroalimentaciones)
router.post('/solicitudes/:id/retro/',crearRetroalimentacion)
router.put('/solicitudes/retro/:id/', modificarRetroalimentacion)
router.delete('/solicitudes/retro/:id/', eliminarRetroalimentacion)

// Rutas para Estudiante
// Mostrar mis eventos
// Inscribirse a evento
router.get('/usuario/:id/eventos/', misEventos)
router.post('/usuario/inscribir/',inscribirEstudiante)
export default router;