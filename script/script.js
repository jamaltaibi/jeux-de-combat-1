const guerriers = document.querySelectorAll('.Guerrier')
const mages = document.querySelectorAll('.Mage')
const pretres = document.querySelectorAll('.Pretre')
const archers = document.querySelectorAll('.Archer')

const newgame = document.getElementById(`newgame`);
const partie = document.getElementById('commencerlapartie')
const  arene = document.getElementById(`Arene`);
const zonedecombat = document.getElementById('zonedecombat')

let joueur1Choisi = false;
let joueur2Choisi = false;


for (const guerrier of guerriers){
guerrier.addEventListener('click', () => {
    if (guerrier.id == "1") {
        const G = document.querySelector('.perso')
        G.src = "../img/guerrier.png" 
        const Gf = document.querySelector('.persof1')
        Gf.src = "../img/guerrier.png"

        joueur1Choisi = true;
        activerBoutonCommencer(); 
    }
    if (guerrier.id == "2") {
        const G = document.querySelector('.perso2')
        G.src = "../img/guerrier.png" 
        const Gf = document.querySelector('.persof2')
        Gf.src = "../img/guerrier.png" 

        joueur2Choisi = true;
        activerBoutonCommencer();  
    } 
   
})}

for (const mage of mages){
mage.addEventListener('click', () => {
    if (mage.id == "1") {
        const M = document.querySelector('.perso')
        M.src = "../img/mage.png" 
        const Mf = document.querySelector('.persof1')
        Mf.src = "../img/mage.png" 
        joueur1Choisi = true;
        activerBoutonCommencer();  
    }
    

    if (mage.id == "2") {
        const M = document.querySelector('.perso2')
        M.src = "../img/mage.png" 
        const Mf = document.querySelector('.persof2')
        Mf.src = "../img/mage.png"  
        joueur2Choisi = true;
        activerBoutonCommencer();  
    }
    
})}

for (const pretre of pretres){
pretre.addEventListener('click', () => {
    if (pretre.id == "1") {
        const P = document.querySelector('.perso')
        P.src = "../img/pretre.png"
        const Pf = document.querySelector('.persof1')
        Pf.src = "../img/pretre.png" 
        joueur1Choisi = true;
        activerBoutonCommencer();      
    }
    if (pretre.id == "2") {
        const P = document.querySelector('.perso2')
        P.src = "../img/pretre.png"
        const Pf = document.querySelector('.persof2')
        Pf.src = "../img/pretre.png" 
        joueur2Choisi = true;
        activerBoutonCommencer(); 
    }
    
  
})}

for (const archer of archers){
archer.addEventListener('click', () => {
    if (archer.id == "1") {
        const A = document.querySelector('.perso')
        A.src = "../img/Archer.png" 
        const Af = document.querySelector('.persof1')
        Af.src = "../img/Archer.png" 
        joueur1Choisi = true;
        activerBoutonCommencer(); 
    }
    if (archer.id == "2") {
        const A = document.querySelector('.perso2')
        A.src= "../img/Archer.png"
        const Af = document.querySelector('.persof2')
        Af.src = "../img/Archer.png" 
        joueur2Choisi = true;
        activerBoutonCommencer(); 
    }
})
}


function activerBoutonCommencer() {
    if (joueur1Choisi && joueur2Choisi) {
      newgame.removeAttribute('disabled');
    }
  }

newgame.addEventListener('click', () => {
    partie.style.display = 'none';
    arene.style.display = "none";
    zonedecombat.style.display = "flex";
})



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
