let xpDoHeroi = 10001
let nomeDoHeroi = "VictorDev"
let nomeDoRank = ""
//Constante para repetir a mensagem de rank
const msgAutoRank = "Seu rank atual é: "
//Constante para personalizar a mensagem final
const personalizacao = "============================"

switch (true) {
    case xpDoHeroi <= 1000:
    nomeDoRank = "Ferro"
    console.log(msgAutoRank + nomeDoRank)
    break

    case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
    nomeDoRank = "Bronze"
    console.log(msgAutoRank + nomeDoRank)
    break

    case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
    nomeDoRank = "Prata"
    console.log(msgAutoRank + nomeDoRank)
    break

    case xpDoHeroi >= 5001 && xpDoHeroi <= 6000:
    nomeDoRank = "Ouro"
    console.log(msgAutoRank + nomeDoRank)
    break

    case xpDoHeroi >= 6001 && xpDoHeroi <= 7000:
    nomeDoRank = "Platina"
    console.log(msgAutoRank + nomeDoRank)
    break

    case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
    nomeDoRank = "Ascendente"
    console.log(msgAutoRank + nomeDoRank)
    break

    case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
    nomeDoRank = "Imortal"
    console.log(msgAutoRank + nomeDoRank)
    break

    case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
    nomeDoRank = "Radiante"
    console.log(msgAutoRank + nomeDoRank)
    break

    case xpDoHeroi >= 10001:
    nomeDoRank = "TOP Global"
    console.log(msgAutoRank + nomeDoRank + "\nVocê está entre os melhores")
    break
}

console.log(personalizacao + 
"\nNome do Héroi: " + nomeDoHeroi  + 
"\nNivel de XP: " + xpDoHeroi + 
"\nRank: " + nomeDoRank + 
"\n" + personalizacao)
