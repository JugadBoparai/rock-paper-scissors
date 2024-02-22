let score = {
    vunnetResultat: 0,
    taptResultat: 0,
    uavgjortResultat: 0
};

displaySvar();

function spillButton(mittValg) {
    let tilfeldigMove = macValg(); 
    let resultat = kalkuleringResultat(mittValg, tilfeldigMove); 
    document.querySelector('.resultat').innerHTML = (`Du valgte ${mittValg} og Macen valgte ${tilfeldigMove}. ${resultat}`);
    updateResult(resultat);
    displaySvar();
    const mittValgString = emojiToString(mittValg);
    const tilfeldigMoveString = emojiToString(tilfeldigMove);
    console.log(`Mitt valg: ${mittValgString}.`);
    console.log(`Mac sitt valg: ${tilfeldigMoveString}.`);
}

function kalkuleringResultat(mittValg, tilfeldigMove) {
    if (mittValg === tilfeldigMove) {
        return 'Det ble likt, prøv igjen.';
    } else if ((mittValg === '✊🏾' && tilfeldigMove === '✌🏾') ||
                (mittValg === '✌🏾' && tilfeldigMove === '✋🏾') ||
                (mittValg === '✋🏾' && tilfeldigMove === '✊🏾')) {
        return 'Gratulerer du vant!';
    } else {
        return 'Du tapte, prøv igjen.';
    }
}

function macValg(){
    let tilfeldig = Math.random();
        if (tilfeldig >= 0 && tilfeldig <=(1/3)) {
            return '✊🏾';
        } else if (tilfeldig >= 1/3 && tilfeldig <=(2/3)) {
            return '✌🏾';
        }
        else if(tilfeldig >= 2/3 && tilfeldig <=(1)){
            return '✋🏾';
        } else {
            return null; 
        }

    }

function displaySvar(){
    document.querySelector('.score').innerHTML = (`Vunnet: ${score.vunnetResultat} | Tapt: ${score.taptResultat} | Uavgjort: ${score.uavgjortResultat}`)
}

function updateResult(resultat){
    if(resultat === 'Gratulerer du vant!'){
        score.vunnetResultat++
    }else if(resultat === 'Du tapte, prøv igjen.'){
        score.taptResultat++
    }else if(resultat === 'Det ble likt, prøv igjen.'){
        score.uavgjortResultat++
    }  
}

function resetButton(){ 
    score.vunnetResultat = 0;
    score.taptResultat = 0;
    score.uavgjortResultat = 0;
    displaySvar();
    document.querySelector('.resultat').innerHTML = 'Resultatet er nullstillt.' 
    // After 3 seconds, clear the message
    setTimeout(function() {
    document.querySelector('.resultat').innerHTML = '';
    }, 3000);
    console.log('Resultatet er nullstillt.')
}

function emojiToString(symbol) {
    switch (symbol) {
        case '✊🏾':
            return 'stein';
        case '✌🏾':
            return 'saks';
        case '✋🏾':
            return 'papir';
        default:
            return null;
    }
}

