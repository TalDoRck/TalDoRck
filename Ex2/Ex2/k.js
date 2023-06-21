let cafe, alunos, cafePerCapita

cafe = Number(prompt("Café: "))
alunos = Number(prompt("Alunos: "))

cafePerCapita = parseInt(cafe / alunos)

alert("Café Per Capita = " + cafePerCapita)
