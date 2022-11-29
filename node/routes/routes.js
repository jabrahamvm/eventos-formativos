import express from 'express';
import { consultarAllSolicitudes, consultarSolicitud, crearSolicitud } from '../controllers/ControladorSolicitud.js';
import { consultarAllUsuarios, consultarUsuario } from '../controllers/ControladorUsuario.js';

const router = express.Router();

// Rutas para la informacion de un usuario
router.get('/usuarios/', consultarAllUsuarios)
router.get('/usuarios/:id/', consultarUsuario)

// Rutas para solicitud
router.get('/solicitudes', consultarAllSolicitudes)
router.get('/solicitudes/:id/', consultarSolicitud)
router.post('/solicitudes/', crearSolicitud)

export default router;