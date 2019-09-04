
let modal = document.getElementById('modal');
let closeIcon = document.getElementById('closeIcon');

function lodgeQuestion() {
    let lodgeAnswer = document.getElementById('answer').value;
    lodgeAnswer = lodgeAnswer.toLowerCase();

    if(lodgeAnswer == 'union station') {
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

    if(unionAnswer == 'venice beach') {
        window.location.href = 'page_pre_venice.html';
    } else {
        //window.location.href = 'page06.html';

        modal.style.display = 'block';
    }
}

function veniceQuestion() {
    let veniceAnswer = document.getElementById('veniceAnswer').value;
    let blockWindow = document.getElementById('blockWindow');

    if(veniceAnswer == 'car3') {
        window.location.href = '6_pre_korea.html';
    } else {
        modal.style.display = 'block';
        blockWindow.style.display = 'block';
        let cpt = 10;
        let x = setInterval(function() {
            document.getElementById('countdown').textContent = cpt;
            

            if(cpt == 0) {
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

    if(koreaAnswer == 'griffith observatory') {
        window.location.href = '8_pre_griffith.html';
    } else {
        //window.location.href = 'page06.html';

        modal.style.display = 'block';
    }
}

function griffithQuestion() {
    let griffithAnswer = document.getElementById('griffithAnswer').value;
    griffithAnswer = griffithAnswer.toLowerCase();

    if(griffithAnswer == 'scenario') {
        window.location.href = '10_engame.html';
    } else {
        //window.location.href = 'page06.html';

        modal.style.display = 'block';
    }
}


closeIcon.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}