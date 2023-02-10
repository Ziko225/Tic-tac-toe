import { useEffect, useState } from 'react';
import { calculateWin } from './calculateWin';
import './index.css';
import { minimaxAlgorithm } from './minimax';

const TicTacToe = () => {
    const emptyBoard = Array(9).fill(null);
    const [board, setBoard] = useState<Array<string | null>>(emptyBoard);
    const [turnNumber, setTurnNumber] = useState(0);
    const isTurnNumberEven = turnNumber % 2 === 0;
    const [xPlayerWinCounter, setXPlayerWinCounter] = useState(0);
    const [oPlayerWinCounter, setOPlayerWinCounter] = useState(0);

    useEffect(() => { // game checker
        if (calculateWin(board)) {
            calculateWin(board) === "X" ? setXPlayerWinCounter(xPlayerWinCounter + 1) : setOPlayerWinCounter(oPlayerWinCounter + 1);
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
        <>
            <div className="header">
                <h1 className="header__title">Tic-Tac-Toe</h1>
                <h2 className="header__subtitle">Score</h2>
                <dl className="header__content">
                    <dt className="content__titile content__titile--X" /><dd className="content__subtitle content__subtitle--x">{xPlayerWinCounter}</dd>
                    <dt className="content__titile content__titile--O" /><dd className="content__subtitle">{oPlayerWinCounter}</dd>
                </dl>
            </div>
            <div className="grid">
                {Array(9).fill("grid__square").map((element, index) => {
                    return <button key={index} onClick={() => clickToSquare(index)} className={element}><div className={board[index] || ""} /></button>
                })}
            </div>
        </>
    );
};

export default TicTacToe;