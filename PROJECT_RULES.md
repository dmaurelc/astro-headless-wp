# REGLAS FUNDAMENTALES DEL PROYECTO

## 🎨 COLORES Y TEMA

### ⚠️ REGLA CRÍTICA: SOLO USAR COLORES DE LA PALETA DEL TEMA
**NUNCA usar colores específicos como `slate-900`, `green-400`, `blue-500`, solo puedes ocupar a lo máximo colores basicos como white o black, etc.**

### ✅ Colores permitidos (theme.css):
- `background` / `foreground`
- `card` / `card-foreground`
- `primary` / `primary-foreground`
- `secondary` / `secondary-foreground`
- `accent` / `accent-foreground`
- `muted` / `muted-foreground`
- `border`
- `ring`
- `destructive` / `destructive-foreground`

### ✅ Opacidades permitidas:
- `/10`, `/20`, `/30`, `/50`, `/70`, `/80`, `/90`, `/95`

### ❌ PROHIBIDO:
```css
/* ❌ MAL - colores específicos */
bg-slate-900
text-green-400
border-blue-500

/* ✅ BIEN - colores del tema */
bg-background
text-primary
border-border
```

## 🎨 DARK MODE
- Siempre usar clases del tema: `dark:bg-background`, `dark:text-foreground`
- NUNCA usar: `dark:bg-slate-900`, `dark:text-white`
- Los colores del tema se ajustan automáticamente

## 🏗️ ARQUITECTURA
- Componentes reutilizables en `/components/ui/`
- Layouts en `/layouts/`
- Páginas en `/pages/`
- Servicios en `/services/`
- Tipos en `/types/`

## 📱 RESPONSIVE
- Mobile first: diseñar para móvil primero
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Probar en todos los tamaños

## ♿ ACCESIBILIDAD
- Siempre usar `aria-label` en botones sin texto
- Contraste mínimo AA (4.5:1)
- Navegación por teclado
- Estados de focus visibles

## 🔗 NAVEGACIÓN
- URLs amigables con slugs cuando sea posible
- Breadcrumbs en páginas internas
- Estados activos en navegación

## 📝 NOMENCLATURA
- Componentes: PascalCase (`PageHeader.astro`)
- Archivos de páginas: kebab-case (`empresa.astro`)
- Clases CSS: seguir Tailwind conventions

## 🖼️ IMÁGENES
- Usar `loading="lazy"` excepto above-the-fold
- Alt text descriptivo
- Responsive con `object-cover`

## 🚀 RENDIMIENTO
- Minimizar JavaScript del lado cliente
- Componentes estáticos cuando sea posible
- Optimizar imágenes

---

**RECORDATORIO**: Estas reglas son OBLIGATORIAS. Revisar antes de cada commit.