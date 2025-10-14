# 🏡 Propiedades Inmobiliarias - Astro Website

> Un sitio web moderno y completamente responsive para propiedades inmobiliarias, construido con Astro, TypeScript y Tailwind CSS.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Características Principales

### 🏠 **Páginas de Propiedades**
- ✅ Listado completo de propiedades con filtros
- ✅ Página de detalle individual por slug (`/propiedad/[slug]`)
- ✅ Galería de imágenes interactiva con modal fullscreen
- ✅ Navegación con flechas, miniaturas y soporte de teclado
- ✅ Información detallada: precio, ubicación, características
- ✅ Integración de mapas con marcadores
- ✅ Botones de acción (WhatsApp, contacto, favoritos)

### 📱 **Diseño Responsive**
- ✅ **Mobile-first**: Optimizado para dispositivos móviles
- ✅ **Header responsive** con menú hamburger
- ✅ **Navegación táctil** optimizada para touch
- ✅ **Grids adaptativos** que se ajustan a cualquier pantalla
- ✅ **Tipografía escalable** y legible en todos los dispositivos

### 🎨 **UI/UX Moderno**
- ✅ **Modo oscuro** completo con toggle funcional
- ✅ **Animaciones suaves** y transiciones fluidas
- ✅ **Componentes interactivos** con estados hover y focus
- ✅ **Diseño consistente** siguiendo principios de design system
- ✅ **Accesibilidad** con ARIA labels y navegación por teclado

### 🏗️ **Arquitectura Técnica**
- ✅ **Componentes modulares** y reutilizables
- ✅ **TypeScript** para type safety
- ✅ **SSR/SSG** optimizado con Astro
- ✅ **SEO friendly** con meta tags y structured data
- ✅ **Performance optimizada** con lazy loading
- ✅ **Vanilla JavaScript** para máxima compatibilidad

## 🚀 Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos
│   ├── favicon.svg
│   └── images/            # Imágenes de propiedades
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, Navigation
│   │   ├── propiedades/   # Componentes específicos de propiedades
│   │   │   ├── PropertyGallery.astro
│   │   │   ├── PropertyDetails.astro
│   │   │   ├── PropertyFeatures.astro
│   │   │   └── PropertyMap.astro
│   │   └── ui/            # Componentes de interfaz
│   │       ├── Hero.astro
│   │       ├── CtaTwo.astro
│   │       ├── ThemeToggle.astro
│   │       └── ...
│   ├── layouts/
│   │   └── Layout.astro   # Layout principal
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── propiedades.astro
│   │   ├── contacto.astro
│   │   ├── empresa.astro
│   │   └── propiedad/
│   │       ├── [id].astro     # Página por ID
│   │       └── [slug].astro   # Página por slug
│   ├── services/
│   │   └── propiedades.ts # Servicio de datos
│   ├── types/
│   │   └── propiedad.ts   # Interfaces TypeScript
│   └── styles/
│       ├── global.css
│       └── theme/
│           └── theme.css  # Variables CSS para temas
└── package.json
```

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build)** - Framework web moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Leaflet](https://leafletjs.com/)** - Mapas interactivos
- **Vanilla JavaScript** - Para máxima compatibilidad y performance

## 🧞 Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Vista previa del build local                    |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Ayuda del CLI de Astro                          |

## 🚀 Inicio Rápido

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/dmaurelc/astro-headless-wp.git
   cd astro-headless-wp
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre el navegador**
   Visita [http://localhost:4321](http://localhost:4321)

## 📱 Funcionalidades Destacadas

### Modal de Galería Interactiva
- **Navegación con flechas** ← →
- **Miniaturas clicables** para salto directo
- **Soporte de teclado** (Escape, flechas)
- **Animaciones fluidas** y loading states
- **Responsive** en todos los dispositivos

### Theme Toggle Avanzado
- **Detección automática** de preferencias del sistema
- **Persistencia** en localStorage
- **Sin flash** de contenido no estilizado
- **Sincronización** entre múltiples instancias
- **Accesible** con ARIA labels

### Header Responsive
- **Menú hamburger** para móviles
- **Navegación sticky** con backdrop blur
- **Botones de acción** accesibles
- **Transiciones suaves** entre estados

## 🎨 Personalización

### Colores y Temas
Los colores se definen en `src/styles/theme/theme.css` usando CSS custom properties:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 142 76% 36%;
  /* ... más variables */
}

[data-theme="dark"] {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... versiones oscuras */
}
```

### Tipografía
Utilizamos Google Fonts:
- **Outfit** - Para headings y textos destacados
- **Afacad** - Para texto de cuerpo

## 🔧 Configuración

El proyecto incluye configuraciones predefinidas para:
- **ESLint** y **Prettier** para código consistente
- **TypeScript** con tipos estrictos
- **Tailwind CSS** con configuración personalizada
- **Astro** optimizado para SSG/SSR

## 📞 Contacto

- **WhatsApp**: Integración directa con botones CTA
- **Formulario de contacto**: Página dedicada `/contacto`
- **Información de empresa**: Disponible en `/empresa`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ usando Astro**
