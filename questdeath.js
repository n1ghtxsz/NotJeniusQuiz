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

window.addEventListener('load', function() {
    // Se o usuário está na página de perguntas
    if (window.location.pathname.includes("questions.html")) {
        const previousQuestion = localStorage.getItem('currentQuestion');
        if (!previousQuestion || performance.navigation.type === performance.navigation.TYPE_BACK_FORWARD) {
            // Se não houver questão salva ou o usuário voltou usando o botão "voltar"
            localStorage.removeItem('currentQuestion'); // Reseta o progresso
            showNextQuestion('q1'); // Volta para a questão 1
        } else {
            // Carrega a última pergunta armazenada
            showNextQuestion('q0', previousQuestion);
        }
    }
});

// Captura o evento de voltar do navegador
window.onpopstate = function () {
    if (window.location.pathname.includes("questions.html")) {
        localStorage.removeItem('currentQuestion'); // Limpa o progresso
        window.location.reload(); // Recarrega a página para reiniciar as questões
    }
};

// Empurra um novo estado de histórico para a pilha
window.history.pushState(null, null, window.location.href);