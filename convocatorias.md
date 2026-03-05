---
layout: page
title: 📅 Convocatorias
permalink: /convocatorias/
---

Cada sesión arma la convocatoria de la siguiente (avances y necesidades que se registran al cierre). Para recibir convocatorias o sumarte: [Participar](/participar/).

## Próxima sesión

{% assign convocatorias_ordenadas = site.data.convocatorias | sort: "fecha" | reverse %}
{% assign proxima = convocatorias_ordenadas | first %}

{% if proxima %}
<div class="convocatoria-proxima">
  <p><strong>{{ proxima.titulo }}</strong><br />
  📅 {{ proxima.fecha }} · {{ proxima.horario }}<br />
  📍 {{ proxima.lugar }}</p>

  {% if proxima.imagen %}
  <div class="convocatoria-flyer-wrap convocatoria-flyer-wrap--proxima">
    <img src="{{ proxima.imagen | relative_url }}" alt="Flyer {{ proxima.titulo }}" class="convocatoria-flyer" loading="lazy" />
  </div>
  {% endif %}

  <p>{{ proxima.descripcion }}</p>

  {% if proxima.proyectos.size > 0 %}
  <p><strong>Proyectos:</strong> {{ proxima.proyectos | join: ", " }}</p>
  {% endif %}
  {% if proxima.enlace_registro %}
  <p><a href="{{ proxima.enlace_registro }}">Inscripción</a></p>
  {% endif %}
</div>
{% else %}
<p>Aún no hay próxima convocatoria. Revisa el <a href="https://t.me/+hA6EOxauLz1jZWRh">grupo de Telegram</a> o <a href="https://www.instagram.com/bandatos_cdmx/">Instagram</a> para estar al tanto.</p>
{% endif %}

---

## Historial de convocatorias

<div class="convocatorias-lista">
{% for c in convocatorias_ordenadas offset:1 %}
  <article class="convocatoria-card">
    <header class="convocatoria-card-header">
      <span class="convocatoria-fecha">{{ c.fecha }}</span>
      <span class="convocatoria-tipo convocatoria-tipo--{{ c.tipo }}">{{ c.tipo }}</span>
    </header>
    <h3 class="convocatoria-titulo">{{ c.titulo }}</h3>
    <p class="convocatoria-descripcion">{{ c.descripcion }}</p>
    {% if c.imagen %}
    <div class="convocatoria-flyer-wrap">
      <img src="{{ c.imagen | relative_url }}" alt="Flyer {{ c.titulo }}" class="convocatoria-flyer" loading="lazy" />
    </div>
    {% endif %}
  </article>
{% endfor %}
</div>
