---
layout: page
title: 📂 Proyectos
permalink: /proyectos/
---

Los proyectos son propuestos por quienes asisten. Puedes sumarte a uno activo o proponer uno nuevo.

<div class="proyectos-page">

<h2>Proyectos activos</h2>

{% assign activos = site.data.proyectos | where: "activo", true %}
{% for p in activos %}
<div class="proyecto-block">
  <span class="etiqueta-estado activo">Activo</span>
  <h3 style="margin: 0.5em 0 0.25em 0;">{{ p.emoji }} {{ p.nombre }}</h3>
  <p style="margin: 0 0 0.5em 0;">{{ p.descripcion }}</p>
  {% if p.repo != "" and p.repo != nil %}<a href="{{ p.repo }}">Repositorio</a>{% if p.demo != "" and p.demo != nil %} · {% endif %}{% endif %}{% if p.demo != "" and p.demo != nil %}<a href="{{ p.demo }}">Demo / sitio</a>{% endif %}
</div>
{% endfor %}

<h2 class="proyectos-en-mesa">En la mesa</h2>

<p>Proyectos en conversación; aún no son activos. Si te interesa uno, súmate en una sesión para llevarlo adelante.</p>

{% assign propuestos = site.data.proyectos | where: "activo", false %}
{% for p in propuestos %}
<div class="proyecto-block propuesto">
  <span class="etiqueta-estado propuesto">Propuesto</span>
  <h3 style="margin: 0.5em 0 0.25em 0;">{{ p.emoji }} {{ p.nombre }}</h3>
  <p style="margin: 0 0 0.5em 0;">{{ p.descripcion }}</p>
  {% if p.repo != "" and p.repo != nil %}<a href="{{ p.repo }}">Repositorio</a>{% endif %}
</div>
{% endfor %}

</div>
