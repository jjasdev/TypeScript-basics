"use strict";
/*
 * BuiltIn Types
 * number, string, boolean, void, null & undefined
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hola TypeScript!');
// VARIABLES
// Declaración de variables
let nombre = 'Juanjo';
let email = 'juanjoalonsosz@gmail.com';
let edad = 37;
console.log(`Hola ${nombre}`);
// Instanciación múltiple de variables
let a, b, c;
a = 'string';
b = 10;
c = false;
let listaTareas = ['Tarea 1', 'Tarea 2'];
let listaValores = [false, 'Hola', true, 33];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
let estadoTarea = Estados.Completado;
let tarea1 = {
    nombre: 'Tarea 1',
    estado: Estados.Pendiente,
    prioridad: 1,
};
console.log(`Tarea: ${tarea1.nombre}`);
let coche = {
    nombre: 'BMW',
    precio: 30000,
};
console.log(`Producto: ${coche.nombre}`);
// Bucles
let listaTareasNueva = [
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
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
// FUNCIONES
/**
 * Función que muestra un saludo por consola
 */
function saludar() {
    console.log('Hola, mundo');
}
/**
 * Función que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 * @param apellido Apellido de la persona a saludar
 */
function saludarPersona(nombre = 'Juanjo', apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}
/**
 * Función que muestra un saludo por consola a un perro
 * @param nombre Nombre del perro a saludar
 */
const saludarPerro = (nombre) => {
    console.log(`Hola ${nombre}`);
};
/**
 * Función que muestra un saludo por consola a un gato
 * @param nombre Nombre del gato a saludar
 * @returns Nombre gato
 */
const saludarGato = (nombre) => {
    return `${nombre}`;
};
/**
 * Función que muestra los contactos de una persona por parámetro
 * @param contacts Lista de contactos
 */
const listaParametros = (...contacts) => {
    contacts.forEach((contact) => {
        console.log(contact);
    });
};
listaParametros('Juan', 'Jose');
/**
 * Función que muestra los contactos de una persona por referencia
 * @param contacts Lista de contactos
 */
const listaReferencia = (contacts) => {
    contacts.forEach((contact) => {
        console.log(contact);
    });
};
let lista = ['Pedro', 'Sebas'];
listaReferencia(lista);
let empleadoJuan = {
    nombre: 'Juan',
    apellido: 'Alonso',
    edad: 37,
};
const mostrarEmpleado = (empleado) => {
    console.log(`El empleado ${empleado.nombre} tiene ${empleado.edad} años`);
};
mostrarEmpleado(empleadoJuan);
// Async Functions
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('Tarea a completar antes de seguir con la secuencia');
        return 'Tarea final completada';
    });
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
function* watcher(valor) {
    yield valor;
    yield* worker(valor);
    yield valor + 10;
}
function* worker(valor) {
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
function guardarEnLocalStorage() {
    localStorage.set('nombre', 'Juanjo');
}
function leer() {
    let nombre = localStorage.get('nombre');
}
const Estudiante_1 = __importDefault(require("./models/Estudiante"));
const cursos_mock_1 = require("./mock/cursos.mock");
const iTarea_1 = require("./models/interfaces/iTarea");
const Programar_1 = require("./models/Programar");
const listaCursos = cursos_mock_1.LISTA_CURSOS;
const juanjo = new Estudiante_1.default('Juanjo', listaCursos, 'Alonso');
juanjo.cursos.forEach((curso) => {
    console.log(`${curso.nombre} - ${curso.horas}`);
});
console.log(`Horas estudiadas: ${juanjo.horasEstudiadas}`);
// INTERFACES
let programar = {
    titulo: 'Programar en TypeScript',
    description: 'Practicando',
    isCompleted: false,
    urgencia: iTarea_1.Nivel.Urgente,
    resumen: function () {
        return `${this.titulo} - ${this.isCompleted}`;
    },
};
console.log(programar.resumen());
let programarTS = new Programar_1.Programar('TypeScript', 'Tarea de programación', false, iTarea_1.Nivel.Bloqueante);
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
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label,
        });
    };
}
function SoloLectura(target, key) {
    Object.defineProperty(target, key, {
        writable: false,
    });
}
function MostrarPosicion(target, propertyKey, parameterIndex) {
    console.log('Posición', parameterIndex);
}
class PruebaDecorador {
    constructor() {
        this.nombre = 'Juanjo';
    }
}
__decorate([
    Override('Prueba') // Llamar a la función Override
    ,
    __metadata("design:type", String)
], PruebaDecorador.prototype, "nombre", void 0);
class PruebaSoloLectura {
    constructor() {
        this.nombre = '';
    }
}
__decorate([
    SoloLectura,
    __metadata("design:type", String)
], PruebaSoloLectura.prototype, "nombre", void 0);
let prueba = new PruebaDecorador();
console.log(prueba.nombre); // Prueba
let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = 'Juanjo';
console.log(pruebaLectura.nombre); // Undefined
class PruebaMetodoDecorador {
    prueba(a, b) {
        console.log(b);
    }
}
__decorate([
    __param(1, MostrarPosicion),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], PruebaMetodoDecorador.prototype, "prueba", null);
let pruebaDecoradorParam = new PruebaMetodoDecorador().prueba('Hola', false);
console.log(pruebaDecoradorParam);
// PATRONES DE DISEÑO
const miPrimerSingleton = Singleton.getInstance();
const miSegundoSingleton = Singleton.getInstance();
if (miPrimerSingleton === miSegundoSingleton) {
    console.log('Singleton funciona correctamente.');
    miPrimerSingleton.mostrarPorConsola();
    miSegundoSingleton.mostrarPorConsola();
}
else {
    console.log('Singleton falló.');
}
//# sourceMappingURL=index.js.map