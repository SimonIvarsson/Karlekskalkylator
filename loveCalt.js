function loveCalc(){
    let firstName = prompt("Vad heter du?");
    let secondName = prompt("Vad heter din kärlek??");
    let randomProcentage = Math.floor(Math.random() * 100);

    if (randomProcentage == 0){
        alert("Ni har en matchning på " + randomProcentage + "%. Ni är absolut inte menade för varandra!")
    }
    else if (randomProcentage >= 1 && randomProcentage <= 10){
        alert("Ni har en matchning på " + randomProcentage + "%. Ni är inte så menade för varandra!")
    }
    else if (randomProcentage >= 11 && randomProcentage <= 30){
         alert("Ni har en matchning på " + randomProcentage + "%. Ni kanske inte är menade för varandra!")
    }
    else if (randomProcentage >= 31 && randomProcentage <= 50){
        alert("Ni har en matchning på " + randomProcentage + "%. Det finns faktiskt lite kärlek mellan er!")
    }
    else if (randomProcentage >= 51 && randomProcentage <= 70){
        alert("Ni har en matchning på " + randomProcentage + "%. Du borde ta chansen! Ni har kemi")
    }
    else if (randomProcentage >= 71 && randomProcentage <= 99){
        alert("Ni har en matchning på " + randomProcentage + "%. Det måste bli ni!")
    }
    else if (randomProcentage == 100){
        alert("Ni har en matchning på " + randomProcentage + "%. Ni är perfekta för varann!")
    }
}
//loveCalc()
