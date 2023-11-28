// lancer le combat//
const newgame = document.getElementById(`newgame`);
const partie = document.getElementById('commencerlapartie')
const arene = document.getElementById(`Arene`);
const zonedecombat = document.getElementById('zonedecombat')
const gameover = document.querySelector('.gameOver')

newgame.addEventListener('click', () => {
    partie.style.display = 'none';
    arene.style.display = "none";
    zonedecombat.style.display = "flex";
})
function activerBoutonCommencer() {
    if (joueur1Choisi && joueur2Choisi) {
      newgame.removeAttribute('disabled');
    }
}

//Arene//
const guerriers = document.querySelectorAll('.Guerrier')
const mages = document.querySelectorAll('.Mage')
const pretres = document.querySelectorAll('.Pretre')
const archers = document.querySelectorAll('.Archer')

let joueur1Choisi = false;
let joueur2Choisi = false;

let choixJ1 ;
let choixJ2 ;

let perso = { 
    'persoG' : { "vie" : "100","pointdattaque" : "25","pointdedéfense" : "10","capacitespeciale" : "15",},
    'persoM' : { "vie" : "100","pointdattaque" : "20","pointdedéfense" : "10","capacitespeciale" : "20",},
    'persoP' : { "vie" : "100","pointdattaque" : "15","pointdedéfense" : "10","capacitespeciale" : "30",},
    'persoA' : { "vie" : "100","pointdattaque" : "20","pointdedéfense" : "5","capacitespeciale" : "30",},
}
let perso2 = { 
    'persoG' : { "vie" : "100","pointdattaque" : "25","pointdedéfense" : "10","capacitespeciale" : "15",},
    'persoM': { "vie" : "100","pointdattaque" : "20","pointdedéfense" : "10","capacitespeciale" : "20",},
    'persoP': { "vie" : "100","pointdattaque" : "15","pointdedéfense" : "10","capacitespeciale" : "30",},
    'persoA': { "vie" : "100","pointdattaque" : "20","pointdedéfense" : "5","capacitespeciale" : "30",},
}

for (const guerrier of guerriers){
guerrier.addEventListener('click', () => {
    if (guerrier.id == "1") {
        const G = document.querySelector('.perso')
        G.src = "../img/guerrier.png" 
        const Gf = document.querySelector('.persof1')
        Gf.src = "../img/guerrier.png"

        joueur1Choisi = true;
        activerBoutonCommencer();

        choixJ1 = perso['persoG']

    }
    if (guerrier.id == "2") {
        const G = document.querySelector('.perso2')
        G.src = "../img/guerrier.png" 
        const Gf = document.querySelector('.persof2')
        Gf.src = "../img/guerrier.png" 
    
        joueur2Choisi = true;
        activerBoutonCommencer();

        choixJ2 = perso2['persoG']  
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

        choixJ1 = perso['persoM'] 
    }
    
    if (mage.id == "2") {
        const M = document.querySelector('.perso2')
        M.src = "../img/mage.png" 
        const Mf = document.querySelector('.persof2')
        Mf.src = "../img/mage.png" 

        joueur2Choisi = true;
        activerBoutonCommencer();

        choixJ2 = perso2['persoM'] 
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

        choixJ1 = perso['persoP']       
    }
    if (pretre.id == "2") {
        const P = document.querySelector('.perso2')
        P.src = "../img/pretre.png"
        const Pf = document.querySelector('.persof2')
        Pf.src = "../img/pretre.png" 

        joueur2Choisi = true;
        activerBoutonCommencer(); 

        choixJ2 = perso2['persoP'] 
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

        choixJ1 = perso['persoA'] 
    }
    if (archer.id == "2") {
        const A = document.querySelector('.perso2')
        A.src= "../img/Archer.png"
        const Af = document.querySelector('.persof2')
        Af.src = "../img/Archer.png" 

        joueur2Choisi = true;
        activerBoutonCommencer(); 

        choixJ2 = perso2['persoA'] 
    }
})
}
//Zone de combat//
const manette1 = document.querySelectorAll('.manette button')
const manette2 = document.querySelectorAll('.manette2 button')
const persof1 = document.querySelector('.persof1')
const persof2 = document.querySelector('.persof2')
const vie1 = document.querySelector('.vie1')
const vie2 = document.querySelector('.vie2')

for (const btn of manette1){
    btn.addEventListener('click', () => {
        if (btn.id == "attaquer1"){
            let degats = choixJ1.pointdattaque - choixJ2.pointdedéfense;
            choixJ2.vie -= degats
        }
        if (btn.id == "capacitespe1") {
            choixJ2.vie -= choixJ1.capacitespeciale
            manette1[1].disabled = true
        }

        if (choixJ2.vie <= 40) {
            manette2[1].disabled = false
        }

        if (choixJ2.vie <= 0) {
            vie2.style.width = '0%'
            zonedecombat.style.display = "none";
            gameover.style.display = "flex"
            document.querySelector('.winnerIs').innerHTML = "Victoire du Joueur 1"
        }
      console.log(choixJ2.vie);
       manette1[0].disabled = true
       manette2[0].disabled = false
       
       
       persof1.id = 'grise';
       persof2.id = '';
       vie2.style.width = choixJ2.vie + '%'
    })
}

for (const btn of manette2){
    btn.addEventListener('click', () => {
        if (btn.id == "attaquer2"){
            let degats = choixJ2.pointdattaque - choixJ1.pointdedéfense;
            choixJ1.vie -= degats
        }
        if (btn.id == "capacitespe2") {
            choixJ1.vie -= choixJ2.capacitespeciale
            manette2[1].disabled = true
        }

        if (choixJ1.vie <= 40) {
            manette1[1].disabled = false
        }

        if(choixJ1.vie <= 0){
            vie1.style.width = '0%'
            zonedecombat.style.display = "none";
            gameover.style.display = "flex"
            document.querySelector('.winnerIs').innerHTML = "Victoire du Joueur 2"
        }
        console.log(choixJ1.vie);
        manette1[0].disabled = false
        manette2[0].disabled = true
        
        persof2.id = 'grise';
        persof1.id = '';
        vie1.style.width = choixJ1.vie + '%'
    })
}
