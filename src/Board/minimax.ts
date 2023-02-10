import { calculateWin } from "./calculateWin";

export const minimaxAlgorithm = (board: Array<string | null>, maximizing: boolean, player: string) => {
    const winner = calculateWin(board);
    const opponent = player === 'X' ? 'O' : 'X';

    if (winner === player) return { square: -1, score: 1 };
    if (winner === opponent) return { square: -1, score: -1 };
    if (board.join("").length === 9) return { square: -1, score: 0 };

    const best = { square: -1, score: maximizing ? -3 : 3 };
    for (let i = 0; i < board.length; i++) {
        if (board[i]) {
            continue;
        };
        board[i] = maximizing ? player : opponent;
        const score = minimaxAlgorithm(board, !maximizing, player).score;
        board[i] = null;

        if (maximizing) {
            if (score > best.score) {
                best.score = score;
                best.square = i;
            };
        } else {
            if (score < best.score) {
                best.score = score;
                best.square = i;
            };
        };
    };
    return best;
};