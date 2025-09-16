
const botao = document.getElementById('verMais');
const conteudo = document.getElementById('conteudoExtra');

botao.addEventListener('click', function(e){
    e.preventDefault(); 
    if(conteudo.style.display === "none"){
        conteudo.style.display = "block";
        botao.textContent = "Ver menos";
    } else {
        conteudo.style.display = "none";
        botao.textContent = "Ver mais sobre o projeto";
    }
});
