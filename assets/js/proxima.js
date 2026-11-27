(function () {
  var hoy = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City' }).format(new Date());
  function fecha(el, attr) { return el.getAttribute(attr); }

  // Próxima: la primera convocatoria cuya fecha todavía no pasó.
  var proxima = null;
  document.querySelectorAll('[data-proxima-fecha]').forEach(function (el) {
    var vigente = fecha(el, 'data-proxima-fecha') >= hoy;
    if (vigente && !proxima) proxima = fecha(el, 'data-proxima-fecha');
    el.hidden = fecha(el, 'data-proxima-fecha') !== proxima;
  });
  document.querySelectorAll('.convocatoria-por-definir').forEach(function (el) { el.hidden = !!proxima; });

  // Después: las que vienen detrás de la próxima.
  document.querySelectorAll('[data-despues]').forEach(function (bloque) { bloque.hidden = !proxima; });
  document.querySelectorAll('[data-despues-lista]').forEach(function (lista) {
    var hay = false;
    lista.querySelectorAll('[data-despues-fecha]').forEach(function (li) {
      li.hidden = !proxima || li.getAttribute('data-despues-fecha') <= proxima;
      if (!li.hidden) hay = true;
    });
    lista.hidden = !hay;
  });

  // Historial: solo las que ya pasaron, con el conteo por año.
  document.querySelectorAll('[data-historial-fecha]').forEach(function (el) {
    el.hidden = fecha(el, 'data-historial-fecha') >= hoy;
  });
  document.querySelectorAll('details[data-anio]').forEach(function (d) {
    var n = d.querySelectorAll('[data-historial-fecha]:not([hidden])').length;
    var c = d.querySelector('[data-conteo]');
    if (c) c.textContent = n;
    d.hidden = n === 0;
  });
})();
