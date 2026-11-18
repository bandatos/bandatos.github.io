// Si la "próxima" convocatoria ya pasó, la pasa al historial y muestra "por definir".
// El sitio se compila solo al publicar, por eso la comparación se hace en el navegador.
(function () {
  var hoy = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City' }).format(new Date());
  var bloques = document.querySelectorAll('[data-proxima-fecha]');
  if (!bloques.length || bloques[0].getAttribute('data-proxima-fecha') >= hoy) return;
  bloques.forEach(function (el) {
    if (el.tagName === 'ARTICLE') el.hidden = false; // tarjeta en el historial
    else el.hidden = true;                            // bloque de próxima sesión
  });
  document.querySelectorAll('.convocatoria-por-definir').forEach(function (el) { el.hidden = false; });
})();
