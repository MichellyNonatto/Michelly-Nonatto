var copyTextareaBtn = document.querySelector('.copiar');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.textarea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'sim!' : 'não!';
    alert('Texto copiado? ' + msg);
  } catch (err) {
    alert('Opa, Não conseguimos copiar o texto, é possivel que o seu navegador não tenha suporte, tente usar Crtl+C.');
  }
});