
let modal = document.getElementById('modal');
let closeIcon = document.getElementById('closeIcon');

function form01() {
    let lodgeAnswer = document.getElementById('answer').value;
    lodgeAnswer = lodgeAnswer.toLowerCase();

    if(lodgeAnswer == 'union station') {
        window.location.href = 'page04.html';
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
        window.location.href = 'page07.html';
    } else {
        window.location.href = 'page06.html';
    }
}

function veniceQuestion() {
    let veniceAnswer = document.getElementById('veniceAnswer').value;

    if(veniceAnswer == 'car3') {
        window.location.href = 'page10.html';
    } else {
        modal.style.display = 'block';
    }
}


closeIcon.onclick = function() {
    modal.style.display = 'none';
    console.log('HEEEEEEEEY !!!');
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}