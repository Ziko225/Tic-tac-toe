export const calculateWin = (board: Array<string | null>, winnerCombos?: boolean) => {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    if (board.filter(e => e).length <= 4) {
        return null;
    };

    if (winnerCombos) {
        return winCombos.map((winCombo, index) => {
            if (board[winCombo[0]] && board[winCombo[0]] === board[winCombo[1]] && board[winCombo[0]] === board[winCombo[2]]) {
                return index + 1 || null
            };
        }).join("")

    } else return winCombos.map((winCombo) => {
        if (board[winCombo[0]] && board[winCombo[0]] === board[winCombo[1]] && board[winCombo[0]] === board[winCombo[2]]) {
            return board[winCombo[0]]
        };
    }).join("");
};