import express from 'express';
import { crearEvento, detallesEvento, mostrarEventos } from '../controllers/ControladorEvento.js';
import { consultarResponsable } from '../controllers/ControladorResponsable.js';
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

// Rutas para retroalimentaciones de solicitud
router.get('/responsable/:id/',consultarResponsable)
router.get('/responsable/:id/solicitudes/', consultarMisSolicitudes)


// Rutas para Estudiante
// Mostrar mis eventos
// Inscribirse a evento

export default router;