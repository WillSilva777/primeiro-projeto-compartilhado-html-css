function logar (){

    var login = document.getElementById("user").value;
    var senha = document.getElementById("senha").value;


    if (login=="admin"&&senha=="admin") {
        alert("Login concluído com sucesso");
        location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos");
    }

}
