import { useEffect, useState } from 'react';
import './index.css';

function App() {
    const [x, setX] = useState<Array<number>>([]);
    const [o, setO] = useState<Array<number>>([]);
    const [turnNumber, setTurnNumber] = useState(0)

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
        if (player.length >= 3) {
            return winCombos.map((winArray) =>
                player.includes(winArray[0])
                && player.includes(winArray[1])
                && player.includes(winArray[2])
            ).includes(true);
        };
    };

    useEffect(() => { // x player win check handler
        if (checkWin(x)) {
            alert("player x win");
        };
    }, [x]);

    useEffect(() => { // o player win check handler
        if (checkWin(o)) {
            alert("player o win");
        };
    }, [o]);

    const clickToSquare = (square: number) => {
        if (x.includes(square) || o.includes(square)) {
            return
        };
        if (turnNumber % 2 === 0) {
            x && setX([...x, square]);
            setTurnNumber(turnNumber + 1);
        } else {
            o && setO([...o, square]);
            setTurnNumber(turnNumber + 1);
        };
    };

    const resetGame = () => {
        setX([]);
        setO([]);
        setTurnNumber(0);
    };

    const cpuHardTurn = () => {

    };

    const getEmptySquares = () => {
        const moves: Array<boolean | null> = [];
        if (x.includes(0) || o.includes(0)) {
            moves.push(true);
        } else {
            moves.push(null);
        };
        if (x.includes(1) || o.includes(1)) {
            moves.push(true);
        } else {
            moves.push(null);
        };
        if (x.includes(2) || o.includes(2)) {
            moves.push(true);
        } else {
            moves.push(null);
        };
        if (x.includes(3) || o.includes(3)) {
            moves.push(true);
        } else {
            moves.push(null);
        };
        if (x.includes(4) || o.includes(4)) {
            moves.push(true);
        } else {
            moves.push(null);
        };
        if (x.includes(5) || o.includes(5)) {
            moves.push(true);
        } else {
            moves.push(null);
        };
        if (x.includes(6) || o.includes(6)) {
            moves.push(true);
        } else {
            moves.push(null);
        };
        if (x.includes(7) || o.includes(7)) {
            moves.push(true);
        } else {
            moves.push(null);
        };
        if (x.includes(8) || o.includes(8)) {
            moves.push(true);
        } else {
            moves.push(null);
        };
        return moves;
    };

    const minimax = (player: Array<number>) => {
        const availSpots = getEmptySquares();

        if (checkWin(player)) {
            return { score: -10 };
        } else if (checkWin(o)) {
            return { score: 10 };
        } else if (availSpots.length === 0) {
            return { score: 0 };
        };
    };

    return (
        <div className="grid">
            <button onClick={() => clickToSquare(0)} className="square">
                {x && x.includes(0) ? "✕" : null}{o && o.includes(0) ? "◯" : null}
            </button>
            <button onClick={() => clickToSquare(1)} className="square">
                {x && x.includes(1) ? "✕" : null}{o && o.includes(1) ? "◯" : null}
            </button>
            <button onClick={() => clickToSquare(2)} className="square">
                {x && x.includes(2) ? "✕" : null}{o && o.includes(2) ? "◯" : null}
            </button>
            <button onClick={() => clickToSquare(3)} className="square">
                {x && x.includes(3) ? "✕" : null}{o && o.includes(3) ? "◯" : null}
            </button>
            <button onClick={() => clickToSquare(4)} className="square">
                {x && x.includes(4) ? "✕" : null}{o && o.includes(4) ? "◯" : null}
            </button>
            <button onClick={() => clickToSquare(5)} className="square">
                {x && x.includes(5) ? "✕" : null}{o && o.includes(5) ? "◯" : null}
            </button>
            <button onClick={() => clickToSquare(6)} className="square">
                {x && x.includes(6) ? "✕" : null}{o && o.includes(6) ? "◯" : null}
            </button>
            <button onClick={() => clickToSquare(7)} className="square">
                {x && x.includes(7) ? "✕" : null}{o && o.includes(7) ? "◯" : null}
            </button>
            <button onClick={() => clickToSquare(8)} className="square">
                {x && x.includes(8) ? "✕" : null}{o && o.includes(8) ? "◯" : null}
            </button>
            <button onClick={() => resetGame()}>reset</button>
            <button onClick={() => cpuHardTurn()}>Hard cpu turn</button>
        </div>
    );
};

export default App;