import pool from '../data/dbConfig.js';

export const agregarEstudiante = async (nombre, rut, curso, nivel) => {
    try {
        const result = await pool.query(
            'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, rut, curso, nivel]
        );
        console.log(`Estudiante ${nombre} agregado con éxito:`);
    } catch (error) {
        console.error('Error al agregar el estudiante:', error);
    }
};

//Función para Obtener Todos los Estudiantes
export const obtenerEstudiantes = async () => {
    try {
        const result = await pool.query('SELECT * FROM estudiantes');
        console.log(result.rows);
    } catch (error) {
        console.error('Error al obtener los estudiantes:', error);
    }
};


//Función para Obtener un Estudiante por RUT
export const obtenerEstudiantePorRut = async (rut) => {
    try {
        const result = await pool.query('SELECT * FROM estudiantes WHERE rut = $1', [rut]);
        if (result.rows.length > 0) {
            console.log(result.rows[0]);
        } else {
            console.log('No se encontró un estudiante con el RUT proporcionado.');
        }
    } catch (error) {
        console.error('Error al obtener el estudiante por RUT:', error);
    }
};


//Función para Actualizar la Información de un Estudiante
export const actualizarEstudiante = async (nombre, rut, curso, nivel) => {
    try {
        const result = await pool.query(
            'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *',
            [nombre, curso, nivel, rut]
        );
        if (result.rows.length > 0) {
            console.log(`Estudiante con ${nombre} con RUT ${rut} ha sido actualizado.`);
        } else {
            console.log('No se encontró un estudiante con el RUT proporcionado para actualizar.');
        }
    } catch (error) {
        console.error('Error al actualizar el estudiante:', error);
    }
};



//Función para Eliminar un Estudiante
export const eliminarEstudiante = async (rut) => {
    try {
        const result = await pool.query('DELETE FROM estudiantes WHERE rut = $1 RETURNING *', [rut]);
        if (result.rows.length > 0) {
            console.log(`Registros de estudiante con RUT ${rut} ha sido eliminado.`);
        } else {
            console.log('No se encontró un estudiante con el RUT proporcionado para eliminar.');
        }
    } catch (error) {
        console.error('Error al eliminar el estudiante:', error);
    }
};
