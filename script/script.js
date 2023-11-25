const guerriers = document.querySelectorAll('.Guerrier')
const mages = document.querySelectorAll('.Mage')
const pretres = document.querySelectorAll('.Pretre')
const archers = document.querySelectorAll('.Archer')

const persof1 = document.querySelector('.persof1')
const persof2 = document.querySelector('.persof2')

const newgame = document.getElementById(`newgame`);
const partie = document.getElementById('commencerlapartie')
const arene = document.getElementById(`Arene`);
const zonedecombat = document.getElementById('zonedecombat')
const manette1 = document.querySelectorAll('.manette button')
const manette2 = document.querySelectorAll('.manette2 button')
const vie = document.querySelectorAll(".vie, .vie2")

let persoG = {
    "vie" : "100",
    "pointdattaque" : "30",
    "pointdedéfense" : "10",
    "capacitespeciale" : "30",
}
let persoG2 = {
    "vie" : "100",
    "pointdattaque" : "30",
    "pointdedéfense" : "10",
    "capacitespeciale" : "30",
}

let persoM = {
    "vie" : "100%",
    "pointdattaque" : "20%",
    "pointdedéfense" : "10%",
    "capacitespeciale" : "40%",
}
let persoP ={
    "vie" : "100%",
    "pointdattaque" : "15%",
    "pointdedéfense" : "10%",
    "capacitespeciale" : "60%",
}
 let persoA = {
    "vie" : "100%",
    "point d'attaque" : "15%",
    "point de défense" : "5%",
    "capacite speciale" : "40%",
}

let joueur1Choisi = false;
let joueur2Choisi = false;
let joueurActif = 1;

//Arene//

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


//Zone de combat//

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

//perso Guerrier//
for (const btn of manette1){
    btn.addEventListener('click', () => {
        if (btn.id == "attaquer1"){

            let degats = persoG2.pointdattaque - persoG2.pointdedéfense;
            degats = Math.max(0, degats);
            persoG2.vie -= degats;

            if (persoG.vie <= 20) {
                persoG.capacitespeciale;
                }
            persoG2.vie;
            console.log(persoG.vie,"attaque 1");
        }
        if (btn.id == "defense1") {

            (persoG.pointdedéfense + persoG.vie == persoG.pointdedéfense);
           
            console.log(persoG.pointdedéfense),"def1";
        }
        if (btn.id == "capacitespe1") {
            console.log("capacitespe1");
        }

       manette1[0].disabled = true
       manette1[1].disabled = true
       manette1[2].disabled = true
       manette2[0].disabled = false
       manette2[1].disabled = false
       manette2[2].disabled = false

       persof1.id = 'grise';
       persof2.id = '';
    })
}

//perso Guerrier
for (const btn of manette2){
    btn.addEventListener('click', () => {
        if (btn.id == "attaquer2"){

            let degats = persoG.pointdattaque - persoG.pointdedéfense;
            degats = Math.max(0, degats);
            persoG.vie -= degats;

            if (persoG2.vie <= 20) {
                persoG2.capacitespeciale; }
                
            persoG2.vie;
            console.log(persoG2.vie, "attaque2");
        }
        if (btn.id == "defense2") {
            (persoG2.pointdedéfense + persoG2.vie == persoG2.pointdedéfense);
            console.log(persoG2.pointdedéfense),"def2";
        }
        if (btn.id == "capacitespe2") {
            console.log("capspe2")
        }
        manette1[0].disabled = false
        manette1[1].disabled = false
        manette1[2].disabled = false
        manette2[0].disabled = true
        manette2[1].disabled = true
        manette2[2].disabled = true
        persof2.id = 'grise';
        persof1.id = '';
    })
}





// // Fonction pour activer la capacité spéciale d'un joueur
// function activerCapaciteSpeciale(joueur) {
//     // Implémentez ici la logique de la capacité spéciale
//     console.log("Capacité spéciale activée pour le joueur !");
// }

// document.getElementById('attaquer').addEventListener('click', attaquer);
// document.getElementById('defense').addEventListener('click', defendre);
// document.getElementById('capacitespe').addEventListener('click', capaciteSpeciale);

// const pointsDeVieInitiaux = { joueur1: 100, joueur2: 100,};

// const pointsDeVieActuels = { joueur1: pointsDeVieInitiaux.joueur1, 
//     joueur2: pointsDeVieInitiaux.joueur2 };


// function mettreAJourPointsDeVie() {
//     document.querySelector('.vie1').style.width = `${pointsDeVieActuels.joueur1}%`;
//     document.querySelector('.vie2').style.width = `${pointsDeVieActuels.joueur2}%`;
//     if (pointsDeVieInitiaux = O ) {
//         "Partie fini "
//     }
//   // Ajoutez ici des conditions pour gérer la fin du jeu si les points de vie atteignent zéro
// }

// function attaquer() {
//     const degats = Math.floor(Math.random() * 20) + 10; 
//     // Exemple de dégâts aléatoires entre 10 et 30
//     // Appliquer les dégâts à l'adversaire
//     pointsDeVieActuels.joueur2 -= degats;
//     // Mettre à jour l'affichage des points de vie
//     mettreAJourPointsDeVie();
//   }

// function defendre() {
//     const reductionDegats = 0.5; // Exemple de réduction des dégâts de 50%
//     // Réduire les dégâts subis lors de la prochaine attaque
//     // Ajoutez ici la logique pour la défense
//   }

// function capaciteSpeciale() {
//     const degatsCapacite = 30; // Exemple de dégâts de capacité spéciale
//     // Appliquer les dégâts de capacité spéciale à l'adversaire
//     pointsDeVieActuels.joueur2 -= degatsCapacite;
//     // Mettre à jour l'affichage des points de vie
//     mettreAJourPointsDeVie();
//   }

