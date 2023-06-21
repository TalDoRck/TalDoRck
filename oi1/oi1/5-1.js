let senha_sistema, senha_usuario

senha_sistema = Number(1234)

senha_usuario = Number(prompt("Digite sua senha:"))

if(senha_sistema == senha_usuario){
    alert("Acesso permitido! 😀")
}
else{
    alert("Acesso negado! 😡")
}
