import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js"; //Nesse caso, não se coloca {} porque está importando somente uma função em especifico, diferentemente da linha acima, que usa {} porque está expotando uma variável que fornecia varias funções

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    //Esse while é utilizado para remover todos os itens filhos de um item pai, no caso, remove todos os videos da tela para apresentar somente os videos que são o resultado da busca.
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))