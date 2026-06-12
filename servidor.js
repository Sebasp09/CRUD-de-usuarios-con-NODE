const http = require("http");
const fs = require("fs");
const path = require("path");

const archivoUsuarios = path.join(__dirname, "data", "usuarios.json");

function obtenerUsuarios() {
    const datos = fs.readFileSync(archivoUsuarios, "utf8");
    return JSON.parse(datos);
}

function guardarUsuarios(usuarios) {
    fs.writeFileSync(
        archivoUsuarios,
        JSON.stringify(usuarios, null, 2)
    );
}

const servidor = http.createServer((req, res) => {

    console.log(req.method, req.url);

    // ======================
    // FRONTEND
    // ======================
    if (req.url === "/" && req.method === "GET") {
        const html = fs.readFileSync(
            path.join(__dirname, "public", "index.html"),
            "utf8"
        );

        res.setHeader("Content-Type", "text/html");
        return res.end(html);
    }

    if (req.url === "/style.css") {
        const css = fs.readFileSync(
            path.join(__dirname, "public", "style.css")
        );

        res.setHeader("Content-Type", "text/css");
        return res.end(css);
    }

    if (req.url === "/script.js") {
        const js = fs.readFileSync(
            path.join(__dirname, "public", "script.js")
        );

        res.setHeader("Content-Type", "application/javascript");
        return res.end(js);
    }

    // ======================
    // GET USUARIOS
    // ======================
    if (req.url === "/usuarios" && req.method === "GET") {
        const usuarios = obtenerUsuarios();

        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(usuarios));
    }

    // ======================
    // POST USUARIO
    // ======================
    if (req.url === "/usuarios" && req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            try {
                const usuarios = obtenerUsuarios();
                const nuevoUsuario = JSON.parse(body || "{}");

                if (!nuevoUsuario.nombre) {
                    res.statusCode = 400;
                    return res.end("Nombre requerido");
                }

                const nuevoId = usuarios.length > 0
                    ? Math.max(...usuarios.map(u => u.id)) + 1
                    : 1;

                const usuario = {
                    id: nuevoId,
                    nombre: nuevoUsuario.nombre,
                    fechaCreacion: new Date().toLocaleString("es-CO")
                };

                usuarios.push(usuario);
                guardarUsuarios(usuarios);

                res.setHeader("Content-Type", "application/json");
                return res.end(JSON.stringify(usuario));

            } catch (err) {
                res.statusCode = 500;
                return res.end("Error en JSON");
            }
        });

        return;
    }

    // ======================
    // DELETE USUARIO
    // ======================
    if (req.url.startsWith("/usuarios/") && req.method === "DELETE") {

        const usuarios = obtenerUsuarios();
        const id = parseInt(req.url.split("/")[2]);

        const indice = usuarios.findIndex(u => u.id === id);

        if (indice === -1) {
            res.statusCode = 404;
            return res.end("Usuario no encontrado");
        }

        usuarios.splice(indice, 1);
        guardarUsuarios(usuarios);

        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ ok: true }));
    }

    // ======================
    // 404
    // ======================
    res.statusCode = 404;
    res.end("Ruta no encontrada");
});

servidor.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});