# Desafío Always Music

Este proyecto es una aplicación de backend para la gestión de estudiantes de la escuela de música Always Music. Permite agregar, consultar, actualizar y eliminar información de estudiantes en una base de datos PostgreSQL.

## Tecnologías Utilizadas

Este proyecto fue construido utilizando las siguientes tecnologías:

![POSTGRES](https://img.shields.io/badge/Postgres-436590?style=for-the-badge&logo=postgresql&logoColor=fff&color=436590)![DOTENV](https://img.shields.io/badge/dotenv-0000?style=for-the-badge&logo=dotenv&logoColor=fff&color=b0a321)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Neon](https://img.shields.io/badge/neon-0c0c0c?style=for-the-badge&logo=https%3A%2F%2Fneon.tech%2F_next%2Fstatic%2Fsvgs%2Fe9de8fc7653111a1423e0d227c0c5e9f.svg)

## Características

- Agregar Estudiantes: Añade nuevos estudiantes a la base de datos, incluyendo su nombre, RUT, curso y nivel.
- Consultar Estudiantes: Recupera la lista de todos los estudiantes registrados o busca un estudiante específico por su RUT.
- Actualizar Información: Modifica los detalles de un estudiante existente en la base de datos.
- Eliminar Estudiantes: Elimina el registro de un estudiante de la base de datos.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto y ejecuta `npm install` para instalar las dependencias.
3. Configura tu base de datos PostgreSQL y asegúrate de ajustar las credenciales de conexión en un archivo .env.
4. Ejecuta node server.js para iniciar el servidor principal o node server2.js para el servidor con consultas parametrizadas.
5. Utiliza una herramienta como Postman o Thunder Client para realizar solicitudes HTTP a las diferentes rutas configuradas.

# Base de Datos y Gestión de Configuración

Este proyecto utiliza Neon como plataforma de base de datos PostgreSQL. Neon proporciona una base de datos PostgreSQL escalable, segura y fácil de usar en la nube, lo que facilita la gestión de la base de datos sin la necesidad de infraestructura dedicada.

# Configuración con Dotenv

Para manejar las credenciales de la base de datos y otras configuraciones sensibles, este proyecto utiliza dotenv, una dependencia de Node.js que carga variables de entorno desde un archivo .env en el entorno de Node.js. Esto permite una fácil configuración y evita almacenar información sensible directamente en el código.

Para configurar tu conexión a la base de datos Neon, crea un archivo .env en la raíz del proyecto con el siguiente contenido:

- PGHOST='tu-host-neon.tech'
- PGDATABASE='tu-nombre-de-base-de-datos'
- PGUSER='tu-usuario-de-base-de-datos'
- PGPASSWORD='tu-contraseña'
- PGPORT='tu-puerto' # Por lo general, 5432

Reemplaza tu-host-neon.tech, tu-nombre-de-base-de-datos, tu-usuario-de-base-de-datos, tu-contraseña, y tu-puerto con tus credenciales reales de Neon.

# Seguridad

Recuerda NO subir tu archivo .env a repositorios públicos para mantener seguras tus credenciales. Asegúrate de que .env esté incluido en tu .gitignore.

## Instrucciones de Uso

`server.js`

Este archivo es el punto de entrada principal de la aplicación y configura el servidor Express. Gestiona las rutas para las operaciones CRUD y inicia el servidor para escuchar solicitudes HTTP. server.js permite interactuar con la aplicación a través de una interfaz REST API.

`server2.js`

Este archivo es una variante del servidor principal que introduce el uso de consultas SQL parametrizadas con objetos JSON como argumentos, mejorando la seguridad y la estructura del código. Este archivo demuestra una manera avanzada de manejar operaciones en la base de datos PostgreSQL, capturando de forma más efectiva los posibles errores y facilitando la lectura y mantenimiento del código.

# Agregar un Nuevo Estudiante

`node server.js nuevo 'Nombre Estudiante' 'RUT-Estudiante' 'Curso Estudiante' 'Nivel Estudiante'`

# Consultar Todos los Estudiantes

`node server.js consulta`

# Consultar un Estudiante por RUT

`node server.js rut 'RUT-Estudiante'`

# Editar la Información de un Estudiante por RUT

`node server.js editar 'Nombre Nuevo' 'RUT-Estudiante' 'Curso Nuevo' 'Nivel Nuevo'`

# Eliminar un Estudiante

`node server.js eliminar 'RUT-Estudiante'`
