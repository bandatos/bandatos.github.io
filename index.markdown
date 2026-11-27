---
layout: home
title: "#Bandatos"
redirect_from:
  - /sobre/
---

Somos una comunidad mexicana de daterxs que trabaja en **proyectos de datos con impacto social**, propuestos por quienes asisten. Puedes llegar con una idea nueva o sumarte a lo que ya construimos colectivamente.

Espacio **abierto, no técnico**; no se requiere experiencia previa. Lo hacemos entre todes de forma **apartidaria, horizontal y colectiva**. No tenemos relación con partidos políticos ni con instituciones de gobierno.

**Dónde y cuándo:** Cada quince días, los miércoles, 18:30 a 22:00 h. Trae algo para compartir (comida o bebida). [Participar →](/participar/)

## 📅 Próxima sesión

{% assign hoy = site.time | date: "%Y-%m-%d" %}
{% assign futuras = site.data.convocatorias | where_exp: "c", "c.fecha >= hoy" | sort: "fecha" %}
{% for proxima in futuras %}
<p data-proxima-fecha="{{ proxima.fecha }}"{% unless forloop.first %} hidden{% endunless %}><strong>{{ proxima.titulo }}</strong> · {{ proxima.fecha }} · {{ proxima.horario }}</p>
{% endfor %}
<p class="convocatoria-por-definir"{% if futuras.size > 0 %} hidden{% endif %}>Próxima sesión por definir. Nos juntamos cada quince días, los miércoles.</p>
<script src="{{ '/assets/js/proxima.js' | relative_url }}" defer></script>

[Ver convocatorias →](/convocatorias/)

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
