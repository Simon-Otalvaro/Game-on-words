export let players = [];
export let currentPlayerIndex = 0;

export function resetPlayers(numPlayers) {
    players = [];
    currentPlayerIndex = 0;

    for (let i = 1; i <= numPlayers; i++) {
        players.push({ name: `Jugador ${i}`, score: 0 });
    }
}

export function nextPlayer() {
    currentPlayerIndex++;
}
