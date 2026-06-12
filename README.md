# CRUD Usuarios con Node.js

Aplicación CRUD desarrollada con Node.js nativo utilizando el módulo HTTP, sin frameworks externos como Express.

## Descripción

Este proyecto permite gestionar usuarios mediante operaciones CRUD básicas. Los datos se almacenan en un archivo JSON y son consumidos desde una interfaz web desarrollada con HTML, CSS y JavaScript.

El objetivo del proyecto fue comprender el funcionamiento interno de las peticiones HTTP en Node.js, el manejo de archivos con `fs` y la comunicación entre frontend y backend sin utilizar frameworks.

## Funcionalidades

* Listar usuarios
* Crear nuevos usuarios
* Eliminar usuarios
* Persistencia de datos en archivo JSON
* Consumo de API mediante Fetch API
* Interfaz web sencilla para gestionar usuarios

## Tecnologías utilizadas

### Backend

* Node.js
* HTTP Module
* FS Module
* Path Module

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Control de versiones

* Git
* GitHub

## Endpoints

### Obtener usuarios

```http
GET /usuarios
```

### Crear usuario

```http
POST /usuarios
```

Body:

```json
{
  "nombre": "Carlos"
}
```

### Eliminar usuario

```http
DELETE /usuarios/:id
```

## Estructura del proyecto

```text
crud-usuarios-node/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── data/
│   └── usuarios.json
│
├── servidor.js
├── package.json
├── README.md
└── .gitignore
```

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd crud-usuarios-node
```

Ejecutar el servidor:

```bash
node servidor.js
```

Abrir en el navegador:

```text
http://localhost:3000
```

## Conceptos practicados

* Creación de servidores HTTP con Node.js
* Manejo de rutas manuales
* Métodos HTTP (GET, POST y DELETE)
* Lectura y escritura de archivos JSON
* Programación asíncrona con eventos
* Manipulación del DOM
* Consumo de APIs con Fetch

## Autor

Sebastián Pérez

Estudiante de Ingeniería de Software.
