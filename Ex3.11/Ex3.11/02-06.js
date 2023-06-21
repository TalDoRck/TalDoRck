let ht, vh, pd, sb, td, sl

ht = Number(prompt("Você trabalhou quantas horas no mês?: "))
vh = Number(prompt("Você ganha quanto por hora trabalhada?: "))
pd = Number(prompt("Qual o percentual de desconto do seu salário?: "))
sb = ht * vh
td = ( pd/100 ) * sb
sl = sb - td

alert("Horas trabalhadas = " + ht + " horas" + "\n" + "Salário bruto = R$" + sb.toFixed(2) + "\n" + "Total descontos = R$" + td.toFixed(2) + "\n" + "Salário Líquido = R$" + sl.toFixed(2))
