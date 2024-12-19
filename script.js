let currentRound = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let nextRound = [];
let round = 16;

let roundDisplay = document.getElementById('ro');

let c = 1;
let back = round / 2;

let candidate1;
let candidate2;

window.onload = function () {
    setCandidate();
}

function setCandidate() {
    if (currentRound.length < 2) {
        return;
    }

    candidate1 = currentRound[Math.floor(Math.random() * currentRound.length)];
    do {
        candidate2 = currentRound[Math.floor(Math.random() * currentRound.length)];
    } while (candidate1 == candidate2);

    document.getElementById('text1').innerText = candidate1;
    document.getElementById('text2').innerText = candidate2;
    (back == 1) ? roundDisplay.innerText = `결승`:roundDisplay.innerText = `${c} / ${back}`;
}

    

function select(n) {
    c++;
    if (n == 1) {
        nextRound.push(candidate1);
    } else if (n == 2) {
        nextRound.push(candidate2);
    }

    currentRound = currentRound.filter(value => value !== candidate1 && value !== candidate2);

    console.log(currentRound);
    console.log(nextRound);

    check();
}

function check() {
    if (currentRound.length == 0 && nextRound.length > 1) {
        changeRound();
    } else if (currentRound.length == 0 && nextRound.length == 1) {
            //goResult(nextRound[0]); jsp
            window.location.href=`result.html?winner=${nextRound[0]}`;
    } else {
        setCandidate();
    }
}

function changeRound() {
    currentRound = [...nextRound];
    nextRound.length = 0;

    c = 1;
    back = back / 2;

    if (currentRound.length >= 2) {
        setCandidate();
    }
}
/* jsp 에서 쓸 post 방식으로 가기
function goResult() {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'result.html';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'winner';
    input.value = nextRound[0];

    form.appendChild(input);
    document.body.appendChild(form);

    form.submit();
}*/