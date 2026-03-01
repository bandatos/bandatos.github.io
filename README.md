# #Bandatos — Sitio web

Sitio de la comunidad mexicana de daterxs **Bandatos**, hecho con [Jekyll](https://jekyllrb.com/) y el tema [Minima](https://github.com/jekyll/minima). Pensado para GitHub Pages.

## Qué es este sitio

- **Portada (home):** Presentación de la comunidad, cuándo nos juntamos, próxima sesión, proyectos activos en tarjetas y (opcional) feed de Instagram.
- **Convocatorias:** Próxima sesión y historial, con datos en YAML.
- **Participar:** Cómo sumarse, lugar y horario (Nativo Condesa, dirección y enlace a Google Maps).
- **Proyectos:** Listado de proyectos activos y “en la mesa”, con emoji y enlaces a repo/demo.
- **Cómo trabajamos:** Horario, reglas, documento de proyecto, retrospectivas.

## Estructura del proyecto

```
bandatos.github.io/
├── _config.yml          # Título, logo, nav, plugin redirect, Instagram API (opcional)
├── _data/
│   ├── convocatorias.yml # Sesiones y mapatones: fecha, título, tipo, lugar, horario, etc.
│   └── proyectos.yml     # Proyectos: slug, nombre, emoji, descripción, activo, repo, demo
├── _includes/
│   ├── header.html       # Logo + nav (minima)
│   ├── footer.html       # Descripción, enlaces, iconos de redes en horizontal
│   ├── nav-items.html    # Items del menú (para Minima)
│   ├── head.html         # Favicon, CSS
│   └── instagram-feed.html # Feed de Instagram (solo si hay API URL en config)
├── assets/
│   ├── css/custom.css    # Estilos Bandatos (colores, footer, proyectos, home, responsive)
│   └── images/           # Logo y otras imágenes
├── index.markdown        # Home unificada con “Sobre Bandatos”
├── convocatorias.md
├── participar.md
├── proyectos.md
├── como-trabajamos.md
└── 404.html
```

## Configuración importante (`_config.yml`)

- **title:** `Bandatos` (sitio). La home usa `title: "#Bandatos"` en su front matter.
- **logo:** Ruta al logo (imagen en `assets/images/`).
- **minima.nav_pages:** Páginas del menú (Convocatorias, Participar, Proyectos, Cómo trabajamos). No hay página “Sobre” separada; la home es la página sobre Bandatos.
- **instagram_feed_api_url:** Si se rellena con la URL del API de [NoCodeAPI](https://nocodeapi.com/instagram-api), en la home se muestra la sección “Últimas publicaciones en Instagram”. Si está vacío, no se muestra.
- **plugins:** Incluye `jekyll-redirect-from` para redirigir `/sobre/` a la home.

## Contenido y datos

### Convocatorias (`_data/convocatorias.yml`)

Cada entrada tiene: `fecha`, `titulo`, `tipo` (sesion|mapaton), `lugar`, `horario`, `descripcion`, `proyectos`, y opcionalmente `imagen`, `notas`, `enlace_registro`. La home muestra la próxima sesión (título, fecha, horario; sin dirección). La dirección solo se muestra en Convocatorias y en Participar.

### Proyectos (`_data/proyectos.yml`)

Cada proyecto: `slug`, `nombre`, `etiqueta`, `emoji`, `descripcion`, `activo` (true/false), `repo`, `demo`. En la home se muestran solo los activos, en tarjetas 2×2, **excluyendo Metabandatos** (sigue en la página /proyectos/). El orden en el YAML define el orden en la web.

## Diseño y UX

- **Paleta:** Verde, rojo, negro y crema (variables en `assets/css/custom.css`).
- **Logo:** Incluye `width` y `height` para evitar saltos de layout.
- **Footer:** Primera fila: descripción del sitio y enlaces (Convocatorias, Participar, Proyectos). Segunda sección: iconos de redes en horizontal (Telegram, Instagram, GitHub, email) con SVG y hover.
- **Home:** Título #Bandatos (sin duplicar), texto “Dónde y cuándo” sin dirección (solo horario y enlace a Participar), próxima sesión sin dirección, proyectos activos en grid 2×2; en móvil el grid pasa a una columna.
- **Dirección y mapa:** Solo en la página **Participar** (Nativo Condesa, Culiacán 15, CDMX, con enlace a Google Maps). Quitada de home y footer.
- **Participar:** Indica “los miércoles cada quince días” y enlace a convocatorias.

## Cómo correr el sitio en local

```bash
cd bandatos.github.io
bundle install
bundle exec jekyll serve
```

Abre `http://localhost:4000`. Si cambias `_config.yml`, reinicia el servidor.

## Despliegue en GitHub Pages

El repositorio `bandatos.github.io` se puede publicar como GitHub Pages (rama por defecto o `gh-pages`). Jekyll se ejecuta en GitHub; no hace falta generar `_site` a mano.

## Resumen de lo implementado

- Navegación con emojis en enlaces (Convocatorias, Participar, Proyectos, Cómo trabajamos).
- Proyectos con emoji por proyecto; sin etiqueta duplicada del nombre en la página Proyectos.
- Metabandatos al final de la lista de proyectos activos en /proyectos; oculto en la home.
- Home unificada con el contenido de “Sobre Bandatos”; `/sobre/` redirige a la home.
- Título de la home: #Bandatos (una sola vez).
- Enlace “Participar” después de “Dónde y cuándo” en la home; sin bloque de enlaces al final del contenido (el footer se mantiene).
- Favicons de redes en el footer (Telegram, Instagram, GitHub, email) en una segunda sección horizontal.
- Columna “Redes y contacto” del footer eliminada; solo descripción y enlaces + iconos.
- Dirección de Nativo y enlace a Google Maps solo en Participar; quitados de home y footer.
- “Los miércoles” añadido en home, footer (antes de quitarlo) y Participar.
- Próxima sesión en home sin dirección (solo título, fecha y horario).
- Proyectos activos en home como tarjetas en grid 2×2, sin Metabandatos.
- Feed de Instagram opcional vía NoCodeAPI; sección solo visible si `instagram_feed_api_url` está configurado.
