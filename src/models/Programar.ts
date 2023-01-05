import { ITarea, Nivel } from "./interfaces/iTarea";

export class Programar implements ITarea {
  titulo: string;
  description: string;
  isCompleted: boolean;
  urgencia?: Nivel | undefined;

  constructor(
    titulo: string,
    description: string,
    isCompleted: boolean,
    urgencia: Nivel
  ) {
    this.titulo = titulo;
    this.description = description;
    this.isCompleted = isCompleted;
    this.urgencia = urgencia;
  }

  resumen = (): string => {
    return `Tarea de Programacion: ${this.titulo} - ${this.isCompleted}`;
  };
}
