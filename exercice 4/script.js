// let prenom = prompt("Entrez votre prénom :");
// let nom = prompt("Entrez votre prénom :");
// let ville = prompt("Entrez votre ville :");
// alert("Vous etes " + prenom + " " + nom + " de "+ ville)


// let lname = document.getElementById("nom");
// let fname = document.getElementById("prenom");
// let city = document.getElementById("ville");
// document.getElementById("boutton").addEventListener("click", function(){
//     alert("Nom : " + lname.value  + "\n" + "Prénom : " + fname.value + "\n"  + "Ville : " + city.value);
// })

function displayInput(){
    let lname = document.getElementById("lname").value;
    let fname = document.getElementById("fname").value;
    let city = document.getElementById("city").value;
    if(isNaN(lname && fname && city)){
        alert("Nom : "+ lname + "\n" + "Prénom :" + fname + "\n" + "Ville : " + city);
    } else{
        alert("veuillez remplir les champs ");
    }
   
}
//cibler les elements dans arbo HTML par attribues name
// function displayInput(){
//     let lname = document.form1.lname.value;
//     let fname = document.form1.fname.value;
//     let city = document.form1.city.value;
//     if(isNaN(lname && fname && city)){
//         alert("Nom : "+ lname + "\n" + "Prénom :" + fname + "\n" + "Ville : " + city);
//     } else{
//         alert("veuillez remplir les champs ");
//     }
   
// }