let vitorias, empates, pontos

vitorias = Number(prompt("Quantas vitórias o time teve?: "))
empates = Number(prompt("Quantos empates o time teve?: "))

pontos = parseInt(vitorias * 3) + empates

alert("Esse time tem " + pontos + " pontos")
