import pool from '../data/dbConfig.js';

// Función para Agregar un Nuevo Estudiante
export const agregarEstudiante = async (nombre, rut, curso, nivel) => {
    const consulta = {
        text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [nombre, rut, curso, nivel],
    };

    try {
        const res = await pool.query(consulta);
        console.log('Estudiante agregado:', res.rows[0]);
    } catch (err) {
        console.error('Error al agregar el estudiante:', err.stack);
    }
};

// Función para Obtener Todos los Estudiantes
export const obtenerEstudiantes = async () => {
    const consulta = {
        text: 'SELECT * FROM estudiantes',
    };

    try {
        const res = await pool.query(consulta);
        console.log('Estudiantes registrados:', res.rows);
    } catch (err) {
        console.error('Error al obtener los estudiantes:', err.stack);
    }
};

// Función para Obtener un Estudiante por RUT
export const obtenerEstudiantePorRut = async (rut) => {
    const consulta = {
        text: 'SELECT * FROM estudiantes WHERE rut = $1',
        values: [rut],
    };

    try {
        const res = await pool.query(consulta);
        if (res.rows.length > 0) {
            console.log('Estudiante encontrado:', res.rows[0]);
        } else {
            console.log('No se encontró un estudiante con el RUT proporcionado.');
        }
    } catch (err) {
        console.error('Error al obtener el estudiante por RUT:', err.stack);
    }
};

// Función para Actualizar la Información de un Estudiante
export const actualizarEstudiante = async (nombre, rut, curso, nivel) => {
    const consulta = {
        text: 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *',
        values: [nombre, curso, nivel, rut],
    };

    try {
        const res = await pool.query(consulta);
        console.log('Estudiante actualizado:', res.rows[0]);
    } catch (err) {
        console.error('Error al actualizar el estudiante:', err.stack);
    }
};


// Función para Eliminar un Estudiante
export const eliminarEstudiante = async (rut) => {
    const consulta = {
        text: 'DELETE FROM estudiantes WHERE rut = $1 RETURNING *',
        values: [rut],
    };

    try {
        const res = await pool.query(consulta);
        console.log('Estudiante eliminado:', res.rows[0]);
    } catch (err) {
        console.error('Error al eliminar el estudiante:', err.stack);
    }
};
