let prenom = prompt("Entrez votre prénom :");
if(isNaN(prenom)&& prenom != ''){
    alert("Bonjour " + prenom)
}
else{
    alert("Veuillez entrer votre prénom")
}
