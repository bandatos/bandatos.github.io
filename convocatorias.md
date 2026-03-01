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
**{{ proxima.titulo }}**  
📅 {{ proxima.fecha }} · {{ proxima.horario }}  
📍 {{ proxima.lugar }}

{% if proxima.imagen %}
<p><img src="{{ proxima.imagen | relative_url }}" alt="Flyer {{ proxima.titulo }}" class="convocatoria-flyer" style="max-width: 100%; height: auto;" /></p>
{% endif %}

{{ proxima.descripcion }}

{% if proxima.proyectos.size > 0 %}
**Proyectos:** {{ proxima.proyectos | join: ", " }}
{% endif %}
{% if proxima.enlace_registro %}
[Inscripción]({{ proxima.enlace_registro }})
{% endif %}
{% else %}
Aún no hay próxima convocatoria. Revisa el [grupo de Telegram](https://t.me/+hA6EOxauLz1jZWRh) o [Instagram](https://www.instagram.com/bandatos_cdmx/) para estar al tanto.
{% endif %}

---

## Historial de convocatorias

{% for c in convocatorias_ordenadas offset:1 %}
- **{{ c.fecha }}** — {{ c.titulo }} ({{ c.tipo }}): {{ c.descripcion | truncate: 120 }}
  {% if c.imagen %}<br/><img src="{{ c.imagen | relative_url }}" alt="Flyer {{ c.titulo }}" style="max-width: 280px; height: auto; margin-top: 0.25em;" />{% endif %}
{% endfor %}
