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

### Cómo agregar una convocatoria

Las convocatorias se editan en **`_data/convocatorias.yml`**. La **primera entrada** del archivo es la que se muestra como **próxima sesión** en la home y en la página Convocatorias; el resto forma el historial (ordenado de más reciente a más antigua).

**1. Abrir el archivo:** `_data/convocatorias.yml`

**2. Añadir una nueva entrada al inicio.** La convocatoria más reciente debe ir **primera** (arriba de todo). Copia el bloque de una convocatoria existente y pégalo después de la línea del schema (los comentarios `# Schema: ...`), antes del primer `- fecha:`.

**3. Campos de cada convocatoria:**

| Campo | Obligatorio | Descripción | Ejemplo |
|-------|-------------|-------------|---------|
| **fecha** | Sí | Fecha en formato `YYYY-MM-DD`. | `"2026-03-12"` |
| **titulo** | Sí | Título que se muestra en la home y en Convocatorias. | `"Convocatoria #Bandatos Marzo"` |
| **tipo** | Sí | `sesion` o `mapaton`. | `sesion` |
| **lugar** | Sí | Dirección o punto de encuentro (se muestra en Convocatorias, no en la home). | `"Nativo Condesa, Culiacán 15, CDMX"` |
| **horario** | Sí | Hora de inicio o rango. Texto libre. | `"19:00"` o `"7:00 – 9:30"` |
| **descripcion** | Sí | Texto que describe la sesión. | Una o dos frases. |
| **proyectos** | Sí | Lista de proyectos que se tocarán. Puede ser `[]` si no hay. | `- Metabandatos` y más items |
| **imagen** | No | Ruta a un flyer (desde la raíz del sitio). Ej. `/convocatorias/mi-flyer.svg`. Si no hay, no incluyas la clave. | `"/convocatorias/bandaton.svg"` |
| **enlace_registro** | No | URL de formulario de inscripción; se muestra enlace "Inscripción". | URL completa |
| **notas** | No | Notas internas; no se muestran en la web. | Opcional |

**4. Ejemplo completo:**

```yaml
- fecha: "2026-03-12"
  titulo: "Convocatoria #Bandatos Marzo"
  tipo: sesion
  lugar: "Nativo Condesa, Culiacán 15, CDMX"
  horario: "19:00"
  descripcion: "Sesión para avanzar en proyectos activos y preparar el Open Data Day."
  proyectos:
    - Metabandatos
    - "Pendientes y escaleras"
    - Mapabaches
  imagen: "/convocatorias/flyer-marzo.svg"
```

Si hay **imagen**, el archivo debe existir en el repo (ej. en `convocatorias/flyer-marzo.svg`). Si no tienes flyer, no incluyas la línea `imagen:`.

**5. Verificar:** Guarda, ejecuta `bundle exec jekyll serve` y revisa la home y `/convocatorias/`. La próxima sesión es siempre la primera entrada del YAML.

---

### Cómo agregar un proyecto

Los proyectos se editan en **`_data/proyectos.yml`**. Aparecen en la página **Proyectos** (activos primero, luego "En la mesa"). Los **activos** salen también en la **home** en tarjetas, excepto Metabandatos.

**1. Abrir el archivo:** `_data/proyectos.yml`

**2. Añadir una nueva entrada.** Añade un nuevo bloque `- slug: ...` al final del archivo (o en la posición que quieras: el orden en el YAML es el orden en la web). Usa indentación de 2 espacios.

**3. Campos de cada proyecto:**

| Campo | Obligatorio | Descripción | Ejemplo |
|-------|-------------|-------------|---------|
| **slug** | Sí | Identificador único en minúsculas, sin espacios (guiones sí). No se muestra; se usa para filtros. | `mi-proyecto` |
| **nombre** | Sí | Nombre completo del proyecto (título en Proyectos y en tarjetas de la home). | `"Mi proyecto"` |
| **etiqueta** | Sí | Suele ser igual que el nombre. | `"Mi proyecto"` |
| **emoji** | Sí | Un emoji que representa el proyecto (entre comillas). | `"🗺️"` |
| **descripcion** | Sí | Texto corto. En la home se trunca a ~100 caracteres. | Una o dos frases. |
| **activo** | Sí | `true` = proyecto activo (home + "Proyectos activos"). `false` = "En la mesa". | `true` o `false` |
| **repo** | No | URL del repositorio. Si no hay, `""`. | `"https://github.com/bandatos/..."` |
| **demo** | No | URL del sitio o demo. Si no hay, `""`. | `"https://bandatos.github.io/..."` |

**4. Ejemplo (proyecto activo):**

```yaml
- slug: mi-nuevo-proyecto
  nombre: Mi nuevo proyecto
  etiqueta: Mi nuevo proyecto
  emoji: "🔧"
  descripcion: "Herramienta para visualizar datos de movilidad en CDMX."
  activo: true
  repo: "https://github.com/bandatos/mi-nuevo-proyecto"
  demo: "https://bandatos.github.io/mi-nuevo-proyecto/"
```

**Ejemplo (proyecto en la mesa):**

```yaml
- slug: idea-futura
  nombre: Idea futura
  etiqueta: Idea futura
  emoji: "💡"
  descripcion: "Proyecto en conversación; aún no hay repo."
  activo: false
  repo: ""
  demo: ""
```

**5. Orden y visibilidad:**

- **Orden:** El orden en el archivo es el orden en la web. Para mover un proyecto (ej. Metabandatos al final de activos), corta y pega su bloque.
- **Home:** En la home solo se muestran proyectos con `activo: true` y se **excluye** el de `slug: metabandatos`. Para que un proyecto nuevo aparezca en la home, pon `activo: true` y un slug distinto de `metabandatos`.
- **Repo y demo:** Si no hay URL, deja `repo: ""` y `demo: ""`. Los enlaces "Repositorio" y "Demo / sitio" solo se muestran cuando hay valor.

**6. Verificar:** Guarda y revisa la página **Proyectos** y, si es activo, la **home**.

---

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
