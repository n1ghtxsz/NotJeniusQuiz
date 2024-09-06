const wrongButtons = document.querySelectorAll('.deathbutton');
wrongButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Redireciona ou exibe uma mensagem de resposta errada
        window.location.href = "deathscreen.html";
    });
});

const rightButtons = document.querySelectorAll('.rightbutton');
rightButtons.forEach(function(button) {
    button.addEventListener('click', function() {

    });
});

function showNextQuestion(idAtual, idNovo) {
    // Remove a classe 'active' do elemento atual para escondê-lo
    document.getElementById(idAtual).classList.remove('active');
    // Adiciona a classe 'active' ao próximo elemento para mostrá-lo
    document.getElementById(idNovo).classList.add('active');
}