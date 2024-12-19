var isItOver = false;
var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;
var diceDom = document.querySelector(".dice");

function newGame() {
    isItOver = false;
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.add("active");
    document.querySelector('.player-1-panel').classList.remove("active");
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById("name-0").textContent = 'player 1';
    document.getElementById("name-1").textContent = 'player 2';

    diceDom.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", newGame);

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (!isItOver) {
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        diceDom.style.display = "block";
        diceDom.src = "dice-" + diceNumber + ".png";

        if (diceNumber !== 1) {
            roundScore += diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    if (!isItOver) {
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 27) {
            isItOver = true;
            document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
            document.getElementById("name-" + activePlayer).textContent = 'WINNER!!!';
            diceDom.style.display = "none";
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;

    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");

    diceDom.style.display = "none";
}

newGame();
