/* 
Activité : gestion des contacts
*/

// Initialisation du contact dans l'objet Contact
var Contact = {
    init: function(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    },
    
// Méthode de l' objet contact qui permet d'afficher les contacts de la liste contact
    
    afficherContact: function(){
        contact.forEach(function(Contact){
            console.log(Contact.afficher())
        });
        
    },
    
    afficher: function(){
        var affichage = "Prénom: " + this.nom.toUpperCase() + " " + "Nom: " + this.prenom;
        return affichage;
    },
    
// Méthode qui permet d'ajouter un contact à la liste
    
    ajouterContact: function(nom, prenom){
        var newcontact = Object.create(Contact);
        var newnom = prompt("Veuillez saisir le nom de votre contact");
        var newprenom = prompt("Veuillez saisir le prénom de votre contact");
        newcontact.init(newnom, newprenom);
        contact.push(newcontact);
        console.log("Votre contact " + newnom.toUpperCase() + " " + newprenom + " a bien été ajouté." );
    },
};


// Instanciation des objets

var contact1 = Object.create(Contact);
contact1.init("Lewis", "Caroll");

var contact2 = Object.create(Contact);
contact2.init("Manson", "Marilyn");



// Affichage de la console 

console.log("Bienvenue dans le gestionnaire de contact ");
console.log(" 1 : Lister les contacts ");
console.log(" 2 : Ajouter un contact ");
console.log(" 0 : Quitter ");

// Création du tableau qui va enregistrer la liste des contacts
var contact = [];
contact.push(contact1);
contact.push(contact2);


// Switch qui permet de faire les choix d'option avec une boucle do while jusqu'a ce que l'on sélectionne le 0

do{
    var choix = prompt("Quel est votre choix ?");
    switch(choix){
    case "0":
        console.log("Au revoir");
        break;
        
    case "1":
        Contact.afficherContact();
        break;
    
    case "2":
        Contact.ajouterContact();
        break;
    }
}while(choix != 0);












