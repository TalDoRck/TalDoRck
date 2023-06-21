let salario, dias, salarioDiario

salario = prompt("Diga qual é o seu salário: ")
salario = Number(salario)

dias = prompt("Diga quantos dias você trabalha por mês: ")
dias = Number(dias)

salarioDiario = salario / dias

alert("Você recebe R$" + salarioDiario.toFixed(2) + " por dia")

alert("Para calcular novamente ")
