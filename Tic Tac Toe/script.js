let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner(){
        if (
    (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) || // Row 1
    (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) || // Row 2
    (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) || // Row 3
    (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) || // Col 1
    (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) || // Col 2
    (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) || // Col 3
    (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) || // Diagonal \
    (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])    // Diagonal /
) {
    document.write(`winner is ${currentPlayer}`)
}

}

function handleClick(el) {
    const id = Number(el.id);
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "0" : "X";
}
 