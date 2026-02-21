# 📘 Guía Completa - QA Automation Swag Labs
## Para usuarios sin experiencia en automatización

![Version](https://img.shields.io/badge/Version-1.0.0-red)

---

## 1. Introducción

### ¿Qué es este proyecto?
Este es un proyecto de **automatización de pruebas** para el sitio web de Swag Labs. Permite ejecutar pruebas automáticas que verifican que el sitio funcione correctamente sin necesidad de hacerlo manualmente.

### Tecnologías utilizadas
- **TipeScript**: Lenguaje de programación
- **Playwright**: Framework BDD (Behavior Driven Development) 
- **Cucumber**: Para escribir pruebas en lenguaje natural
- **Node**: Compilador
- **Gherkin**: Lenguaje para escribir escenarios de prueba (Given-When-Then)

### ¿Qué hace este proyecto?
Automatiza pruebas ddel sitio web como:
- Login
- Car buy

### 📚 Documentación Oficial del Proyecto
La documentación completa del proyecto se encuentra en este documento:

Esta documentación incluye:
- Arquitectura del proyecto
- Patrones de diseño utilizados (Page Object Model)
- Diagramas de flujo
- Estándares de codificación
- Guías de contribución

---

## 2. Requisitos Previos

### Sistema Operativo
- **Windows 10/11** (recomendado)
- También funciona en macOS y Linux, pero esta guía está orientada a Windows

### Conocimientos Básicos
- Uso de la línea de comandos (CMD o PowerShell)
- Navegación por carpetas en Windows
- Edición de archivos de texto

### Acceso
- Acceso al repositorio GitHub

---

## 3. Instalación de Herramientas

### 3.0 Instalar Git

#### Paso 1: Descargar Git
1. Ve a [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Descarga la versión para Windows
3. Ejecuta el instalador

```bash
git --version
```

### 3.1 Instalar 

1. inicializar proyecto node
npm init -y

2. instalar playwright versión mas reciente
npm init playwright@latest

3. instalar dependencias de cucumbre bdd
npm install -D @cucumber/cucumber ts-node typescript @types/node

4. instalar cucumber report
npm install cucumber-html-reporter --save-dev

#### 3.2 descarga proyecto git
⚠️ **MUY IMPORTANTE**: Contar con una cuenta en github:
- ✅ Fork: Realizar fork desde repositorio git de este repositorio https://github.com/camischo/TestTSPlaywright.git
- ✅ Opcion 2 realiza el clon directamente desde https://github.com/camischo/TestTSPlaywright.git

```bash
git clone https://github.com/camischo/TestTSPlaywright.git
```

#### Paso 3: Verificar que se descargue
Verifica que se tenga descargado el repositorio en tu local, de lo contrario ejecuta el siguiente comando
```bash
git pull
```

### 3.3 Instalar Google Chrome

Si no lo tienes instalado:
1. Ve a [https://www.google.com/chrome/](https://www.google.com/chrome/)
2. Descarga e instala Chrome
3. Asegúrate de tener la última versión

### 3.4 Instalar Visual Studio Code (Opcional pero recomendado)

1. Ve a [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Descarga e instala VS Code
3. Instala la extensión de Cucumber para VS

---

## 4. Estructura del Proyecto

```
TestTSPlaywright/
│
├── data/                           # Archivos de datos (.json)
│── features/                       # Archivos de pruebas (.feature)
│── hooks/                          # Archivos con clases a ser ejecutadas antes o despues (.ts) 
│── steps/                          # Implementación de pasos
│── pages/                          # Pasos comunes
├── cucumber.js                     # Configuración de cucumber
├── package-lock.json               # paquetes de instalación
├── reports.json                    # Script de ejecución del reporte
└── README.md                       # Documentación del proyecto
```

### Explicación de carpetas clave

| Carpeta | Descripción |
|---------|-------------|
| **features/** | Contiene los archivos `.feature` con escenarios escritos en Gherkin |
| **steps/** | Código TipeScrip que implementa cada paso de los escenarios |
| **pages/** |  Definición de elementos de la página (botones, campos, etc.) |
| **data/** | Datos de prueba y configuración de ambientes |

---

## 5. Ejecución de Pruebas

### 5.1 Ejecutar todas las pruebas

```bash
npx cucumber-js
```

### 5.2 Ejecutar un tag de pruebas específico

```bash
npx cucumber.js --tags "@smoke"
```

## 6. Visualización de Reportes

### 6.1 Generar reporte 

Después de ejecutar las pruebas, se generan resultados en `reports/`.

```bash
node report.js
```

#### Elementos clave:
- ✅ **Passed**: Prueba exitosa
- ❌ **Failed**: Prueba fallida
- ⚠️ **Broken**: Prueba con error técnico
- ⏭️ **Skipped**: Prueba omitida


### 6.3 Buenas prácticas para escribir escenarios

✅ **Hacer:**
- Usar lenguaje de negocio, no técnico
- Mantener escenarios independientes
- Usar datos de prueba realistas
- Agregar tags descriptivos

❌ **Evitar:**
- Escenarios muy largos (más de 10 pasos)
- Dependencias entre escenarios
- Datos hardcodeados en los pasos
- Pasos técnicos (clicks, waits, etc.)

---

## 7. Catálogo de Pruebas Disponibles

Esta sección lista todas las pruebas automatizadas disponibles en el proyecto, organizadas por producto.

### 💼 Buy a producto, add to car (buying_a_product.feature)
1. Add a product to the cart and complete the checkout process

### ✅ Login  (login_sauce_demo.feature)
1. Successful login with valid credentials
2. Unsuccessful login with blocked user credentials
3. Successful login with diferent credentials

### Organización de pruebas

- Agrupa escenarios relacionados en el mismo archivo `.feature`
- Usa tags consistentes: `@smoke`, `@regression`, `@producto`
- Mantén los datos de prueba en archivos separados
- Documenta escenarios complejos

### Mantenimiento

- Revisa y actualiza pruebas cuando cambie la aplicación
- Elimina pruebas obsoletas
- Refactoriza código duplicado
- Mantén actualizadas las dependencias

---

**¡Felicidades!** Ya estás listo para trabajar con el proyecto de automatización QA de TuChile Web.

Si tienes dudas o problemas, consulta la sección de [Solución de Problemas](#12-solución-de-problemas) o contacta al equipo de QA.

---

*Última actualización: 2025-12-23*
*Versión del proyecto: 1.0.0*
