/*document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('victor')
    button.addEventListener('click', function () {
        console.log('Click!');

    })
});
 */

/*
// On attend que le document soit pret
document.addEventListener('DOMContentLoaded', function () {
    // Cibler le texte
    let text = document.getElementById('text');
    // Cibler le bouton
    let button = document.getElementById('victor');
    // On detecte le clic sur le bouton
    button.addEventListener('click', function () {
        // On cache le texte
        if (text.style.display === 'none') {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    });
});
 */


document.addEventListener('DOMContentLoaded', function(){

//Cibler la liste avec son ID
    let list = document.getElementById('list');


//Cibler tous les <li>
    let lis = document.getElementsByTagName('li');

//Cibler les éléments avec la classe .item
    let items = document.getElementsByClassName('item');

//Ajouter la classe .test à l'élément .solo
    let solo = document.getElementsByClassName('solo');

//Lire un data-* sur un élément
    let element = document.getElementById('quatrieme');
    console.log(element.dataset.coin);
});
