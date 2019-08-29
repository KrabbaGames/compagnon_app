
let modal = document.getElementById('modal');
let closeIcon = document.getElementById('closeIcon');

function form01() {
    let answer = document.getElementById('answer').value;

    if(answer == 'good') {
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


close.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}