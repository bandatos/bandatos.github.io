---
layout: page
title: 📅 Convocatorias
permalink: /convocatorias/
---

Cada sesión arma la convocatoria de la siguiente (avances y necesidades que se registran al cierre). Para recibir convocatorias o sumarte: [Participar](/participar/).

## Próxima sesión

{% assign hoy = site.time | date: "%Y-%m-%d" %}
{% assign convocatorias_ordenadas = site.data.convocatorias | sort: "fecha" | reverse %}
{% assign futuras = site.data.convocatorias | where_exp: "c", "c.fecha >= hoy" | sort: "fecha" %}

{% for proxima in futuras %}
<div class="convocatoria-proxima convocatoria-cols" data-proxima-fecha="{{ proxima.fecha }}"{% unless forloop.first %} hidden{% endunless %}>
  {% if proxima.imagen %}
  <div class="convocatoria-flyer-wrap convocatoria-flyer-wrap--proxima">
    <img src="{{ proxima.imagen | relative_url }}" alt="Flyer {{ proxima.titulo }}" class="convocatoria-flyer" loading="lazy" />
  </div>
  {% endif %}

  <div class="convocatoria-texto">
    <p><strong>{{ proxima.titulo }}</strong><br />
    📅 {{ proxima.fecha }} · {{ proxima.horario }}<br />
    📍 {{ proxima.lugar }}</p>

    <p>{{ proxima.descripcion }}</p>

    {% if proxima.proyectos.size > 0 %}
    <p><strong>Proyectos:</strong> {{ proxima.proyectos | join: ", " }}</p>
    {% endif %}
    {% if proxima.enlace_registro %}
    <p><a href="{{ proxima.enlace_registro }}">Inscripción</a></p>
    {% endif %}
  </div>
</div>
{% endfor %}
<div class="convocatoria-proxima convocatoria-por-definir"{% if futuras.size > 0 %} hidden{% endif %}>
  <p><strong>Próxima sesión por definir.</strong></p>
  <p>Nos juntamos cada quince días, los miércoles, en Nativo Condesa (Culiacán 15, CDMX). Revisa el <a href="https://t.me/+hA6EOxauLz1jZWRh">grupo de Telegram</a> o <a href="https://www.instagram.com/bandatos_cdmx/">Instagram</a> para enterarte de la fecha.</p>
</div>

---

## Historial de convocatorias

<div class="convocatorias-lista">
{% for c in convocatorias_ordenadas %}
  <article class="convocatoria-card convocatoria-cols" data-historial-fecha="{{ c.fecha }}"{% if c.fecha >= hoy %} hidden{% endif %}>
    {% if c.imagen %}
    <div class="convocatoria-flyer-wrap{% if c.imagen2 %} convocatoria-flyer-wrap--doble{% endif %}">
      <img src="{{ c.imagen | relative_url }}" alt="Flyer {{ c.titulo }}" class="convocatoria-flyer" loading="lazy" />
      {% if c.imagen2 %}
      <img src="{{ c.imagen2 | relative_url }}" alt="Flyer {{ c.titulo }} (2)" class="convocatoria-flyer" loading="lazy" />
      {% endif %}
    </div>
    {% endif %}
    <div class="convocatoria-texto">
      <header class="convocatoria-card-header">
        <span class="convocatoria-fecha">{{ c.fecha }}{% if c.fecha_aproximada %} (aprox.){% endif %}</span>
        <span class="convocatoria-tipo convocatoria-tipo--{{ c.tipo }}">{{ c.tipo }}</span>
      </header>
      <h3 class="convocatoria-titulo">{{ c.titulo }}</h3>
      <p class="convocatoria-descripcion">{{ c.descripcion }}</p>
    </div>
  </article>
{% endfor %}
</div>

<script src="{{ '/assets/js/proxima.js' | relative_url }}"></script>
