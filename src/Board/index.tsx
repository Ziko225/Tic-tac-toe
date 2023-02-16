import { useEffect, useState } from 'react';
import { calculateWin } from './calculateWin';
import { minimaxAlgorithm } from './minimax';
import "./css/header.css";
import "./css/grid.css";

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

    useEffect(() => { // game check handler
        if (isGameTurnNumberEven ? !isTurnNumberEven && gameWithAI : isTurnNumberEven && gameWithAI) {
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

    useEffect(() => { // game change handler
        setTurnNumber(0);
        setBoard(emptyBoard);
        setXPlayerWinCounter(0);
        setOPlayerWinCounter(0);
    }, [gameWithAI]);

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
        }, 1500)
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
                <dl className="header__content">
                    <dt className="content__titile content__titile--X" /><dd className="content__subtitle">{xPlayerWinCounter}</dd>
                    <span className='dash'>-</span>
                    <dd className="content__subtitle">{oPlayerWinCounter}</dd><dt className="content__titile content__titile--O" />
                </dl>
            </div>
            <div className="grid">
                <button onClick={() => clickToSquare(0)} className={"grid__squares"}><div className={`square ${board[0]}` || "square"} /></button>
                <button onClick={() => clickToSquare(1)} className={"grid__squares"}><div className={`square ${board[1]}` || "square"} /></button>
                <button onClick={() => clickToSquare(2)} className={"grid__squares"}><div className={`square ${board[2]}` || "square"} /></button>
                <button onClick={() => clickToSquare(3)} className={"grid__squares"}><div className={`square ${board[3]}` || "square"} /></button>
                <button onClick={() => clickToSquare(4)} className={"grid__squares"}><div className={`square ${board[4]}` || "square"} /></button>
                <button onClick={() => clickToSquare(5)} className={"grid__squares"}><div className={`square ${board[5]}` || "square"} /></button>
                <button onClick={() => clickToSquare(6)} className={"grid__squares"}><div className={`square ${board[6]}` || "square"} /></button>
                <button onClick={() => clickToSquare(7)} className={"grid__squares"}><div className={`square ${board[7]}` || "square"} /></button>
                <button onClick={() => clickToSquare(8)} className={"grid__squares"}><div className={`square ${board[8]}` || "square"} /></button>
            </div>
            <div className="footer">
                With AI <input checked={gameWithAI} name='aiToggle' type={"radio"} onChange={() => setGameWithAI(true)} />
                <input name='aiToggle' checked={!gameWithAI} type={"radio"} onChange={() => setGameWithAI(false)} /> With player
            </div>
        </>
    );
};

export default TicTacToe;