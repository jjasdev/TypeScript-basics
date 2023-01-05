/*
 * BuiltIn Types
 * number, string, boolean, void, null & undefined
 */

console.log('Hola TypeScript!');

// VARIABLES

// Declaración de variables
let nombre: string = 'Juanjo';
let email: string = 'juanjoalonsosz@gmail.com';
let edad: number = 37;
console.log(`Hola ${nombre}`);

// Instanciación múltiple de variables
let a: string, b: number, c: boolean;
a = 'string';
b = 10;
c = false;

let listaTareas: string[] = ['Tarea 1', 'Tarea 2'];
let listaValores: (string | number | boolean)[] = [false, 'Hola', true, 33];

// Enumerados
enum Estados {
  'Completado' = 'C',
  'Incompleto' = 'I',
  'Pendiente' = 'P',
}
let estadoTarea: Estados = Estados.Completado;

// Interfaces
interface Tarea {
  nombre: string;
  estado: Estados;
  prioridad: number;
}
let tarea1: Tarea = {
  nombre: 'Tarea 1',
  estado: Estados.Pendiente,
  prioridad: 1,
};
console.log(`Tarea: ${tarea1.nombre}`);

// Types de TypeScript
type Producto = {
  precio: number;
  nombre: string;
};
let coche: Producto = {
  nombre: 'BMW',
  precio: 30000,
};
console.log(`Producto: ${coche.nombre}`);

// Bucles
let listaTareasNueva: Tarea[] = [
  {
    nombre: 'Tarea 1',
    estado: Estados.Completado,
    prioridad: 2,
  },
  {
    nombre: 'Tarea 2',
    estado: Estados.Incompleto,
    prioridad: 1,
  },
  {
    nombre: 'Tarea 3',
    estado: Estados.Pendiente,
    prioridad: 3,
  },
];

listaTareasNueva.forEach((tarea: Tarea, index: number) => {
  console.log(`${index} - ${tarea.nombre}`);
});

// FUNCIONES
/**
 * Función que muestra un saludo por consola
 */
function saludar(): void {
  console.log('Hola, mundo');
}
/**
 * Función que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 * @param apellido Apellido de la persona a saludar
 */
function saludarPersona(nombre: string = 'Juanjo', apellido?: string): void {
  console.log(`Hola ${nombre} ${apellido}`);
}
/**
 * Función que muestra un saludo por consola a un perro
 * @param nombre Nombre del perro a saludar
 */
const saludarPerro = (nombre: string | undefined): void => {
  console.log(`Hola ${nombre}`);
};
/**
 * Función que muestra un saludo por consola a un gato
 * @param nombre Nombre del gato a saludar
 * @returns Nombre gato
 */
const saludarGato = (nombre: string): string => {
  return `${nombre}`;
};

/**
 * Función que muestra los contactos de una persona por parámetro
 * @param contacts Lista de contactos
 */
const listaParametros = (...contacts: string[]): void => {
  contacts.forEach((contact: string) => {
    console.log(contact);
  });
};
listaParametros('Juan', 'Jose');

/**
 * Función que muestra los contactos de una persona por referencia
 * @param contacts Lista de contactos
 */
const listaReferencia = (contacts: string[]): void => {
  contacts.forEach((contact: string) => {
    console.log(contact);
  });
};
let lista: string[] = ['Pedro', 'Sebas'];
listaReferencia(lista);

/* ************************************* */

type Empleado = {
  nombre: string;
  apellido: string;
  edad: number;
};

let empleadoJuan: Empleado = {
  nombre: 'Juan',
  apellido: 'Alonso',
  edad: 37,
};
const mostrarEmpleado = (empleado: Empleado) => {
  console.log(`El empleado ${empleado.nombre} tiene ${empleado.edad} años`);
};
mostrarEmpleado(empleadoJuan);

// Async Functions
async function ejemploAsync(): Promise<string> {
  await console.log('Tarea a completar antes de seguir con la secuencia');
  return 'Tarea final completada';
}
ejemploAsync()
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  });

// Generators Functions
function* ejemploGenerator() {
  //yield -> emitir valores
  let index = 0;
  while (index < 5) {
    //Emitir valor incrementado
    yield index++;
  }
}
let generadora = ejemploGenerator();
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);

// Worker
function* watcher(valor: number) {
  yield valor;
  yield* worker(valor);
  yield valor + 10;
}
function* worker(valor: number) {
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}
let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // 0
console.log(generatorSaga.next().value); // 1
console.log(generatorSaga.next().value); // 2
console.log(generatorSaga.next().value); // 3
console.log(generatorSaga.next().value); // 10

// PERSISTENCIA DE DATOS
// 1-Localstorage & sessionstorage
function guardarEnLocalStorage(): void {
  localStorage.set('nombre', 'Juanjo');
}
function leer(): void {
  let nombre = localStorage.get('nombre');
}

// 2-Cookies
/*
import {
  deleteCookie,
  deleteAllCookies,
  getCookieValue,
  setCookie,
} from "cookies-utils";

const cookieOptions = {
  name: "usuario",
  value: "Juanjo",
  maxAge: 10 * 60,
  expires: new Date(2099, 10, 1),
  path: "/",
};
setCookie(cookieOptions);
deleteCookie("usuario");
deleteAllCookies();
let cookieLeida = getCookieValue("usuario");
*/

// CLASES
import Curso from './models/Curso';
import Estudiante from './models/Estudiante';
import { LISTA_CURSOS } from './mock/cursos.mock';
import { ITarea, Nivel } from './models/interfaces/iTarea';
import { Programar } from './models/Programar';

const listaCursos: Curso[] = LISTA_CURSOS;

const juanjo: Estudiante = new Estudiante('Juanjo', listaCursos, 'Alonso');
juanjo.cursos.forEach((curso) => {
  console.log(`${curso.nombre} - ${curso.horas}`);
});
console.log(`Horas estudiadas: ${juanjo.horasEstudiadas}`);

// INTERFACES
let programar: ITarea = {
  titulo: 'Programar en TypeScript',
  description: 'Practicando',
  isCompleted: false,
  urgencia: Nivel.Urgente,
  resumen: function (): string {
    return `${this.titulo} - ${this.isCompleted}`;
  },
};

console.log(programar.resumen());
let programarTS = new Programar(
  'TypeScript',
  'Tarea de programación',
  false,
  Nivel.Bloqueante
);
console.log(programarTS.resumen());

/*
* Types, Interfaces & Classes
* TYPES
Tipo propio y personalizado que no llega a la complejidad de una clase
no requiere instancias ni constructores ni métodos
Es un almacen de datos más complejo que un string
* INTERFACE
Definir conceptos de atributos/propiedades y métodos
* CLASSES
Implementar las interfaces u objetos más complejos
*/

// DECORADORES: Funciones declaradas a través del símbolo @
// Decoradores experimentales
// - Clases
// - Parámetros
// - Métodos
// - Propiedades

function Override(label: string) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => label,
    });
  };
}

function SoloLectura(target: any, key: string) {
  Object.defineProperty(target, key, {
    writable: false,
  });
}

function MostrarPosicion(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log('Posición', parameterIndex);
}

class PruebaDecorador {
  @Override('Prueba') // Llamar a la función Override
  nombre: string = 'Juanjo';
}

class PruebaSoloLectura {
  @SoloLectura
  nombre: string = '';
}

let prueba = new PruebaDecorador();
console.log(prueba.nombre); // Prueba
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = 'Juanjo';
console.log(pruebaLectura.nombre); // Undefined

class PruebaMetodoDecorador {
  prueba(a: string, @MostrarPosicion b: boolean) {
    console.log(b);
  }
}

let pruebaDecoradorParam = new PruebaMetodoDecorador().prueba('Hola', false);
console.log(pruebaDecoradorParam);

// PATRONES DE DISEÑO
const miPrimerSingleton = Singleton.getInstance();
const miSegundoSingleton = Singleton.getInstance();

if (miPrimerSingleton === miSegundoSingleton) {
  console.log('Singleton funciona correctamente.');
  miPrimerSingleton.mostrarPorConsola();
  miSegundoSingleton.mostrarPorConsola();
} else {
  console.log('Singleton falló.');
}
