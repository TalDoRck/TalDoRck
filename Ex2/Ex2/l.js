let cafe, alunos, extra, cafePerCapita

cafe = Number(prompt("Café: "))
alunos = Number(prompt("Alunos: "))
extra = Number(prompt("Extra: "))

cafePerCapita = parseInt((cafe + extra) / alunos)

alert("Café Per Capita = " + cafePerCapita)
