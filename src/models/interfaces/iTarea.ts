export enum Nivel {
  "Informativa",
  "Urgente",
  "Bloqueante",
}

export interface ITarea {
  titulo: string;
  description: string;
  isCompleted: boolean;
  urgencia?: Nivel;
  resumen: () => string;
}
