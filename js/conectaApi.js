async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            //"Content-type": é utilizado para especificar qual tipo de arquivo está sendo enviado ou recebido
            "Content-type": "application/json"
        },
        //body: é utilizado para especificar os dados que se quer cadastrar na requisição, é o "conteúdo da mensagem"
        //JSON.srtringfy(x) converte toda a informação x em string
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem 
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

//O conteúdo dentro desse export pode ser utilizado em outros arquivos.
export const conectaApi = {
    listaVideos,
    criaVideo
}