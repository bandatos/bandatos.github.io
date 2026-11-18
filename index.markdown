---
layout: home
title: "#Bandatos"
redirect_from:
  - /sobre/
---

Somos una comunidad mexicana de daterxs que trabaja en **proyectos de datos con impacto social**, propuestos por quienes asisten. Puedes llegar con una idea nueva o sumarte a lo que ya construimos colectivamente.

Espacio **abierto, no técnico**; no se requiere experiencia previa. Lo hacemos entre todes de forma **apartidaria, horizontal y colectiva**.

**Dónde y cuándo:** Cada quince días, los miércoles, 18:30 a 22:00 h. Trae algo para compartir (comida o bebida). [Participar →](/participar/)

## 📅 Próxima sesión

{% assign convocatorias_ordenadas = site.data.convocatorias | sort: "fecha" | reverse %}
{% assign proxima = convocatorias_ordenadas | first %}
{% if proxima %}
<p data-proxima-fecha="{{ proxima.fecha }}"><strong>{{ proxima.titulo }}</strong> · {{ proxima.fecha }} · {{ proxima.horario }}</p>
<p class="convocatoria-por-definir" hidden>Próxima sesión por definir. Nos juntamos cada quince días, los miércoles.</p>
<script src="{{ '/assets/js/proxima.js' | relative_url }}" defer></script>

[Ver convocatorias →](/convocatorias/)
{% else %}
[Ver convocatorias →](/convocatorias/)
{% endif %}

## 📂 Proyectos activos

{% assign activos = site.data.proyectos | where: "activo", true | where_exp: "item", "item.slug != 'metabandatos'" %}
<div class="home-proyectos-grid">
{% for p in activos %}
  <a href="{{ "/proyectos/" | relative_url }}" class="home-proyecto-card">
    <span class="home-proyecto-emoji">{{ p.emoji }}</span>
    <h3 class="home-proyecto-name">{{ p.nombre }}</h3>
    <p class="home-proyecto-desc">{{ p.descripcion | strip_html | truncate: 100 }}</p>
  </a>
{% endfor %}
</div>
[Ver todos los proyectos →](/proyectos/)

{% include instagram-feed.html %}
