// server.js
import {
    agregarEstudiante,
    obtenerEstudiantes,
    obtenerEstudiantePorRut,
    actualizarEstudiante,
    eliminarEstudiante
} from './controllers/estudiantesArgsController.js';

import express from 'express';
import router from './routes/index.js';

const PORT = process.env.PORT || 3000;
const app = express();



app.use(express.json()); // Middleware para parsear el body de las peticiones a JSON

// Usar las rutas
app.use(router);


const args = process.argv.slice(2);
const comando = args[0];


if (args.length > 0) {
    // Manejo de comandos CLI
    (async () => {
        try {
            switch (comando) {
                case 'nuevo':
                    if (args.length === 5) {
                        await agregarEstudiante(args[1], args[2], args[3], args[4]);
                    } else {
                        console.log('Por favor, proporciona el nombre completo, RUT, curso y nivel del estudiante.');
                    }
                    break;
                case 'consulta':
                    await obtenerEstudiantes();
                    break;
                case 'rut':
                    if (args.length === 2) {
                        await obtenerEstudiantePorRut(args[1]);
                    } else {
                        console.log('Por favor, proporciona el RUT del estudiante.');
                    }
                    break;
                case 'editar':
                    if (args.length === 5) {
                        await actualizarEstudiante(args[1], args[2], args[3], args[4]);
                    } else {
                        console.log('Por favor, proporciona el nombre completo, RUT, curso y nivel del estudiante.');
                    }
                    break;
                case 'eliminar':
                    if (args.length === 2) {
                        await eliminarEstudiante(args[1]);
                    } else {
                        console.log('Por favor, proporciona el RUT del estudiante a eliminar.');
                    }
                    break;
                default:
                    console.log('Comando no reconocido');
                    break;
            }

        } catch (error) {
            console.error(error);
        } finally {
            process.exit(0); // Cierra el proceso después de manejar el comando
        }
    })();
} else {
    // Inicia el servidor solo si no hay comandos CLI
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}