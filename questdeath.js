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
    // Se a página atual for a 'deathscreen', ao voltar, redireciona para a primeira questão
    if (window.location.pathname.includes("deathscreen.html")) {
        window.history.replaceState(null, "", "questions.html");
        localStorage.removeItem('currentQuestion');
        window.location.href = "questions.html";
    } else {
        // Obtém a última questão armazenada ou vai para a primeira questão
        const currentQuestion = localStorage.getItem('currentQuestion') || 'q1';
        // Mostra a pergunta correta
        showNextQuestion('q0', currentQuestion);
    }
});

// Impede que o usuário use o botão voltar do navegador para retornar à pergunta anterior
window.onpopstate = function () {
    window.location.href = "questions.html"; // Redireciona sempre para a primeira questão
};