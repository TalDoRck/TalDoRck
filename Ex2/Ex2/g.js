let critico, dano, bonus

dano = Number(prompt("Quanto dano você deu?: "))
bonus = Number(prompt("Qual é o bônus de dano?: "))

critico = parseInt((dano * 1.5) + bonus)

alert("Seu dano depois do crítico é: " + critico)
