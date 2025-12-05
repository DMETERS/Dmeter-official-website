# Dmeter Landing Page - Documentación del Proyecto

## Resumen Ejecutivo

Landing page profesional para **Dmeter**, consultora de servicios de software, desarrollada con un estilo visual **Solarpunk Tech** (futurista + verde/sostenible).

**Fecha de creación:** Diciembre 2025
**Tech Stack:** Astro 5 + Tailwind CSS 4
**Idiomas:** Español (default), English, Português (Brasil)
**Deploy:** Netlify (gratuito)

---

## Decisiones de Diseño

### Estilo Visual: Solarpunk Tech
Combinación de tecnología futurista con estética sostenible y optimista.

### Paleta de Colores

| Variable | Color | Hex | Uso |
|----------|-------|-----|-----|
| `--color-primary` | Verde Esmeralda | `#10B981` | Color principal, CTAs |
| `--color-primary-dark` | Verde Profundo | `#059669` | Hover states |
| `--color-primary-light` | Verde Claro | `#34D399` | Acentos |
| `--color-accent-cyan` | Cyan Energía | `#06B6D4` | Secundario, IA |
| `--color-accent-solar` | Dorado Solar | `#FBBF24` | Destacados |
| `--color-bg-dark` | Fondo Oscuro | `#0C1A1A` | Background principal |
| `--color-bg-card` | Cards | `#134E4A` | Tarjetas y contenedores |
| `--color-text-light` | Texto Claro | `#F0FDF4` | Texto principal |
| `--color-text-muted` | Texto Secundario | `#6EE7B7` | Subtítulos |

### Tipografías
- **Display (títulos):** Space Grotesk (Google Fonts)
- **Body (texto):** Inter (Google Fonts)

### Tono de Comunicación
- Cercano y accesible
- Sin jerga técnica innecesaria
- Enfocado en resultados para el cliente

---

## Estructura del Proyecto

```
Dmeter-official-website/
├── src/
│   ├── components/
│   │   ├── Header.astro           # Navegación responsive
│   │   ├── Hero.astro             # Sección principal
│   │   ├── Services.astro         # 6 servicios
│   │   ├── Process.astro          # 4 pasos del proceso
│   │   ├── CaseStudies.astro      # Casos de éxito
│   │   ├── WhyDmeter.astro        # Propuesta de valor
│   │   ├── Contact.astro          # Formulario + info
│   │   ├── Footer.astro           # Pie de página
│   │   ├── LanguageSwitcher.astro # Selector de idioma
│   │   └── WhatsAppButton.astro   # Botón flotante
│   │
│   ├── i18n/
│   │   ├── es.json                # Español (default)
│   │   ├── en.json                # English
│   │   ├── pt-br.json             # Português Brasil
│   │   └── utils.ts               # Funciones de traducción
│   │
│   ├── layouts/
│   │   └── Layout.astro           # Layout base + SEO
│   │
│   ├── pages/
│   │   ├── index.astro            # Página ES (/)
│   │   ├── en/index.astro         # Página EN (/en/)
│   │   └── pt-br/index.astro      # Página PT (/pt-br/)
│   │
│   └── styles/
│       └── global.css             # Estilos globales + Tailwind
│
├── public/
│   ├── favicon.svg                # Favicon con gradiente
│   └── images/                    # Imágenes (vacío)
│
├── docs/
│   └── LANDING-PAGE.md            # Esta documentación
│
├── astro.config.mjs               # Configuración Astro
├── netlify.toml                   # Configuración Netlify
├── package.json                   # Dependencias
└── tsconfig.json                  # TypeScript config
```

---

## Secciones de la Landing

### 1. Header
- Logo tipográfico "Dmeter" con icono gradiente
- Navegación: Servicios | Proceso | Casos | Contacto
- Selector de idioma (ES/EN/PT)
- CTA "Hablemos"
- Menú hamburguesa en mobile

### 2. Hero
- Headline con gradiente animado
- Subtítulo descriptivo
- 2 CTAs: Principal (gradiente) + Secundario (outline)
- Elementos flotantes animados (desktop)
- Fondo con orbes de gradiente + grid pattern

### 3. Servicios (6 cards)
| Servicio | Icono | Descripción |
|----------|-------|-------------|
| Landing Pages | layout | Sitios que convierten |
| Software a Medida | code | Soluciones personalizadas |
| Dashboards | chart | Visualización de datos |
| Soluciones con IA | brain | Chatbots, automatización |
| Integraciones & APIs | plug | Conectar sistemas |
| Consultoría Digital | compass | Transformación digital |

### 4. Proceso (4 pasos)
1. **Conversamos** - Entender el negocio
2. **Diseñamos** - Crear la solución
3. **Desarrollamos** - Construir con mejores prácticas
4. **Acompañamos** - Soporte continuo

### 5. Casos de Éxito (3 cards)
- **Logística** - Dashboard de operaciones
- **Fintech** - Automatización de procesos
- **Retail** - Plataforma e-commerce

*Nota: Son anónimos/confidenciales por diseño*

### 6. Por qué Dmeter
- 3 propuestas de valor (Cercanía, Propósito, Acompañamiento)
- Stack tecnológico (React, Node, Python, TypeScript, PostgreSQL, AWS, Docker, OpenAI)

### 7. Contacto
- Formulario Netlify Forms (nombre, email, tipo proyecto, mensaje)
- Email de contacto
- WhatsApp
- Instagram (@dmeter2022)

### 8. Footer
- Logo + tagline
- Links de navegación
- Redes sociales
- Copyright

### Elementos Adicionales
- **WhatsApp Button** - Flotante esquina inferior derecha

---

## Internacionalización (i18n)

### Rutas por Idioma
| Idioma | Ruta | Archivo |
|--------|------|---------|
| Español | `/` | `src/pages/index.astro` |
| English | `/en/` | `src/pages/en/index.astro` |
| Português | `/pt-br/` | `src/pages/pt-br/index.astro` |

### Uso en Componentes
```astro
---
import { type Lang, useTranslations } from '../i18n/utils';

interface Props {
  lang?: Lang;
}

const { lang = 'es' } = Astro.props;
const t = useTranslations(lang);
---

<h1>{t.hero.title}</h1>
```

---

## Animaciones CSS

### Definidas en `global.css`

| Clase | Efecto |
|-------|--------|
| `.animate-float` | Flotación vertical suave |
| `.animate-pulse-glow` | Pulso con glow verde |
| `.animate-fade-in-up` | Aparecer desde abajo |
| `.gradient-text` | Texto con gradiente |
| `.gradient-solarpunk` | Fondo gradiente verde-cyan |
| `.glass` | Efecto glassmorphism |
| `.card-hover` | Elevación al hover |

---

## Formulario de Contacto

### Netlify Forms
El formulario usa `data-netlify="true"` para integración automática con Netlify.

```html
<form name="contact" method="POST" data-netlify="true">
  <!-- campos -->
</form>
```

### Honeypot Anti-spam
```html
<input type="hidden" name="form-name" value="contact" />
<p class="hidden">
  <label>Don't fill this out: <input name="bot-field" /></label>
</p>
```

---

## Comandos Disponibles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## Configuración Pendiente

Antes del deploy, actualiza estos valores:

### 1. WhatsApp (`src/components/WhatsAppButton.astro` y `Contact.astro`)
```javascript
const WHATSAPP_NUMBER = 'TU_NUMERO_AQUI'; // ej: 5491123456789
```

### 2. Email (`src/components/Contact.astro`)
```javascript
const CONTACT_EMAIL = 'tu@email.com';
```

### 3. Dominio (`astro.config.mjs`)
```javascript
site: 'https://tu-dominio.com',
```

---

## Deploy en Netlify

### Opción 1: Desde GitHub
1. Sube el proyecto a un repo de GitHub
2. En Netlify: "Add new site" > "Import an existing project"
3. Selecciona el repo
4. Netlify detectará automáticamente la configuración del `netlify.toml`
5. Click en "Deploy"

### Opción 2: Drag & Drop
1. Ejecuta `npm run build`
2. Arrastra la carpeta `dist/` a Netlify

### Configuración de Dominio
1. En Netlify > Domain settings
2. Agrega tu dominio personalizado
3. Activa HTTPS (automático)

---

## Próximos Pasos Sugeridos

- [ ] Actualizar datos de contacto (WhatsApp, Email)
- [ ] Probar en desarrollo local
- [ ] Agregar casos de éxito reales (anónimos)
- [ ] Deploy inicial en Netlify
- [ ] Configurar dominio personalizado
- [ ] Fase 2: Integrar chatbot de IA
- [ ] Fase 2: Agregar sistema de reserva (Calendly)
- [ ] Fase 2: Blog/recursos

---

## Créditos

- **Framework:** [Astro](https://astro.build/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Fuentes:** [Google Fonts](https://fonts.google.com/) (Inter, Space Grotesk)
- **Iconos:** SVG inline (Heroicons style)
- **Deploy:** [Netlify](https://netlify.com/)
