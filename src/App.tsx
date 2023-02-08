import { useEffect, useState } from 'react';
import './index.css';

function App() {
    const emptyBoard = Array(9).fill(null);
    const [board, setBoard] = useState<Array<string | null>>(emptyBoard);
    const [turnNumber, setTurnNumber] = useState(0);
    const isTurnNumberEven = turnNumber % 2 === 0;

    const calculateWin = (board: Array<string | null>) => {
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
            if (board[winCombo[0]]
                && board[winCombo[0]] === board[winCombo[1]]
                && board[winCombo[0]] === board[winCombo[2]]) {
                return board[winCombo[0]]
            }
        }).join("") || null
    };

    useEffect(() => { // game checker
        if (calculateWin(board)) {
            alert(`player ${calculateWin(board)} win`);
            resetGame();
        } else if (turnNumber === 9) {
            alert("draw");
            resetGame();
        };
    }, [board, turnNumber]);

    const clickToSquare = (square: number) => {
        if (board[square]) {
            return false;
        };
        if (isTurnNumberEven) {
            setBoard([...board.slice(0, square), "X", ...board.slice(square + 1),]);
            setTurnNumber(turnNumber + 1);
        } else {
            setBoard([...board.slice(0, square), "O", ...board.slice(square + 1),]);
            setTurnNumber(turnNumber + 1);
        };
    };

    const resetGame = () => {
        setTurnNumber(0);
        setBoard(emptyBoard);
    };

    const minimaxAlgorithm = (board: Array<string | null>, maximizing: boolean, player: string) => {
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

    const aiTurn = () => {
        clickToSquare(minimaxAlgorithm(board, true, isTurnNumberEven ? "X" : "O").square);
    };

    return (
        <div className="grid">
            {Array(9).fill("square").map((element, index) => {
                return <button key={index} onClick={() => clickToSquare(index)} className={element}>{board[index]}</button>
            })}
            <button onClick={() => resetGame()}>reset</button>
            <button onClick={() => aiTurn()}>AI</button>
        </div>
    );
};

export default App;