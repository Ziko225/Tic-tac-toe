import { useEffect, useState } from 'react';
import { calculateWin } from './calculateWin';
import './index.css';
import { minimaxAlgorithm } from './minimax';

const TicTacToe = () => {
    const emptyBoard = Array(9).fill(null);
    const [board, setBoard] = useState<Array<string | null>>(emptyBoard);
    const [turnNumber, setTurnNumber] = useState(0);
    const isTurnNumberEven = turnNumber % 2 === 0;

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

    const aiTurn = () => {
        if (turnNumber === 0) {
            clickToSquare(+(Math.random() * 8).toFixed(0));
        } else {
            clickToSquare(minimaxAlgorithm(board, true, isTurnNumberEven ? "X" : "O").square);
        };
    };

    return (
        <div className="grid">
            {Array(9).fill("square").map((element, index) => {
                return <button key={index} onClick={() => clickToSquare(index)} className={element}><div className={board[index] || ""} /></button>
            })}
        </div>
    );
};

export default TicTacToe;