document.querySelector('.submit').addEventListener('click', function(e) {
  e.preventDefault(); 

  const nome = document.getElementById('name').value;
  const setor = document.getElementById('setor').value;
  const problema = document.getElementById('problema').value;

  fetch('http://localhost:8080/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, setor, problema })
  })
  .then(res => res.text())
  .then(data => {
    alert('Ticket enviado com sucesso!');
  })
  .catch(err => {
    alert('Erro ao enviar o ticket.');
    console.error(err);
  });
});
