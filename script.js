const modal = document.getElementById('modal');
const closeIcon = document.getElementById('closeIcon');

function blockWindow(count) {

    const blockWindow = document.getElementById('blockWindow');
    
    let style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(`.countdownPath path {animation: dash ${count}s linear forwards}`);

    modal.style.display = 'block';
        blockWindow.style.display = 'block';
        let x = setInterval(function () {
            document.getElementById('countdown').textContent = count;


            if (count == 0) {
                clearInterval(x);
                window.location.hash='';
                blockWindow.style.display = 'none';
            }
            count--;
        }, 1000);
        document.getElementById('countdown').textContent = '';
}

function lodgeQuestion() {
    let lodgeAnswer = document.getElementById('answer').value;
    lodgeAnswer = lodgeAnswer.toLowerCase();

    if (lodgeAnswer == 'union station' || lodgeAnswer == 'union station ') {
        window.location.href = '2_pre_union.html';
    } else {
        modal.style.display = 'block';
    }
}

function unionQuestion() {
    let unionAnswer = document.getElementById('unionAnswer').value;
    unionAnswer = unionAnswer.toLowerCase();

    if (unionAnswer == 'santa monica' || unionAnswer == 'santa monica ') {
        window.location.href = '4_pre_monica.html';
    } else {
        modal.style.display = 'block';
    }
}

function monicaQuestion(answer) {

    if (answer == 8) { // Changer le numéro pour changer la bonne voiture (entre 1 et 9)
        window.location.href = '6_pre_korea.html';
    } else {
        
        window.location.hash = 'pty';
        this.blockWindow(30); // Changer la valeur pour modifier le temps de pénalité (en secondes)

    }

}

function koreaQuestion() {
    let koreaAnswer = document.getElementById('koreaAnswer').value;
    koreaAnswer = koreaAnswer.toLowerCase();

    if (koreaAnswer == 'griffith observatory' || koreaAnswer == 'griffith observatory ') {
        window.location.href = '8_pre_griffith.html';
    } else {
        modal.style.display = 'block';
    }
}

function griffithQuestion() {
    let griffithAnswer = document.getElementById('griffithAnswer').value;
    griffithAnswer = griffithAnswer.toLowerCase();

    if (griffithAnswer == 'scenario' || griffithAnswer == 'scenario ') {
        window.location.href = '10_endgame.html';
    } else {
        modal.style.display = 'block';
    }
}


closeIcon.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function zoom() {

    if (screen.width >= 992) {
        let viewPortOffset = document.getElementById('metroMap').getBoundingClientRect();

        let vpX = (event.clientX / window.innerWidth) * 100;
        let vpY = ((event.clientY + window.scrollY) / window.innerHeight) * 100;

        let offsetX = (viewPortOffset.left / window.innerWidth) * 100;
        let offsetY = ((viewPortOffset.top + window.scrollY) / window.innerHeight) * 100;

        let posX = vpX - offsetX - 4;
        let posY = vpY - offsetY - 7;

        document.getElementById('zoom').style.display = 'block';
        document.getElementById('zoom').style.left = vpX + 2 + '%';
        document.getElementById('zoom').style.top = vpY + '%';

        document.getElementById('zoomedPicture').style.left = -(posX * 12.8) + '%';
        document.getElementById('zoomedPicture').style.top = -((posY * 5.6)) + '%';
    }

}

function clearZoom() {
    document.getElementById('zoom').style.display = 'none';
}

function pageLoad() {
        if(window.location.hash == '#pty') {
            alert('Nice try you smart one!');
            this.blockWindow(40); // Changer la valeur pour modifier le temps de pénalité (en secondes)
        } else {
            console.log('Welcome good sir/lady.');
            console.log('(if you removed the hash, congrats, you\'re a goddamn genius! Geniuses aren\'t meant to wait anyway...)');
        } 
}