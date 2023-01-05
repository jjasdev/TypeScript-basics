# Pasos

- Instalar package.json: npm init -y
- Instalar dependencias
- Crear archivo de configuración: npx tsc --init
- Configuramos el archivo: npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs true --noImplicitAny true
- Ejecutar archivo TS: ts-node index.ts
- Configuración de nodemon: npm run start
- Transpilar código TS a JS: npm run transpilation
- Instalar Rimraf: npm i --save-dev rimraf
- Instalar cookies: npm i cookies-utils --save
