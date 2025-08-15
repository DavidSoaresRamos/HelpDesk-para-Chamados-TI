
document.querySelector('.submit').addEventListener('click', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const sector = document.getElementById('sector').value;
  const problem = document.getElementById('problem').value;

  fetch('https://helpdesk-backend-production-372a.up.railway.app/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, sector, problem })
})
    .then(res => res.text())
    .then(data => {
      Swal.fire({
        icon: 'success',
        title: 'Enviado!',
        text: 'Seu chamado foi aberto com sucesso.'
      });
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Ocorreu um erro ao enviar o chamado.'
      });
      console.error(err);
    });
});
