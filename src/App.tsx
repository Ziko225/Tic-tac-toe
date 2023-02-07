import { useState } from 'react';
import './index.css';

function App() {
    const emptyBoard = [null, null, null, null, null, null, null, null, null]
    const [board, setBoard] = useState<Array<string | null>>(emptyBoard);
    const [turnNumber, setTurnNumber] = useState(0);

    const checkWin = (player: Array<number>) => {
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

    };

    const clickToSquare = (square: number) => {
        if (turnNumber % 2 === 0) {
            setBoard(
                [
                    ...board.slice(0, square),
                    "X",
                    ...board.slice(square + 1),
                ]);
            setTurnNumber(turnNumber + 1);
        } else {
            setBoard(
                [
                    ...board.slice(0, square),
                    "O",
                    ...board.slice(square + 1),
                ]);
            setTurnNumber(turnNumber + 1);
        };
    };

    const resetGame = () => {
        setTurnNumber(0);
        setBoard(emptyBoard)
    };

    return (
        <div className="grid">
            <button onClick={() => clickToSquare(0)} className="square">
                {board[0]}
            </button>
            <button onClick={() => clickToSquare(1)} className="square">
                {board[1]}
            </button>
            <button onClick={() => clickToSquare(2)} className="square">
                {board[2]}
            </button>
            <button onClick={() => clickToSquare(3)} className="square">
                {board[3]}
            </button>
            <button onClick={() => clickToSquare(4)} className="square">
                {board[4]}
            </button>
            <button onClick={() => clickToSquare(5)} className="square">
                {board[5]}
            </button>
            <button onClick={() => clickToSquare(6)} className="square">
                {board[6]}
            </button>
            <button onClick={() => clickToSquare(7)} className="square">
                {board[7]}
            </button>
            <button onClick={() => clickToSquare(8)} className="square">
                {board[8]}
            </button>
            <button onClick={() => resetGame()}>reset</button>
        </div>
    );
};

export default App;