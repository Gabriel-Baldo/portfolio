// Menu mobile + ano + copiar e-mail (JS puro, sem dependências)
(function () {
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('aberto'); });
    });
  }

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());

  var copiar = document.getElementById('copiar-email');
  if (copiar) {
    copiar.addEventListener('click', async function () {
      var email = 'gabriel.k.baldo@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        copiar.textContent = 'copiado!';
      } catch (e) {
        copiar.textContent = email;
      }
      setTimeout(function () { copiar.textContent = 'copiar'; }, 2000);
    });
  }
})();
