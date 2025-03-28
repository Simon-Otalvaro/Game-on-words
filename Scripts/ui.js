export function updateUI(elementId, value) {
    document.getElementById(elementId).innerText = value;
}

export function showGameScreen(letter, player) {
    document.getElementById("playerSelection").classList.add("hidden");
    document.getElementById("gameSection").classList.remove("hidden");
    updateUI("randomLetter", letter);
    updateUI("playerTurn", player);
}

export function showResults(players, words) {
    document.getElementById("gameSection").classList.add("hidden");
    document.getElementById("resultSection").classList.remove("hidden");

    let winner = players.reduce((max, player) => (player.score > max.score ? player : max), players[0]);

    updateUI("winnerMessage", `🏆 ${winner.name} ganó con ${winner.score} puntos!`);
    
    const wordList = document.getElementById("finalWordList");
    wordList.innerHTML = "";
    words.forEach(word => {
        let li = document.createElement("li");
        li.textContent = word;
        wordList.appendChild(li);
    });
}
