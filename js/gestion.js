/* 
Activité : gestion des contacts
*/

// Initialisation du contact
var Contact = {
    init: function(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    },
    
// Méthode de l' objet contact qui permet d'afficher les contacts de la liste contact
    
    afficherContact: function(){
        var affichage = "Nom: " + this.nom.toUpperCase() + "\t"+ " Prénom: " + this.prenom;
        return affichage;
    },
    
// Méthode qui permet d'ajouter un contact à la liste
    
    ajouterContact: function(nom, prenom){
        newcontact.init(nom, prenom);
        contact.push(newcontact);
    }
};


// Instanciation des objets

var contact1 = Object.create(Contact);
contact1.init("Lewis", "Caroll");

var contact2 = Object.create(Contact);
contact2.init("Manson", "Marilyn");

var newcontact = Object.create(Contact);

console.log("Bienvenue dans le gestionnaire de contact ");
console.log(" 1 : Lister les contacts ");
console.log(" 2 : Ajouter un contact ");
console.log(" 0 : Quitter ");


var contact = [];
contact.push(contact1);
contact.push(contact2);


// Switch qui permet de faire les choix d'option avec une boucle do while 

do{
    var choix = prompt("Quel est votre choix ?");
    switch(choix){
    case "0":
        console.log("Au revoir");
        break;
        
    case "1":
        contact.forEach(function(Contact){
            console.log(Contact.afficherContact());
        });
        break;
    
    case "2":
        var newnom = prompt("Veuillez saisir le nom de votre contact");
        var newprenom = prompt("Veuillez saisir le prénom de votre contact");
        newcontact.ajouterContact();
        console.log("Votre contact " + newnom.toUpperCase() + " " + newprenom + " a bien été ajouté." );
    }
}while:(choix !== 0);












