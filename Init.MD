crear carpeta del proyecto 
mkdir \TestTSPlaywright

acceder a la carpeta
cd \TestTSPlaywright

iniciarlizar proyecto git 
git init

agregar .MD de inicialización paso a paso setUp

agregar origin del repositorio en github
git remote add origin https://github.com/camischo/TestTSPlaywright.git

inicializar proyecto node
npm init -y

instalar playwright versión mas reciente
npm init playwright@latest

instalar dependencias de cucumbre bdd
npm install -D @cucumber/cucumber ts-node typescript @types/node

instalar cucumber report
npm install cucumber-html-reporter --save-dev

agregar archivos al stage 
git add .

primer commit del setUp
git commit -m "Setup commit inicial."

subir los cambios al repositorio de git
git push origin master
