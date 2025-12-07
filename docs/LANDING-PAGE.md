# Dmeter Landing Page - Documentación del Proyecto

## Resumen Ejecutivo

Landing page profesional para **Dmeter**, consultora de servicios de software, desarrollada con estilo visual **Solarpunk** - una estética que combina tecnología futurista con naturaleza, sostenibilidad y esperanza radical.

**Fecha de creación:** Diciembre 2025
**Última actualización:** Diciembre 2025 (TechLogosBar + Comparison + Métricas)
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
│   │   ├── Hero.astro             # Robot Solarpunk SVG + stats
│   │   ├── TechLogosBar.astro     # Carousel de integraciones (12 logos)
│   │   ├── Services.astro         # Cards orgánicas con hojas
│   │   ├── Process.astro          # Sendero jardín (semilla→árbol)
│   │   ├── CaseStudies.astro      # Carousel de casos de éxito (11)
│   │   ├── WhyDmeter.astro        # Propuesta de valor + capacidades
│   │   ├── Comparison.astro       # Dmeter vs Agencias vs Freelancers
│   │   ├── Contact.astro          # Formulario + video + S.O.S
│   │   ├── Footer.astro           # Jardín nocturno + links legales
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
│   ├── LANDING-PAGE.md            # Esta documentación
│   └── Agente.md                  # Prompt del agente Solarpunk
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

## Orden de Componentes en la Página

```
Header
↓
Hero (Robot + Stats)
↓
TechLogosBar (Carousel de integraciones)
↓
Services (6 servicios)
↓
Process (4 pasos)
↓
CaseStudies (11 casos)
↓
WhyDmeter (3 valores + capacidades)
↓
Comparison (Dmeter vs Agencias vs Freelancers)
↓
Contact (Formulario + S.O.S)
↓
Footer
↓
Dmetercito (Chatbot flotante)
```

---

## Componentes Detallados

### 1. Header
- Logo con hoja decorativa animada
- Fondo `glass-warm` con blur orgánico
- Navegación con indicadores de hoja al hover
- Botón CTA con icono de hoja que rota
- Menú mobile con separadores orgánicos SVG
- Sombra dinámica al hacer scroll

### 2. Hero (Robot Solarpunk)
**Interactividad del Robot:**
- La cabeza del robot sigue al cursor del mouse después de 0.5s de inactividad
- Movimiento sutil y suave (±15° horizontal, ±10° vertical)
- Se resetea cuando el mouse sale de la ventana
- Solo funciona en desktop (donde el robot es visible)

**Ilustración SVG Robot Humanoide (estilo Tesla Optimus + Solarpunk):**
- Robot de cuerpo completo con proporciones humanas
- Cabeza ovalada con visor LED horizontal iluminado y ojos cyan
- Torso con núcleo de energía verde brillante (reactor central)
- Brazos y piernas completos con articulaciones detalladas
- Acabado metálico con acentos cyan y verde de la marca

**Vegetación Solarpunk integrada:**
- Hojas en hombros, brote en hombro derecho
- Enredadera en brazo izquierdo, musgo en codos/rodillas
- Hojas flotando alrededor

**Stats de Confianza (4 métricas):**
| Métrica | Valor | Descripción |
|---------|-------|-------------|
| Proyectos | 50+ | Proyectos completados |
| Industrias | 6 | Sectores diferentes |
| Usuarios | 2000+ | Usuarios atendidos |
| Compromiso | 100% | Garantía de calidad |

### 3. TechLogosBar (Carousel de Integraciones)
**Características:**
- Carousel infinito horizontal con animación CSS (40s, imperceptible)
- **Draggable:** Se puede arrastrar con mouse o touch
- Pausa al hover o al arrastrar
- Fade en los bordes (gradiente transparente)
- Respeta `prefers-reduced-motion`

**Logos incluidos (12):**
| Logo | Categoría |
|------|-----------|
| Stripe | Pagos |
| PayPal | Pagos |
| Mercado Pago | Pagos LATAM |
| Claude | IA |
| OpenAI | IA |
| AWS | Cloud |
| Google Cloud | Cloud |
| Slack | Comunicación |
| Vercel | Deploy |
| Supabase | Backend |
| GitHub | DevOps |
| Docker | DevOps |

**Traducciones:**
- ES: "Integramos con"
- EN: "We integrate with"
- PT-BR: "Integramos com"

### 4. Services (Cards Orgánicas)
- 6 servicios: Landing Pages, Software a Medida, Dashboards, Soluciones con IA, Integraciones & APIs, Consultoría Digital
- Clase `card-organic` con bordes redondeados 28px
- Decoración de hoja SVG en esquina superior derecha
- Iconos con gradiente y pulso de energía al hover

### 5. Process (Sendero de Jardín)
**4 etapas con iconos SVG:**
1. **Conversamos** - Semilla plantándose
2. **Diseñamos** - Brote emergiendo
3. **Desarrollamos** - Planta con raíces tech
4. **Acompañamos** - Árbol con frutos

- Línea ondulada SVG como camino de jardín
- Gradiente de colores progresivo
- CTA "Plantemos juntos"

### 6. CaseStudies (Carousel de 11 Casos)
**Carousel CSS nativo + JavaScript vanilla:**
- 11 casos de éxito basados en experiencia real (anónimos)
- Autoplay cada 6 segundos (respeta prefers-reduced-motion)
- Navegación: flechas, dots, swipe táctil, keyboard
- Responsive: 1 card (mobile), 2 (tablet), 3 (desktop)

**Casos incluidos:**
| # | Industria | Proyecto |
|---|-----------|----------|
| 1 | Recruiting | Plataforma SaaS de Recruiting |
| 2 | Automatización | Sistema de Prospección Automatizado |
| 3 | IA/Contenido | Generador de Contenido Literario (+2000 autores) |
| 4 | Turismo | Plataforma de Viajes (Amadeus, Orbis, RateHawk) |
| 5 | Fintech | Gateway de Pagos (Stripe, Redsys, PayPal) |
| 6 | IA/Chatbots | Chatbot para Autores Literarios |
| 7 | DevTools | Agente MCP con IA |
| 8 | Healthcare | Integración de Telemedicina |
| 9 | E-commerce | Plataforma E-commerce Avanzada |
| 10 | PyME | Sistema de Gestión (migración MS-DOS a web) |
| 11 | Turismo | Generador de Presupuestos con API de Vuelos |

### 7. WhyDmeter (Propuesta de Valor)
- **3 puntos de valor:**
  - Cercanía Real
  - Soluciones con Propósito
  - Acompañamiento Continuo
- **Carousel de Capacidades:** Web Moderno, Backend Escalable, Automatización & IA, Cloud Native, Datos & Analytics, Integraciones

### 8. Comparison (Dmeter vs Alternativas)
**Diseño: 3 Cards Simétricas**
- Card de Dmeter destacada con borde verde, escala 105%, badge "Recomendado"
- Cards de Agencias y Freelancers con estilo neutro
- CTA solo en card de Dmeter

**Criterios de comparación:**
| Criterio | Dmeter | Agencias | Freelancers |
|----------|--------|----------|-------------|
| Tiempo de respuesta | En el día | Días/Semanas | Variable |
| Personalización | Total | Procesos rígidos | Depende |
| Soporte post-lanzamiento | Incluido | Costo extra | Limitado |
| Escalabilidad | Desde el inicio | Lento | No escalable |
| Riesgo | Bajo | Medio | Alto |

**Traducciones tiempo de respuesta:**
- ES: "En el día"
- EN: "Same day"
- PT-BR: "No mesmo dia"

### 9. Contact (Formulario + S.O.S)
- Formulario: nombre, email, tipo de proyecto, mensaje
- Video de fondo sutil (opacidad 10%)
- Redes de contacto en fila horizontal
- Envío via Netlify Forms

**S.O.S de Emergencia Técnica:**
- Enlace discreto debajo de las redes
- Modal fullscreen con formulario ultra mínimo
- Campo `priority: urgent` para filtrar en Netlify

### 10. Footer (Jardín Nocturno)
- Fondo gradiente hacia `night-deep`
- Plantas SVG decorativas
- Links legales: Privacidad, Aviso Legal, Cookies
- Mensaje: "Hecho con 🌱 para un futuro mejor"

### 11. Dmetercito (Chatbot)
- Chatbot de flujo guiado (árbol de decisiones)
- Soporte 3 idiomas (ES, EN, PT-BR)
- FAQ integrado: Precios, Tiempos, Tecnologías
- Envío via Netlify Forms
- 100% JavaScript vanilla

### 12. Páginas Legales
- **/privacidad** - Política de Privacidad
- **/aviso-legal** - Aviso Legal
- **/cookies** - Política de Cookies

---

## Sistema de Animaciones

| Clase | Efecto | Duración |
|-------|--------|----------|
| `.animate-float` | Flotación (hoja en brisa) | 4s |
| `.animate-grow` | Crecimiento (planta brotando) | 0.8s |
| `.animate-sway` | Balanceo (plantas) | 6s |
| `.animate-breathe` | Respiración (expansión suave) | 4s |
| `.animate-solar-pulse` | Pulso solar (glow verde/dorado) | 3s |
| `.animate-bloom` | Florecimiento (botones) | 2s |
| `.animate-sprout` | Brote (aparecer desde abajo) | 0.7s |
| `.animate-sun` | Rotación sol | 30s |
| `.animate-firefly` | Luciérnaga (parpadeo) | 3s |

---

## Deploy

### GitHub Pages (Actual)
**Repo:** https://github.com/DMETERS/Dmeter-official-website
**URL:** https://dmeters.github.io/Dmeter-official-website/

### Netlify (Alternativa)
El archivo `netlify.toml` está configurado para deploy automático.

---

## Netlify Forms

3 formularios configurados:
- `contact` - Formulario principal
- `dmetercito` - Chatbot
- `sos` - Emergencias (campo `priority: urgent`)

---

## Comandos

```bash
npm run dev      # Desarrollo local
npm run build    # Build producción
npm run preview  # Preview del build
```

---

## Historial de Cambios

### Diciembre 2025 - TechLogosBar + Comparison + Métricas
- **TechLogosBar:** Nuevo componente con carousel de integraciones
  - 12 logos: Stripe, PayPal, Mercado Pago, Claude, OpenAI, AWS, Google Cloud, Slack, Vercel, Supabase, GitHub, Docker
  - Carousel infinito (40s) + draggable con mouse/touch
  - Fade en bordes, pausa al hover/drag
  - Título traducido en 3 idiomas
- **Comparison:** Nuevo componente comparativo
  - 3 cards simétricas: Dmeter vs Agencias vs Freelancers
  - Card Dmeter destacada (escala 105%, borde verde, badge "Recomendado")
  - 5 criterios: Tiempo de respuesta, Personalización, Soporte, Escalabilidad, Riesgo
  - Tiempo de respuesta cambiado de "< 24hrs" a texto claro ("En el día", "Same day", "No mesmo dia")
  - CTA solo en card de Dmeter
- **Hero Stats actualizadas:**
  - Antes: 50+ Proyectos, 3 Países, 100% Compromiso
  - Ahora: 50+ Proyectos, 6 Industrias, 2000+ Usuarios, 100% Compromiso
- **Orden de componentes actualizado:**
  - Hero → TechLogosBar → Services → Process → CaseStudies → WhyDmeter → Comparison → Contact

### Diciembre 2025 - S.O.S + Robot Interactivo
- **Robot Hero:** La cabeza sigue al cursor después de 0.5s de inactividad
- **S.O.S Emergencia:** Modal para urgencias técnicas con formulario mínimo

### Diciembre 2025 - Dmetercito + Video Contact + Páginas Legales
- **Dmetercito:** Chatbot de flujo guiado reemplazando botón WhatsApp
- **Contact:** Video de Demeter como fondo sutil
- **Páginas Legales:** Privacidad, Aviso Legal, Cookies

### Diciembre 2025 - Robot Humanoide + Vegetación Solarpunk
- **Hero:** Robot humanoide estilo Tesla Optimus con vegetación integrada
- **CaseStudies:** Expandido a 11 casos de éxito

### Diciembre 2025 - Carousel de Casos de Éxito
- **CaseStudies:** Carousel con 9 casos iniciales

### Diciembre 2025 - Revolución Solarpunk
- Paleta de colores expandida
- Tipografías Fraunces + Nunito
- Animaciones naturales
- Componentes orgánicos

### Diciembre 2025 - Versión Inicial
- Setup Astro 5 + Tailwind CSS 4
- Sistema i18n (ES/EN/PT-BR)
- Deploy GitHub Pages

---

## Próximos Pasos

- [x] ~~Integrar chatbot~~ → Dmetercito
- [x] ~~Páginas legales~~ → Privacidad, Aviso Legal, Cookies
- [x] ~~Barra de logos/integraciones~~ → TechLogosBar
- [x] ~~Sección comparativa~~ → Comparison
- [x] ~~Métricas expandidas~~ → 4 stats en Hero
- [ ] Optimizar imágenes/assets
- [ ] Testing responsive completo
- [ ] Configurar dominio dmeter.dev

---

## Créditos

- **Framework:** [Astro](https://astro.build/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Fuentes:** [Google Fonts](https://fonts.google.com/) (Fraunces, Nunito)
- **Iconos:** SVG inline personalizados (Simple Icons para logos)
- **Filosofía:** Solarpunk Design System
- **Deploy:** GitHub Pages / Netlify
