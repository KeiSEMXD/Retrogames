// --- DARK MODE universal ---
document.addEventListener('DOMContentLoaded', function () {
  const botonDark = document.getElementById('toggle-dark');
  if (botonDark) {
    botonDark.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      // Guarda la preferencia en localStorage (opcional)
      if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('modoOscuro', '1');
      } else {
        localStorage.removeItem('modoOscuro');
      }
    });
    // Aplica el modo oscuro si estaba activado
    if(localStorage.getItem('modoOscuro') === '1'){
      document.body.classList.add('dark-mode');
    }
  }
});
