import { useEffect, useState } from 'react';
import { calculateWin } from './calculateWin';
import './index.css';
import { minimaxAlgorithm } from './minimax';

const TicTacToe = () => {
    const emptyBoard = [null, null, null, null, null, null, null, null, null];
    const [board, setBoard] = useState<Array<string | null>>(emptyBoard);
    const [turnNumber, setTurnNumber] = useState(0);
    const isTurnNumberEven = turnNumber % 2 === 0;
    const [xPlayerWinCounter, setXPlayerWinCounter] = useState(0);
    const [oPlayerWinCounter, setOPlayerWinCounter] = useState(0);
    const [gameWithAI, setGameWithAI] = useState(true);
    const [gameTurn, setGameTurn] = useState(0);
    const isGameTurnNumberEven = gameTurn % 2 === 0;

    useEffect(() => { // game checker
        if (isGameTurnNumberEven ? !isTurnNumberEven : isTurnNumberEven && gameWithAI) {
            aiTurn();
        };
        if (calculateWin(board)) {
            calculateWin(board) === "X" ? setXPlayerWinCounter(xPlayerWinCounter + 1) : setOPlayerWinCounter(oPlayerWinCounter + 1);
            setGameTurn(gameTurn + 1);
            resetGame();
        } else if (turnNumber === 9) {
            resetGame();
            setGameTurn(gameTurn + 1);
        };
    }, [turnNumber, board]);

    const clickToSquare = (square: number) => {
        if (board[square] || board.filter(e => e).length === 9 || calculateWin(board)) {
            return;
        } else if (isTurnNumberEven) {
            setBoard([...board.slice(0, square), isGameTurnNumberEven ? "X" : "O", ...board.slice(square + 1),]);
            setTurnNumber(turnNumber + 1);
        } else {
            setBoard([...board.slice(0, square), isGameTurnNumberEven ? "O" : "X", ...board.slice(square + 1),]);
            setTurnNumber(turnNumber + 1);
        };
    };

    const resetGame = () => {
        const interval = setInterval(() => {
            setTurnNumber(0);
            setBoard(emptyBoard);
            clearInterval(interval);
        }, 1000)
    };

    const aiTurn = () => {
        if (turnNumber === 0) {
            clickToSquare(+(Math.random() * 8).toFixed(0));
        } else {
            clickToSquare(minimaxAlgorithm(board, true, "O").square);
        };
    };

    return (
        <>
            <div className="header">
                <h1 className="header__title">Tic-Tac-Toe</h1>
                <div>
                    With AI <input checked={gameWithAI} name='aiToggle' type={"radio"} onChange={() => setGameWithAI(true)} />
                    <input name='aiToggle' checked={!gameWithAI} type={"radio"} onChange={() => setGameWithAI(false)} /> With player
                </div>
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