/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
/*

*/

// Initialise le contact
var Contact = {
    init: function(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    },
    
    afficherContact: function(){
        contact.forEach(function(Contact){
            console.log(Contact.afficher());
        }
    )},
    
    afficher: function(){
        var affichage = this.nom.toUpperCase() + this.prenom.toLowerCase();
        return affichage;
    },

// Permet de fermer la fenêtre en cours
    fermerFenetre: function(){
        window.open('','_parent','');
        window.close();
    }
};

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelson", "Mélodie");

console.log("Bienvenue dans le gestionnaire de contact ");
console.log(" 1 : Lister les contacts ");
console.log(" 2 : Ajouter un contact ");
console.log(" 0 : Quitter ");

var choix = prompt("Quel est votre choix ?");
var contact = [];
contact.push(contact1);
contact.push(contact2);


switch(choix){
    case "1":
    Contact.afficherContact();
    break;
    
    case "0":
    Contact.fermerFenetre();
    break;
}











