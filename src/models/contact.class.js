export class Contact {
    nombre = '';
    apelido = '';
    email = '';
    estado = false;

    constructor(nombre, apelido, email, estado,) {
        this.nombre = nombre;
        this.apelido = apelido;
        this.email = email;
        this.estado = estado;
    }
}