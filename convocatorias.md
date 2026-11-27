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
    {% include flyer.html src=proxima.imagen eager=true %}
  </div>
  {% endif %}

  <div class="convocatoria-texto">
    <p><strong>{{ proxima.titulo }}</strong><br />
    📅 {% include fecha.html fecha=proxima.fecha anio=true %} · {{ proxima.horario }}<br />
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
{% if futuras.size > 1 %}
<div class="convocatoria-despues" data-despues data-despues-lista>
  <p><strong>Después:</strong></p>
  <ul>
  {% for c in futuras offset: 1 %}
    <li data-despues-fecha="{{ c.fecha }}">{% include fecha.html fecha=c.fecha %}: {{ c.titulo }}</li>
  {% endfor %}
  </ul>
</div>
{% endif %}
<div class="convocatoria-proxima convocatoria-por-definir"{% if futuras.size > 0 %} hidden{% endif %}>
  <p><strong>Próxima sesión por definir.</strong></p>
  <p>Nos juntamos cada quince días, los miércoles, en Nativo Condesa (Culiacán 15, CDMX). Revisa el <a href="https://t.me/+hA6EOxauLz1jZWRh">grupo de Telegram</a> o <a href="https://www.instagram.com/bandatos_cdmx/">Instagram</a> para enterarte de la fecha.</p>
</div>

---

## Historial de convocatorias

{% assign por_anio = convocatorias_ordenadas | group_by_exp: "c", "c.fecha | slice: 0, 4" %}
<div class="convocatorias-historial">
{% for grupo in por_anio %}
  {% assign pasadas = grupo.items | where_exp: "c", "c.fecha < hoy" %}
  <details class="convocatorias-anio" data-anio="{{ grupo.name }}"{% if forloop.first %} open{% endif %}{% if pasadas.size == 0 %} hidden{% endif %}>
    <summary><h3>{{ grupo.name }} <span class="convocatorias-conteo">(<span data-conteo>{{ pasadas.size }}</span>)</span></h3></summary>
    <div class="convocatorias-lista">
    {% for c in grupo.items %}
      <article class="convocatoria-card convocatoria-cols" data-historial-fecha="{{ c.fecha }}"{% if c.fecha >= hoy %} hidden{% endif %}>
        {% if c.imagen %}
        <div class="convocatoria-flyer-wrap{% if c.imagen2 %} convocatoria-flyer-wrap--doble{% endif %}">
          {% include flyer.html src=c.imagen %}
          {% if c.imagen2 %}{% include flyer.html src=c.imagen2 %}{% endif %}
        </div>
        {% endif %}
        <div class="convocatoria-texto">
          <header class="convocatoria-card-header">
            <span class="convocatoria-fecha">{% if c.fecha_aproximada %}{% include fecha.html fecha=c.fecha dia=false %} (aprox.){% else %}{% include fecha.html fecha=c.fecha %}{% endif %}</span>
            <span class="convocatoria-tipo convocatoria-tipo--{{ c.tipo }}">{{ c.tipo }}</span>
          </header>
          <h4 class="convocatoria-titulo">{{ c.titulo }}</h4>
          <p class="convocatoria-descripcion">{{ c.descripcion }}</p>
        </div>
      </article>
    {% endfor %}
    </div>
  </details>
{% endfor %}
</div>

<script src="{{ '/assets/js/proxima.js' | relative_url }}"></script>
