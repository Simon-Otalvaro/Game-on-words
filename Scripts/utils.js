export function selectPlayers(numPlayers) {
    alert(`Jugadores seleccionados: ${numPlayers}`);
}

export function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
}

export function startTimer() {
    let timeLeft = 10;
    const timerDisplay = document.getElementById("timer");

    const countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            callback();
        }
    }, 1000);
}
