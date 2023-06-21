let salario, moradia, agua, luz, internet, gasolina, netflix, telefone, outros, poupanca

salario = Number(prompt("Informe o seu salário: "))
moradia = Number(prompt("Informe o seu aluguel: "))
agua = Number(prompt("Informe quanto você paga de água: "))
luz = Number(prompt("Informe quanto você paga de luz: "))
internet = Number(prompt("Informe quanto você paga de internet: "))
gasolina = Number(prompt("Informe quanto você paga de gasolina: "))
netflix = Number(prompt("Informe quanto você paga na Netflix: "))
telefone = Number(prompt("Informe quanto você paga de telefone: "))
outros = Number(prompt("Informe outros gastos mensais: "))

poupanca = parseInt(salario - (moradia + agua + luz + internet + gasolina + netflix + telefone + outros))

alert("Sua poupança é de R$" + poupanca)
