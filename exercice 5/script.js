
// document.getElementById("boutton").addEventListener("click", function(){
//     let numberOne = document.getElementById("number1");
//     let numberTwo = document.getElementById("number2");
//     let resultat = numberTwo.value * numberOne.value ;
//     alert("le resultat est : " + resultat);
// })


// let numberOne = prompt("Entrez le premier nombre");
// let numberTwo = prompt("Entrez le deuxieùe nombre");
// let resultat = numberTwo*numberOne;
// alert("le resultat est :" + resultat);
function calculMultiplication(){
    let numberOne = parseFloat(document.getElementById("number1").value);
    let numberTwo = parseFloat(document.getElementById("number2").value);
     resultat = numberTwo * numberOne;
     if(numberOne && numberTwo ){
        alert("le resultat est : " + resultat);
     }else{
        alert("veuillez saisir un nombre valide");
     }
   
}