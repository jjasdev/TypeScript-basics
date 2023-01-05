import Curso from "./Curso";

class Estudiante {
  // Propiedades de clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[];

  private ID: string = "1234";

  // Constructor
  constructor(nombre: string, cursos: Curso[], apellidos?: string) {
    this.nombre = nombre;
    if (apellidos) {
      this.apellidos = apellidos;
    }
    this.cursos = cursos;
  }

  get horasEstudiadas(): number {
    let horasEstudiadas: number = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas;
    });
    return horasEstudiadas;
  }

  set ID_Estudiante(id: string) {
    this.ID = id;
  }
}

export default Estudiante;
