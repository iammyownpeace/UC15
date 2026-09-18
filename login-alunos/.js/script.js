function validar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if (usuario === "tony.stark" && senha === "arc.reactor") {
        alert("Login bem-sucedido!");
        window.location.href = "https://www.marvel.com/;";
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}