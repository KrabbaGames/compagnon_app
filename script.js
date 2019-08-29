function form01() {
    let answer = document.getElementById('answer').value;

    if(answer == 'good') {
        window.location.href = 'page04.html';
    } else {
        window.location.href = 'page03.html';
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