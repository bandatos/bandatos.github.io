(function () {
  var hoy = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City' }).format(new Date());
  // Próxima: la primera convocatoria cuya fecha todavía no pasó.
  var mostrada = false;
  document.querySelectorAll('[data-proxima-fecha]').forEach(function (el) {
    var vigente = el.getAttribute('data-proxima-fecha') >= hoy;
    el.hidden = !(vigente && !mostrada);
    if (vigente && !mostrada) mostrada = true;
  });
  document.querySelectorAll('.convocatoria-por-definir').forEach(function (el) { el.hidden = mostrada; });
  // Historial: solo las que ya pasaron.
  document.querySelectorAll('[data-historial-fecha]').forEach(function (el) {
    el.hidden = el.getAttribute('data-historial-fecha') >= hoy;
  });
})();
