// Modules : pour utiliser export/import avec Js
// afin de fragmenter un peu ses dossiers Js et avoir ici notre logique 

// Fichier pour avoir un tableau avec les jours de la semaine
// a partir du jour depuis lequel on regarde l'application

const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

let today = new Date(); // Tue Sep 01 2020 GMT etc...
let options = {weekday:'long'};
let jourActuel = today.toLocaleDateString('fr-FR', options); // dimanche
// console.log(jourActuelle, today);

jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1);
// 1ere lettre de dimanch Maj (D) + on rajoute le rest du mot (imanche)

let tabJourEnOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)));
// console.log(tabJourEnOrdre);
// on coupe une partie du tableau et retourner un new tab avec la partie coupée

export default tabJourEnOrdre;