let nameHeroi = "Batman"
let nivel = 8.000;
let nivelHeroi = ""


if(nivel <= 1.000 ){
    nivelHeroi="Ferro"
}else if(nivel >= 1.001 && nivel <= 2.000){
  nivelHeroi = "Bronze"
}else if(nivel >= 2.001 && nivel <= 5.000){
nivelHeroi="Prata"
}
else if(nivel >= 5.001 && nivel <= 7.000){
    nivelHeroi ="Ouro"
}
else if(nivel >= 7.001 && nivel <= 8.000){
    nivelHeroi ="Platina"
}
else if(nivel >= 8.001 && nivel <= 9.000){
    nivelHeroi="Ascenndente"
}
else if(nivel >= 9.001 && nivel <=10.000){
    nivelHeroi="Imortal"
}
else(nivel >= 10.001)
    nivelHeroi="Radiante"

console.log(`O Héroi de nome ${nameHeroi} está no nível de ${nivelHeroi}`);