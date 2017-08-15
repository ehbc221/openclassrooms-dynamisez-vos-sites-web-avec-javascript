// alert('Hello World!');



/*

// Message à l'écran
var j=0;
for (var i=0; i<10; i++) {
    j++;
}
alert(j);

*/



/*

// Boite de dialogue
var userName = prompt('Entrez votre nom :');
alert(userName);

*/



/*

// Concatenation    
var debut='Bonjour ', name, end=' !', result;
name = prompt('Quel est votre prénom ?');
result = debut + name + end;
alert(result);

*/



/*

// Convertir une chaîne de caractères en nombre
var first, second, result;
first = prompt('Entrez le premier nombre :');
second = prompt('Entrez le second nombre :');
result = parseInt(first) + parseInt(second);
alert(result);

*/



/*

// Convertir un nombre en chaîne de caractères
var text, nombre1=4, nombre2=2;
text = nombre1 + '' + nombre2;
alert(typeof(text));

*/



/*

// Confirm()
if (confirm('Pour accéder à ce site vous devez avoir 18 ans ou plus, cliquez sur "OK" si c\'est le cas.')) {
    alert('Vous allez être redirigé vers le site.');
}
else {
    alert("Désolé, vous n'avez pas accès à ce site.");
}

*/



/*

// If, else if, else
var floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (de -2 à 30) :"));
if (floor == 0) {
    alert('Vous vous trouvez déjà au rez-de-chaussée.');
}
else if (-2 <= floor && floor <= 30) {
    alert("Direction l'étage n°" + floor + ' !');
}
else {
    alert("L'étage spécifié n'existe pas.");
}

*/



/*

// Switch
var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));
switch (drawer) {
    case 1:
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
    break;
    case 2:
        alert('Contient du matériel informatique : des câbles, des composants, etc.');
    break;
    case 3:
        alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
    break;
    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
    break;
    default:
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
}

*/



/*

// Condition ternaire
var startMessage = 'Votre catégorie : ',
    endMessage,
    adult = confirm('Êtes-vous majeur ?');
endMessage = adult ? '18+' : '-18';
alert(startMessage + endMessage);

*/



/*

// Pré Incrémentation
var number = 0;
var output = ++number;
alert(number); // Affiche : « 1 »
alert(output); // Affiche : « 1 »

// Post Incrémentation
var number = 0;
var output = number++;
alert(number); // Affiche : « 1 »
alert(output); // Affiche : « 0 »
//Ici donc, l'opération number++ a retourné la valeur de number non incrémentée.

*/



/*

// Les Tableaux
var myArray_a = [42, 12, 6, 3];
var myArray_b = [42, 'Sébastien', 12, 'Laurence'];

// Récupérer et modifier des valeurs
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
alert(myArray[1]); // Affiche : « Laurence »
myArray[1] = 'Clarisse';
alert(myArray[1]); // Affiche : « Clarisse »

 */



/*

// Opérations sur les tableaux
var myArray = ['Sébastien', 'Laurence'];
myArray.push('Ludovic'); // Ajoute « Ludovic » à la fin du tableau
myArray.unshift('Pauline'); // Ajoute « Pauline » au début du tableau

var myArray2 = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
myArray2.shift(); // Retire « Sébastien » du début du tableau
myArray2.pop(); // Retire « Guillaume » de la fin du tableau
alert(myArray2); // Affiche « Laurence,Ludovic,Pauline »
 */


/*

// Chaînes de caractères et tableaux :

// Les chaînes de caractères possèdent une méthode split() qui permet de les découper en un tableau, en fonction d'un séparateur.
var cousinsString = 'Pauline Guillaume Clarisse',
    cousinsArray = cousinsString.split(' '); // split()va couper la chaîne de caractères à chaque fois qu'elle va rencontrer une espace
alert(cousinsString);
alert(cousinsArray);

// L'inverse desplit(), c'est-à-dire créer une chaîne de caractères depuis un tableau, se nomme join()
var cousinsString_2 = cousinsArray.join('-');
alert(cousinsString_2);

 */



/*

// Parcourir avec for
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
for (var i = 0, c = myArray.length; i < c; i++) {
    alert(myArray[i]);
}

*/



/*

// Les objets littéraux
var family = {
    self: 'Sébastien',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',
    cousin_2: 'Guillaume'
};

// Accès
family.sister; // Accès 1
family['sister']; // Accès 2
var id = 'sister';
alert(family[id]); // Accès 3 : Affiche : « Laurence »

// Ajouter des items
family['uncle'] = 'Didier'; // Ajout 1 : « Didier » est ajouté et est accessible via l'identifiant « uncle »
family.uncle = 'Didier'; // Ajout 2 : Même opération mais d'une autre manière

// Parcourir un objet avec for in
for (var id in family) { // On stocke l'identifiant dans « id » pour parcourir l'objet « family »
    alert(family[id]);
}

*/



/*

// Utilisation des objets littéraux
function getCoords() {
    // Script incomplet, juste pour l'exemple
    return {
        x: 12,
        y: 21
    };
}
var coords = getCoords();
alert(coords.x); // 12
alert(coords.y); // 21

*/



// L'élément window
// Lorsque vous déclarez une variable dans le contexte global de votre script, cette variable deviendra en vérité une propriété de l'objet window.
var text = 'Variable globale !';
(function() { // On utilise une IIFE pour « isoler » du code
    var text = 'Variable locale !';
    alert(text); // Forcément, la variable locale prend le dessus
    alert(window.text); // Mais il est toujours possible d'accéder à la variable globale grâce à l'objet « window »
})();

// Toute variable non déclarée (donc utilisée sans jamais écrire le mot-clé var) deviendra immédiatement une propriété de l'objet window,
// et ce, quel que soit l'endroit où vous utilisez cette variable !
(function() { // On utilise une IIFE pour « isoler » du code
    text = 'Variable accessible !'; // Cette variable n'a jamais été déclarée et pourtant on lui attribue une valeur
})();
alert(text); // Affiche : « Variable accessible ! »



















