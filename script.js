document.getElementById('backbutton').addEventListener('click', function() {
    window.location.href = "index.html";
});
       
    const intervalo = 5;

       
    function showPopup() {
        const popup = document.getElementById('helpPopup');
        popup.style.display = 'block';
    }

    setInterval(showPopup, intervalo);

    document.getElementById('helpPopup').addEventListener('click', function() {
        document.getElementById('helpScreen').style.display = 'block';
    });


document.getElementById('closeHelp').addEventListener('click', function() {
    document.getElementById('helpScreen').style.display = 'none';
    document.getElementById('helpPopup').style.display = 'none';
});

window.addEventListener("load", function () {
    // Esconde o spinner após o carregamento completo da página
    document.getElementById("spinner").style.display = "none";
    // Mostra o conteúdo da página
    document.getElementById("content").style.display = "block";
    // Remove a classe 'loading' do body
    document.body.classList.remove("loading");
});

const botao = document.getElementById('botao');
const conteudo = document.getElementById('conteudo');

function trocarConteudo(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerHTML = '<p>O conteúdo foi alterado!</p>';
    }
}

document.getElementById('botaocerto1').addEventListener('click', function() {
    trocarConteudo('q1');
});

document.getElementById('botaocerto2').addEventListener('click', function() {
    trocarConteudo('q2');
});
