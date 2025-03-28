import { selectPlayers, getRandomLetter, startTimer } from "./utils.js";
import { updateUI, showGameScreen, showResults } from "./ui.js";
import { players, currentPlayerIndex, nextPlayer, resetPlayers } from "./player.js";

let selectedPlayers = 2;
let letter = "";
let timer = 20;
let words = [];

export function initializeGame() {
    document.querySelectorAll(".player-btn").forEach(button => {
        button.addEventListener("click", function () {
            selectedPlayers = parseInt(this.dataset.players);
            selectPlayers(selectedPlayers);
        });
    });

    document.getElementById("startGameBtn").addEventListener("click", startGame);
    document.getElementById("addWordBtn").addEventListener("click", addWord);
    document.getElementById("wordInput").addEventListener("keydown", (e) => {
        if (e.key === "Enter") addWord();
    });
    document.getElementById("restartGameBtn").addEventListener("click", resetGame);
}

function startGame() {
    resetPlayers(selectedPlayers);
    letter = getRandomLetter();
    words = [];
    showGameScreen(letter, players[0].name);
    startTimer(() => {
        nextTurn();
    });
}

function addWord() {
    const input = document.getElementById("wordInput");
    const word = input.value.trim().toUpperCase();

    if (!word.startsWith(letter) || words.includes(word) || word === "") {
        alert("Palabra inválida o repetida");
        return;
    }

    words.push(word);
    players[currentPlayerIndex].score += 10;
    input.value = "";
}

function nextTurn() {
    if (currentPlayerIndex < players.length - 1) {
        nextPlayer();
        showGameScreen(letter, players[currentPlayerIndex].name);
        startTimer(() => nextTurn());
    } else {
        showResults(players, words);
    }
}

function resetGame() {
    document.getElementById("resultSection").classList.add("hidden");
    document.getElementById("playerSelection").classList.remove("hidden");
}
