// const J1 = document.querySelector(`.joueur1`)
// const J2 = document.querySelector(`joueur2`)
// const select = document.querySelector(`.personnage`)

// let persoG = {
//     "vie" : "100%",
//     "point d'attaque" : "25%",
//     "point de défense" : "10%",
//     "capacite speciale" : "30%",
// }
// let persoM = {
//     "vie" : "100%",
//     "point d'attaque" : "20%",
//     "point de défense" : "15%",
//     "capacite speciale" : "40%",
// }
// let persoP ={
//     "vie" : "100%",
//     "point d'attaque" : "10%",
//     "point de défense" : "10%",
//     "capacite speciale" : "60%",
// }
//  let persoA = {
//     "vie" : "100%",
//     "point d'attaque" : "15%",
//     "point de défense" : "5%",
//     "capacite speciale" : "40%",
// }

const imageG = new Image();
const imageM = new Image();
const imageP = new Image();
const imageA = new Image();

imageA.src= 'img/Archer.png'
imageP.src ='img/pretre.png'
imageG.src = 'img/guerrier.png';
imageM.src = 'img/mage.png';

//page d'accueil//
imageP.onload = function() {
    const haut = document.getElementById('perso');
    haut.appendChild(imageP);
};
imageM.onload = function() {
    const haut2 = document.getElementById('perso2');
    haut2.appendChild(imageM);
};


 //zone de combat//
imageG.onload = function() {
    const zonedecombat = document.getElementById('place1');
    zonedecombat.appendChild(imageG);
};
imageA.onload = function() {
    const zonedecombat = document.getElementById('place2');
    zonedecombat.appendChild(imageA);
};





// function afficherImage() {
//     imageG.onload = function(){
//     let imageG = document.getElementById('perso');
//     haut.appendChild(imageG);
//     }
//   }
// const selectG = document.querySelector('.Guerrier')
// selectG.addEventListener('click', afficherImage)

// imageG.onload = function () {
//     const haut = document.getElementById('perso');
//     haut.appendChild(imageG);
// };

// imageP.onload = function() {
//     const body = document.getElementById('lieudujeu');
//     const  = document.getElementById('commencerlapartie')
//     document.getElementsByid(commencerlapartie).style.display = none;
//     document.getElementsByid(Arene).style.display = none;
//     body.appendChild(imageP);
// };