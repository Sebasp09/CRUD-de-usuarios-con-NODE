# API CRUD de Usuarios con Node.js (sin frameworks)

Aplicación CRUD desarrollada con Node.js nativo utilizando el módulo HTTP, sin frameworks externos como Express.

## Descripción

Este proyecto implementa una API CRUD de usuarios utilizando Node.js nativo, sin frameworks como Express. Se construye un servidor HTTP manual para comprender el manejo de rutas, requests y persistencia de datos mediante archivos JSON.

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
DELETE /usuarios/:id (manejo manual de rutas en Node.js nativo)
```
## Ejemplo de uso

Crear usuario:

POST /usuarios
Content-Type: application/json

{
  "nombre": "Carlos"
}

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
