let cafe, coxinha, halls, doceDeLeite

cafe = Number(prompt("Informe o preço do café: "))
coxinha = Number(prompt("Informe o preço da coxinha: "))
halls = Number(prompt("Informe o preço do halls: "))
doceDeLeite = Number(prompt("Informe o preço do doce de leite: "))

conta = parseInt(cafe + coxinha + halls + doceDeLeite)

alert("Sua conta deu R$" + conta)
