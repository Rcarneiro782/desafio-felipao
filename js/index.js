let nameHeroi = "Batman"
let nivel = 8.000;


if(nivel <= 1.000 ){
    console.log("Ferro")
}else if(nivel >= 1.001 && nivel <= 2.000){
  console.log("Bronze")
}else if(nivel >= 2.001 && nivel <= 5.000){
console.log("Prata")
}
else if(nivel >= 5.001 && nivel <= 7.000){
    console.log("Ouro")
}
else if(nivel >= 7.001 && nivel <= 8.000){
    console.log("Platina")
}
else if(nivel >= 8.001 && nivel <= 9.000){
    console.log("Ascenndente")
}
else if(nivel >= 9.001 && nivel <=10.000){
    console.log("Imortal")
}
else(nivel >= 10.001)
    console.log("Radiante")

console.log(`O Héroi de nome ${nameHeroi} está no nível de ${nivel}`);