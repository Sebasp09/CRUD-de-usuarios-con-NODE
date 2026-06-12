const tabla = document.getElementById("tablaUsuarios");
const contador = document.getElementById("contador");
const formulario = document.getElementById("formulario");

async function cargarUsuarios() {

    const res = await fetch("/usuarios");
    const usuarios = await res.json();

    tabla.innerHTML = "";

    usuarios.forEach(u => {

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${u.id}</td>
            <td>${u.nombre}</td>
            <td>${u.fechaCreacion}</td>
            <td>
                <button onclick="eliminarUsuario(${u.id})">Eliminar</button>
            </td>
        `;

        tabla.appendChild(tr);
    });

    contador.textContent = usuarios.length;
}

async function eliminarUsuario(id) {

    await fetch(`/usuarios/${id}`, {
        method: "DELETE"
    });

    cargarUsuarios();
}

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;

    await fetch("/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre })
    });

    formulario.reset();
    cargarUsuarios();
});

cargarUsuarios();