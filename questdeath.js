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
    localStorage.setItem('currentQuestion', idNovo);
}

// Verifica o estado da pergunta atual quando a página é carregada
window.addEventListener('load', function() {
    // Verifica se a página atual é a 'deathscreen'
    if (window.location.pathname.includes("deathscreen.html")) {
        // Ao voltar da tela de morte, redireciona para a primeira pergunta
        window.history.replaceState(null, "", "questions.html"); // Troca a URL
        localStorage.removeItem('currentQuestion'); // Reseta o estado da questão
        window.location.href = "questions.html"; // Redireciona para a primeira questão
    } else {
        // Obtém a última questão armazenada
        const currentQuestion = localStorage.getItem('currentQuestion') || 'q1';
        // Mostra a primeira pergunta se não tiver nada no localStorage
        showNextQuestion('q0', currentQuestion);
    }
});

window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};