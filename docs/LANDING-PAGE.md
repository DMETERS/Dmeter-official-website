# Dmeter Landing Page - Documentación del Proyecto

## Resumen Ejecutivo

Landing page profesional para **Dmeter**, consultora de servicios de software, desarrollada con estilo visual **Solarpunk** - una estética que combina tecnología futurista con naturaleza, sostenibilidad y esperanza radical.

**Fecha de creación:** Diciembre 2025
**Última actualización:** Diciembre 2025 (Dmetercito + Páginas Legales)
**Tech Stack:** Astro 5 + Tailwind CSS 4
**Idiomas:** Español (default), English, Português (Brasil)
**Deploy:** GitHub Pages / Netlify

---

## Filosofía de Diseño: Solarpunk

### Concepto
El Solarpunk es un movimiento estético y filosófico que imagina un futuro donde la humanidad vive en armonía con la naturaleza, usando tecnología regenerativa. Cada elemento de esta landing respira:

- **Esperanza Radical** - Un mundo mejor es posible
- **Simbiosis Tech-Natura** - Circuitos que se entrelazan con raíces
- **Comunidad** - Espacios digitales como jardines comunitarios
- **Regeneración** - Cada interacción nutre, no extrae

### Metáforas Visuales
- Botones = Semillas que florecen
- Cards = Plantas creciendo
- Proceso = Sendero en un jardín
- Animaciones = Brisa, crecimiento natural
- Colores = Ecosistema vivo

---

## Sistema de Colores Solarpunk

### Paleta Completa

#### Verdes Vitales (El corazón del ecosistema)
| Variable | Color | Hex | Uso |
|----------|-------|-----|-----|
| `--color-green-moss` | Verde Musgo | `#4A7C59` | Ancla, tierra fértil |
| `--color-green-forest` | Verde Bosque | `#2D5A3D` | Profundidad, misterio |
| `--color-green-sprout` | Verde Brote | `#8FBC8F` | Esperanza, crecimiento |
| `--color-green-lime` | Verde Lima | `#C5E063` | Energía fotosintética |

#### Dorados Solares (Energía y calidez)
| Variable | Color | Hex | Uso |
|----------|-------|-----|-----|
| `--color-solar-gold` | Dorado | `#FFD700` | El sol que alimenta todo |
| `--color-solar-amber` | Ámbar | `#FFBF00` | Calidez de colmena |
| `--color-solar-sunset` | Atardecer | `#FF8C42` | Celebración |
| `--color-solar-copper` | Cobre | `#B87333` | Tech con gracia |

#### Colores Principales (Compatibilidad)
| Variable | Color | Hex | Uso |
|----------|-------|-----|-----|
| `--color-primary` | Verde Esmeralda | `#10B981` | CTAs principales |
| `--color-accent-cyan` | Cyan | `#06B6D4` | Tecnología, IA |
| `--color-accent-solar` | Solar | `#FBBF24` | Destacados |
| `--color-bg-dark` | Fondo | `#0F1F1A` | Background principal |
| `--color-bg-card` | Cards | `#1A3D2E` | Contenedores |

#### Modo Oscuro (Noche en el Bosque)
| Variable | Color | Hex | Uso |
|----------|-------|-----|-----|
| `--color-night-deep` | Bosque Nocturno | `#1A2F1A` | Fondo primario |
| `--color-night-clearing` | Claro de Luna | `#243524` | Elevaciones |
| `--color-night-moss` | Musgo Penumbra | `#2D4A2D` | Superficies |
| `--color-night-glow` | Bioluminiscencia | `#E8F5E8` | Texto claro |

---

## Tipografías Orgánicas

### Fuentes Actuales
- **Títulos:** Fraunces (serif con carácter orgánico, curvas generosas)
- **Cuerpo:** Nunito (sans-serif cálida, redondeada, amigable)
- **Código:** JetBrains Mono (para elementos técnicos)

### Configuración en Layout.astro
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

---

## Estructura del Proyecto

```
Dmeter-official-website/
├── src/
│   ├── components/
│   │   ├── Header.astro           # Nav con hoja decorativa + glass-warm
│   │   ├── Hero.astro             # Ciudad Solarpunk SVG + luciérnagas
│   │   ├── Services.astro         # Cards orgánicas con hojas
│   │   ├── Process.astro          # Sendero jardín (semilla→árbol)
│   │   ├── CaseStudies.astro      # Casos de éxito
│   │   ├── WhyDmeter.astro        # Propuesta de valor
│   │   ├── Contact.astro          # Formulario + info
│   │   ├── Footer.astro           # Jardín nocturno + plantas SVG + links legales
│   │   ├── LanguageSwitcher.astro # Selector de idioma
│   │   └── Dmetercito.astro       # Chatbot de flujo guiado (3 idiomas)
│   │
│   ├── i18n/
│   │   ├── es.json                # Español (default)
│   │   ├── en.json                # English
│   │   ├── pt-br.json             # Português Brasil
│   │   └── utils.ts               # Funciones de traducción
│   │
│   ├── layouts/
│   │   └── Layout.astro           # Layout base + SEO + Fonts
│   │
│   ├── pages/
│   │   ├── index.astro            # Página ES (/)
│   │   ├── en/index.astro         # Página EN (/en/)
│   │   ├── pt-br/index.astro      # Página PT (/pt-br/)
│   │   ├── privacidad.astro       # Política de Privacidad
│   │   ├── aviso-legal.astro      # Aviso Legal
│   │   └── cookies.astro          # Política de Cookies
│   │
│   └── styles/
│       └── global.css             # Sistema de diseño Solarpunk completo
│
├── public/
│   ├── favicon.svg                # Favicon gradiente verde
│   ├── images/                    # Imágenes
│   └── videos/
│       └── demeter-contact.mp4    # Video de Demeter para sección Contact
│
├── docs/
│   └── LANDING-PAGE.md            # Esta documentación
│
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions para Pages
│
├── astro.config.mjs               # Config Astro + GitHub Pages
├── netlify.toml                   # Config Netlify (alternativa)
├── package.json                   # Dependencias
└── tsconfig.json                  # TypeScript config
```

---

## Componentes Transformados

### 1. Header (Actualizado)
- Logo con hoja decorativa animada
- Fondo `glass-warm` con blur orgánico
- Navegación con indicadores de hoja al hover
- Botón CTA con icono de hoja que rota
- Menú mobile con separadores orgánicos SVG
- Sombra dinámica al hacer scroll

### 2. Hero (Revolución Completa)
**Ilustración SVG Robot Humanoide (estilo Tesla Optimus + Solarpunk):**
- Robot de cuerpo completo con proporciones humanas
- Cabeza ovalada con visor LED horizontal iluminado y ojos cyan
- Antena/sensor superior con luz pulsante
- Cuello articulado con segmentos y cables visibles
- Torso con núcleo de energía verde brillante (reactor central con anillo giratorio)
- Paneles de ventilación y luces de estado
- Abdomen segmentado con líneas de conexión
- Brazos completos: hombros esféricos, codos articulados, manos con 5 dedos detallados
- Piernas completas: muslos, rodillas con luces LED, pies
- Acabado metálico (gradientes gris oscuro a claro)
- Acentos en colores de marca (cyan #06B6D4, verde #10B981)
- Sin fondo (transparente, se integra con el Hero)

**Vegetación Solarpunk integrada al robot:**
- Hojas en ambos hombros (3 hojas por lado, animación sway)
- Brote pequeño creciendo del hombro derecho (tallo + 2 hojas + punta)
- Enredadera subiendo por brazo izquierdo (tallo curvo + 4 hojas)
- Musgo sutil en codos (manchas verdes con opacidad 0.5)
- Musgo sutil en rodillas (manchas más pequeñas)
- Hojas flotando cerca del robot (3 hojas con animación float)

**Elementos Atmosféricos:**
- Orbes de energía solar (green, gold, cyan)
- Luciérnagas flotantes (`animate-firefly`)
- Hojas flotantes animadas (`animate-sway`)
- Grid orgánico + puntos semilla
- Partículas de energía alrededor del robot
- Líneas de conexión de energía sutiles desde el reactor a los brazos

**Stats de Confianza:**
- 50+ Proyectos
- 3 Países
- 100% Compromiso

### 3. Services (Cards Orgánicas)
- Clase `card-organic` con bordes redondeados 28px
- Decoración de hoja SVG en esquina superior derecha
- Iconos con gradiente y pulso de energía al hover
- Línea de crecimiento en bottom al hover
- Subtítulo badge "Soluciones que crecen contigo"

### 4. Process (Sendero de Jardín)
**Iconos SVG personalizados por etapa:**
1. **Conversamos** - Semilla plantándose (verde brote)
2. **Diseñamos** - Brote emergiendo (verde primario)
3. **Desarrollamos** - Planta con raíces tech (cyan)
4. **Acompañamos** - Árbol con frutos/energía (dorado solar)

**Elementos visuales:**
- Línea ondulada SVG como camino de jardín
- Nodos de energía en la línea
- Gradiente de colores progresivo
- Pequeñas hojas decorativas animadas
- CTA "Plantemos juntos"

### 5. CaseStudies (Carousel de 9 Casos)
**Carousel CSS nativo + JavaScript vanilla:**
- 9 casos de éxito basados en experiencia real (anónimos)
- Autoplay cada 6 segundos (respeta prefers-reduced-motion)
- Navegación: flechas, dots indicadores, swipe táctil
- Responsive: 1 card (mobile), 2 cards (tablet), 3 cards (desktop)
- Accesibilidad: keyboard navigation, aria-labels
- Estilo Solarpunk: card-organic, hojas decorativas, colores por industria

**Casos incluidos:**
| # | Industria | Proyecto |
|---|-----------|----------|
| 1 | Recruiting | Plataforma SaaS de Recruiting |
| 2 | Automatización | Sistema de Prospección Automatizado |
| 3 | IA/Contenido | Generador de Contenido Literario (+2000 autores) |
| 4 | Turismo | Plataforma de Viajes (Amadeus, Orbis, RateHawk) |
| 5 | Fintech | Gateway de Pagos Multi-proveedor (Stripe, Redsys, PayPal) |
| 6 | IA/Chatbots | Chatbot para Autores Literarios |
| 7 | DevTools | Agente MCP con IA |
| 8 | Healthcare | Integración de Telemedicina |
| 9 | E-commerce | Plataforma E-commerce Avanzada |
| 10 | PyME/SMB | Sistema de Gestión Integral (migración MS-DOS a web) |
| 11 | Turismo/Software | Generador de Presupuestos con API de Vuelos en tiempo real |

### 6. WhyDmeter (Propuesta de Valor)
- 3 puntos de valor: Cercanía Real, Soluciones con Propósito, Acompañamiento Continuo
- **Nuestras Capacidades** (reemplazó "Tecnologías que Dominamos"):
  - Web Moderno, Backend Escalable, Automatización & IA, Cloud Native, Datos & Analytics, Integraciones
- Carousel infinito horizontal con scroll táctil
- Fade en los bordes para efecto de loop continuo
- Pausa al hover

### 7. Contact (Formulario + Video Background)
- Formulario centrado con campos: nombre, email, tipo de proyecto, mensaje
- **Video de Demeter** como fondo sutil (opacidad 10%)
- Filtro CSS para integrar con paleta Solarpunk
- Overlay gradiente para legibilidad
- Redes de contacto en fila horizontal debajo del formulario
- Envío via Netlify Forms

### 8. Footer (Jardín Nocturno)
- Fondo gradiente hacia `night-deep`
- Plantas SVG decorativas en esquinas
- Orbes de energía sutiles
- Link Instagram con card orgánico
- Separador SVG ondulado con nodos de energía
- **Links legales:** Privacidad, Aviso Legal, Cookies
- Mensaje: "Hecho con 🌱 para un futuro mejor"
- Badge "Cultivando el futuro digital"

### 9. Dmetercito (Chatbot)
- **Reemplazó el botón flotante de WhatsApp**
- Chatbot de flujo guiado (árbol de decisiones)
- Soporte completo para 3 idiomas (ES, EN, PT-BR)
- Flujo: Inicio → Tipo proyecto → Detalles → Urgencia → Contacto → Envío
- FAQ integrado: Precios, Tiempos, Tecnologías
- Typing indicator mientras "piensa"
- Envío via Netlify Forms
- 100% JavaScript vanilla, sin dependencias
- Icono de robot con hojas (estilo Solarpunk)
- Animaciones suaves de apertura/cierre

### 10. Páginas Legales
- **/privacidad** - Política de Privacidad minimalista
- **/aviso-legal** - Aviso Legal (nombre comercial Dmeter)
- **/cookies** - Solo cookies técnicas esenciales (sin tracking)
- Diseño consistente con estilo Solarpunk
- Links en el footer

---

## Sistema de Animaciones

### Animaciones Definidas en global.css

| Clase | Efecto | Descripción |
|-------|--------|-------------|
| `.animate-float` | Flotación | Hoja en la brisa (4s) |
| `.animate-grow` | Crecimiento | Planta brotando (0.8s) |
| `.animate-sway` | Balanceo | Plantas moviéndose (6s) |
| `.animate-breathe` | Respiración | Expansión suave (4s) |
| `.animate-solar-pulse` | Pulso solar | Glow verde/dorado (3s) |
| `.animate-bloom` | Florecimiento | Botones expandiendo (2s) |
| `.animate-sprout` | Brote | Aparecer desde abajo (0.7s) |
| `.animate-sun` | Rotación sol | 360° lento (30s) |
| `.animate-firefly` | Luciérnaga | Parpadeo suave (3s) |

### Delays para Escalonamiento
```css
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
```

---

## Componentes CSS Reutilizables

### Botones
```css
.btn-bloom          /* Botón principal con gradiente y glow */
.btn-outline-organic /* Botón outline con hover suave */
```

### Cards
```css
.card-organic       /* Card con bordes 28px y hover elevado */
.card-hover         /* Hover genérico con sombra */
```

### Glass Effects
```css
.glass              /* Glassmorphism básico */
.glass-warm         /* Glassmorphism cálido para header */
```

### Fondos
```css
.bg-grid-organic    /* Grid sutil verde */
.bg-dots-seeds      /* Puntos como semillas */
.bg-horizon         /* Gradiente de horizonte */
```

### Orbes de Energía
```css
.orb-solar          /* Base para orbes */
.orb-solar-green    /* Orbe verde */
.orb-solar-gold     /* Orbe dorado */
.orb-solar-cyan     /* Orbe cyan */
```

### Inputs
```css
.input-organic      /* Input con bordes verdes suaves */
```

---

## Deploy

### GitHub Pages (Actual)
**Repo:** https://github.com/DMETERS/Dmeter-official-website
**URL:** https://dmeters.github.io/Dmeter-official-website/

**Configuración en astro.config.mjs:**
```javascript
site: 'https://dmeters.github.io',
base: '/Dmeter-official-website',
```

**GitHub Actions:** `.github/workflows/deploy.yml`

### Netlify (Alternativa)
El archivo `netlify.toml` está configurado para deploy automático.

---

## Configuración Pendiente

### Antes del Deploy Final
1. **Email** (`src/components/Contact.astro`)
   ```javascript
   const CONTACT_EMAIL = 'hola@dmeter.dev';  // Ya configurado
   ```

2. **Netlify Forms** - Los formularios (Contact y Dmetercito) ya están configurados para Netlify

---

## Comandos

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## Historial de Cambios

### Diciembre 2025 - Dmetercito + Video Contact + Páginas Legales
- **Dmetercito:** Chatbot de flujo guiado reemplazando botón WhatsApp
  - Árbol de decisiones completo (proyecto, FAQs, contacto)
  - Soporte 3 idiomas (ES, EN, PT-BR)
  - Envío a Netlify Forms
  - 100% vanilla JS, sin dependencias
- **Contact:** Video de Demeter como fondo sutil
  - Opacidad 10% con filtro Solarpunk
  - Overlay gradiente para legibilidad
  - Formulario centrado, redes en fila horizontal
- **WhyDmeter:** "Nuestras Capacidades" reemplazó "Tecnologías que Dominamos"
  - Carousel infinito con fade en bordes
  - Capacidades: Web Moderno, Backend Escalable, IA, Cloud, Datos, Integraciones
- **Páginas Legales:** Privacidad, Aviso Legal, Cookies
  - Links agregados al footer
  - Políticas minimalistas y profesionales
- **Footer:** Links legales agregados

### Diciembre 2025 - Robot Humanoide + Vegetación Solarpunk + Nuevos Casos
- **Hero:** Nueva ilustración SVG de robot humanoide estilo Tesla Optimus
- **Robot:** Cuerpo completo detallado con reactor de energía, articulaciones, manos con dedos
- **Colores robot:** Metálico (grises) con acentos cyan y verde de la marca
- **Vegetación Solarpunk:** Integrada al robot para fusión tech-naturaleza:
  - Hojas en hombros (animación sway)
  - Brote creciendo del hombro derecho
  - Enredadera en brazo izquierdo con hojas
  - Musgo en codos y rodillas
  - Hojas flotando alrededor
- **CaseStudies:** Agregados 2 nuevos casos (11 total):
  - Sistema de Gestión Integral para PyME (migración MS-DOS a web moderna)
  - Generador de Presupuestos con API de Vuelos en tiempo real
- **Contador:** Cambiado de dinámico a "50+" fijo para consistencia con Hero

### Diciembre 2025 - Carousel de Casos de Éxito
- **CaseStudies:** Transformado de 3 cards estáticas a carousel con 9 casos
- **Carousel:** CSS nativo + JavaScript vanilla (sin dependencias)
- **Casos reales:** 9 proyectos basados en experiencia real (anónimos)
- **Autoplay:** 6 segundos, respeta prefers-reduced-motion
- **Accesibilidad:** Keyboard navigation, aria-labels, pause on hover
- **i18n:** Traducciones completas en ES/EN/PT-BR
- **Estilos:** Cards con estilo card-organic consistente con Services

### Diciembre 2025 - Revolución Solarpunk
- **Paleta de colores:** Expandida con sistema completo (verdes, dorados, tierras, nocturnos)
- **Tipografías:** Cambiadas a Fraunces + Nunito (más orgánicas)
- **Hero:** Ilustración SVG de ciudad solarpunk completa
- **Animaciones:** 9 nuevas animaciones naturales
- **Header:** Rediseño con glass-warm y hoja decorativa
- **Services:** Cards orgánicas con decoraciones de hojas
- **Process:** Transformado en sendero de jardín con iconos de crecimiento
- **Footer:** Convertido en jardín nocturno con plantas SVG
- **Filosofía:** Integración completa de principios Solarpunk UX/UI

### Diciembre 2025 - Versión Inicial
- Setup inicial con Astro 5 + Tailwind CSS 4
- Sistema i18n (ES/EN/PT-BR)
- Componentes base
- Deploy en GitHub Pages

---

## Próximos Pasos

- [x] ~~Integrar chatbot~~ → Dmetercito implementado
- [x] ~~Páginas legales~~ → Privacidad, Aviso Legal, Cookies
- [ ] Optimizar imágenes/assets
- [ ] Testing responsive completo
- [ ] Configurar dominio dmeter.dev
- [ ] Fase 2: Sistema de reserva (Calendly)
- [ ] Fase 2: Blog/recursos

---

## Créditos

- **Framework:** [Astro](https://astro.build/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Fuentes:** [Google Fonts](https://fonts.google.com/) (Fraunces, Nunito)
- **Iconos:** SVG inline personalizados (estilo Solarpunk)
- **Filosofía:** Solarpunk Design System
- **Deploy:** GitHub Pages / Netlify
