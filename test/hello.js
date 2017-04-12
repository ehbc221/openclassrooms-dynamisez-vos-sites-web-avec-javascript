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
