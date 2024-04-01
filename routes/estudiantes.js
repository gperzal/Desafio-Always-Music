// routes/estudiantes.js
import express from 'express';

import {
    agregarEstudiante,
    obtenerEstudiantes,
    obtenerEstudiantePorRut,
    actualizarEstudiante,
    eliminarEstudiante
} from '../controllers/estudiantesController.js';

const router = express.Router();

// Ruta para agregar un nuevo estudiante
router.post('/estudiantes', agregarEstudiante);

// Ruta para obtener todos los estudiantes
router.get('/estudiantes', obtenerEstudiantes);

// Ruta para obtener un estudiante por RUT
router.get('/estudiantes/:rut', obtenerEstudiantePorRut);

// Ruta para actualizar un estudiante
router.put('/estudiantes/:rut', actualizarEstudiante);

// Ruta para eliminar un estudiante
router.delete('/estudiantes/:rut', eliminarEstudiante);



export default router;
