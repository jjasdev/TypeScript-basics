"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    mostrarPorConsola() {
        console.log('Método del Singleton');
    }
}
//# sourceMappingURL=Singleton.js.map