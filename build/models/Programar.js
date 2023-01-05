"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
class Programar {
    constructor(titulo, description, isCompleted, urgencia) {
        this.resumen = () => {
            return `Tarea de Programacion: ${this.titulo} - ${this.isCompleted}`;
        };
        this.titulo = titulo;
        this.description = description;
        this.isCompleted = isCompleted;
        this.urgencia = urgencia;
    }
}
exports.Programar = Programar;
//# sourceMappingURL=Programar.js.map