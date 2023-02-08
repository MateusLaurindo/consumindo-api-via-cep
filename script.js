async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaConvertida = await consultaCep.json();


        if (consultaConvertida.erro) {
            throw Error('Cep inválido');
        }
        
        const bairro = document.getElementById('bairro');
        const complemento = document.getElementById('complemento');
        const ddd = document.getElementById('telefone');
        const estado = document.getElementById('estado');
        const cidade = document.getElementById('cidade');
        const endereco = document.getElementById('endereco');


        bairro.value = consultaConvertida.bairro;
        complemento.value = consultaConvertida.complemento;
        ddd.value = consultaConvertida.ddd;
        estado.value = consultaConvertida.uf;
        cidade.value = consultaConvertida.localidade;
        endereco.value = consultaConvertida.lobradouro;

        return  consultaConvertida;

    }
    catch (erro) {
        mensagemErro.innerHTML = `<p>cep nao existente</p>`
    }

    console.log(consultaConvertida);
}
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))




