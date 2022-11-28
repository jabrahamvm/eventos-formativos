import express from 'express';
import { consultarAllSolicitudes, consultarSolicitud, guardarSolicitud } from '../controllers/ControladorSolicitud.js';
import { consultarAllUsuarios, consultarUsuario } from '../controllers/ControladorUsuario.js';

const router = express.Router();

// Rutas para la informacion de un usuario
router.get('/usuarios/', consultarAllUsuarios)
router.get('/usuarios/:id/', consultarUsuario)

// Rutas para solicitud
router.get('/solicitudes', consultarAllSolicitudes)
router.get('/solicitudes/:id/', consultarSolicitud)
router.post('/solicitudes/', guardarSolicitud)

export default router;