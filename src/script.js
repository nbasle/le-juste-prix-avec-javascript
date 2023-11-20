// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";
// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
const verifier = (nombreSel) => {
    let instruction = document.createElement('div');

    if (nombreSel < nombreAleatoire){
        instruction.textContent += '#' + coups + ' (' + nombreSel + ')' + " C'est plus";
        instruction.className = 'instruction plus';

    } else if(nombreSel > nombreAleatoire) {
        instruction.textContent += '#' + coups + ' (' + nombreSel + ')' + " C'est moins";
        instruction.className = 'instruction moins';
    } else {
        instruction.textContent += '#' + coups + ' (' + nombreSel + ')' + " Félicitation c'est le juste prix";
        instruction.className = 'instruction fini';
        input.disabled = true;
    }

    document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', ()=>{
    if(isNaN(input.value)) {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
})

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(isNaN(input.value) || input.value === ''){
        formulaire.style.borderColor = 'red';
    } else {
        formulaire.style.borderColor = 'silver';
        coups++;
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi)
    }
})

