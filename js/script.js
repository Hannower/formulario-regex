const form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    const regexNome = /^[A-Za-zÀ-ÿ\s]{3,}$/;
    const regexTelefone = /^[0-9]{10,11}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexNome.test(nome)) {
        alert('Nome inválido');
        return;
    }

    if (!regexTelefone.test(telefone)) {
        alert('Telefone inválido');
        return;
    }

    if (!regexEmail.test(email)) {
        alert('E-mail inválido');
        return;
    }

    alert('Formulário enviado com sucesso!');
    form.reset();
});

