"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estudiante {
    // Constructor
    constructor(nombre, cursos, apellidos) {
        this.ID = "1234";
        this.nombre = nombre;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        this.cursos = cursos;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    set ID_Estudiante(id) {
        this.ID = id;
    }
}
exports.default = Estudiante;
//# sourceMappingURL=Estudiante.js.map