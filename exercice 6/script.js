function comparaisonFunction(){
    let age = document.getElementById("age").value;
    if (typeof age === "number");{
        if (age < 18 && age>0){
            alert("vous êtes mineur");
        }
        else if(age >= 18 && age<=120){
            alert("Vous êtes majeur");
        }
        else if(age>120){
            alert("Je vous souhaite une bonne santé");
        }
        else{
            alert("Veuillez entrer un age valide");
        }
    }
}

    







// switch(age){
//     case typeof age != "number":
//         alert("Ce n'est pas un nombre, veuillez entrer des chiffres");
//         break;
//         case < 18:
//             alert("Vous êtes mineur");
//             break;
//         case age >= 18:
//                 alert("Vous êtes majeur");
//                 break;
// }

// let conso = "potatos"
// switch(conso){
//     case "carotte":
//         console.log("this is a vegee");
//         break;
//     case "appel":
//         console.log("this a fruit");
//         break;

// }
