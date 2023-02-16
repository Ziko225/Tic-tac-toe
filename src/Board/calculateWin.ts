export const calculateWin = (board: Array<string | null>) => {
    if (board.filter(e => e).length <= 4) {
        return null;
    };
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
    return winCombos.map((winCombo) => {
        if (board[winCombo[0]] && board[winCombo[0]] === board[winCombo[1]] && board[winCombo[0]] === board[winCombo[2]]) {
            return board[winCombo[0]]
        };
    }).join("") || null;
};