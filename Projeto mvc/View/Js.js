/*Apenas para estudo(função de cadastro da tela de create)*/
function adicionar() {
    var nomefilme = document.getElementById("nomeFilme");
    var generofilme = document.getElementById("generoFilme");
    var duracaofilme = document.getElementById("duracaoFilme");


    var dados = JSON.parse(localStorage.getItem("dadosFilme"));

    if (dados == null) {
        localStorage.setItem("dadosFilme", "[]");
        dados = [];
    }
    var JsonReg = {
        nomefilme: nomefilme.value,
        generofilme: generofilme.value,
        duracaofilme: duracaofilme.value,
    }

    dados.push(JsonReg);

    localStorage.setItem("dadosFilme", JSON.stringify(dados));
}
/*Apenas para estudo(função de login da tela de login)*/
function login() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var divespaco = document.getElementById('espaco2');


    if (usuario == "a" && senha == "a") {
        location.href = "Home.html";
    } else {
        divespaco.innerText = "Senha ou Usuario incorreto";
    }
}
/*Apenas para estudo(função de cadastro da tela de cadastro)*/
function cadastro() {
    var cusuario = document.getElementById('cusuario').value;
    var csenha = document.getElementById('csenha').value;
    var cfsenha = document.getElementById('cfsenha').value;
    var divespaco = document.getElementById('espaco3');

        if (cfsenha == csenha && cfsenha != "" && cusuario != "" && csenha != "" && cfsenha != "") {
        location.href ="Login.html";
        csenha = senha;
        usuario = cusuario;

        } else {
        divespaco.innerText = "Por favor, verifique seus dados!";
        
    }

}