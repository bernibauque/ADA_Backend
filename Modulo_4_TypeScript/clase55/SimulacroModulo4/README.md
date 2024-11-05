🛠️ Configuración inicial del Proyecto y Git/GitHub

1. Crea un nuevo proyecto y configúralo con Git y GitHub:

# Crea la carpeta del proyecto y navega a ella
mkdir sumilacro
cd simulacro

# Inicializa Git y crea un repositorio en GitHub
git init
git remote add origin <URL_del_repositorio_de_GitHub>

# Crea el archivo README.md y el archivo principal index.ts
echo "# Proyecto de Simulacro en TypeScript" >> README.md
cd src/
touch index.ts

# Crea el primer commit y sube el código inicial
git add .
git commit -m "Configuración inicial del proyecto"
git push -u origin main

2. Instala TypeScript y configura el proyecto:

# Instala TypeScript y ts-node como dependencias de desarrollo
npm init -y
npm install typescript ts-node @types/node --save-dev

# Genera el archivo de configuración de TypeScript
npx tsc --init

3. Agrega scripts al package.json para compilar y ejecutar el proyecto:

{
  "scripts": {
    "start": "ts-node index.ts",
    "build": "tsc"
  }
}

Inicia con: npm start