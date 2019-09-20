let modal = document.getElementById('modal');
let closeIcon = document.getElementById('closeIcon');

function lodgeQuestion() {
    let lodgeAnswer = document.getElementById('answer').value;
    lodgeAnswer = lodgeAnswer.toLowerCase();

    if (lodgeAnswer == 'union station' || lodgeAnswer == 'union station ') {
        window.location.href = '2_pre_union.html';
    } else {
        //window.location.href = 'page03.html';

        modal.style.display = 'block';

    }
}

function unionQuestion() {
    let unionAnswer = document.getElementById('unionAnswer').value;
    unionAnswer = unionAnswer.toLowerCase();
    console.log(unionAnswer);

    if (unionAnswer == 'venice beach' || unionAnswer == 'venice beach ') {
        window.location.href = '4_pre_venice.html';
    } else {
        //window.location.href = 'page06.html';

        modal.style.display = 'block';
    }
}

function veniceQuestion(answer) {

    console.log("Length : " + document.getElementById('path').getTotalLength());

    let blockWindow = document.getElementById('blockWindow');

    if (answer == 9) { // Changer le numéro pour changer la bonne voiture (entre 1 et 15)
        window.location.href = '6_pre_korea.html';
    } else {
        modal.style.display = 'block';
        blockWindow.style.display = 'block';
        let cpt = 30;
        let x = setInterval(function () {
            document.getElementById('countdown').textContent = cpt;


            if (cpt == 0) {
                clearInterval(x);
                blockWindow.style.display = 'none';
            }
            cpt--;
        }, 1000);
        document.getElementById('countdown').textContent = '';

    }

}

function koreaQuestion() {
    let koreaAnswer = document.getElementById('koreaAnswer').value;
    koreaAnswer = koreaAnswer.toLowerCase();

    if (koreaAnswer == 'griffith observatory' || koreaAnswer == 'griffith observatory ') {
        window.location.href = '8_pre_griffith.html';
    } else {
        //window.location.href = 'page06.html';

        modal.style.display = 'block';
    }
}

function griffithQuestion() {
    let griffithAnswer = document.getElementById('griffithAnswer').value;
    griffithAnswer = griffithAnswer.toLowerCase();

    if (griffithAnswer == 'scenario' || griffithAnswer == 'scenario ') {
        window.location.href = '10_endgame.html';
    } else {
        //window.location.href = 'page06.html';

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

        let posX = vpX - offsetX - 2;
        let posY = vpY - offsetY - 3;

        document.getElementById('zoom').style.display = 'block';
        document.getElementById('zoom').style.left = vpX + 2 + '%';
        document.getElementById('zoom').style.top = vpY + '%';

        document.getElementById('zoomedPicture').style.left = -(posX * 21.3) + '%';
        document.getElementById('zoomedPicture').style.top = -((posY * 9.3)) + '%';
    }

}

function clearZoom() {
    document.getElementById('zoom').style.display = 'none';
}