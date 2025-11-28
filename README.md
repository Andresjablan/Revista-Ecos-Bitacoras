# 🐝 Front – Revista ECOS del Colegio Santa Teresa La Presentación

Este proyecto es el **rediseño de la Revista ECOS** del **Colegio de La Presentación**, desarrollado con **React + Vite** y **Tailwind CSS**.  
Su propósito es ofrecer una experiencia moderna, dinámica y juvenil, con animaciones, transiciones suaves y compatibilidad con modo oscuro 🌙.

---

## 🚀 Tecnologías principales

- ⚛️ **React** – Librería principal para la interfaz.
- ⚡ **Vite** – Entorno rápido de desarrollo.
- 🎨 **Tailwind CSS** – Estilos modernos y personalizables.
- ✨ **AOS (Animate On Scroll)** – Animaciones al hacer scroll.
- 🎞️ **Swiper.js** – Carruseles y galerías interactivas.
- 🧭 **React Router DOM** – Navegación entre secciones.
- 🌗 **Modo Oscuro / Claro** – Adaptación automática según preferencia del usuario.

---

## 📁 Estructura del Proyecto

```text
📦 proyecto/
│
├── node_modules/             → Dependencias instaladas automáticamente
│
├── public/                   → Archivos estáticos accesibles públicamente
│
├── src/                      → TODO el código fuente de la aplicación
│   ├── components/           → Componentes reutilizables (botones, cards, sliders…)
│   ├── context/              → Context API, proveedores de estado global
│   ├── layouts/              → Layouts globales (Header + Footer + contenido)
│   ├── pages/                → Páginas completas (Home, Contacto, Artículos…)
│   │
│   ├── App.jsx               → Enrutador principal o estructura base
│   ├── index.css             → Estilos globales (normalmente Tailwind imports)
│   └── main.jsx              → Punto de entrada de React (ReactDOM.createRoot)
│
├── .gitignore                → Archivos a ignorar por Git
├── index.html                → Documento HTML principal de Vite
│
├── package.json              → Configuración del proyecto y dependencias
├── package-lock.json         → Control exacto de versiones de dependencias
│
├── postcss.config.cjs        → Configuración Tailwind/PostCSS
├── tailwind.config.cjs       → Configuración de Tailwind (colores, paths…)
│
└── README.md                 → Documentación del proyecto
         # Estilos base y configuración Tailwind
```

## 🚀 Despliegue del Proyecto

Sigue estos pasos para desplegar el proyecto **Front Juvenil - Revista Ecos** en un entorno local o en producción.

### 🔧 Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### 🧩 Instalación

Clona este repositorio e instala las dependencias:
bash
git clone https://github.com/usuario/revista-ecos.git
cd revista-ecos
npm install

Para desplegar en modo desarrollo utiliza
npm run dev

Para desplegar en produccion utiliza
npm run build

---

---

**Desarrollado por:**  
👨‍💻 **Ramiro Andrés Jaimes Blanco**  
Estudiante de **Análisis y Desarrollo de Software - SENA**  
📍 Desarrollado en el **Departamento de Tecnología y Comunicaciones**  
📅 2025
