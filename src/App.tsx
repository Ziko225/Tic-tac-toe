import { useEffect, useState } from 'react';
import './index.css';
import { horizontalCheck, verticalCheck, diagonalCheck, randomTurn } from './turnChecker';

function App() {
    const [x, setX] = useState<Array<number>>([]);
    const [o, setO] = useState<Array<number>>([]);
    const [nextPlayerO, setNextPlayerO] = useState(false);
    const [turnNumber, setTurnNumber] = useState(0)
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const isArrayHaveWinCombination = (array: Array<number>) => {
        if (array.length >= 3) {
            return winningCombinations.map((winArray) =>
                array.includes(winArray[0])
                && array.includes(winArray[1])
                && array.includes(winArray[2])
            ).includes(true)
        };
    };

    useEffect(() => { // x player win checker
        if (isArrayHaveWinCombination(x)) {
            alert("player x win");
        };
    }, [x]);

    useEffect(() => { // o player win checker
        if (isArrayHaveWinCombination(o)) {
            alert("player o win");
        };
    }, [o]);

    const clickToSquare = (square: number) => {
        if (x.includes(square) || o.includes(square)) {
            return
        };
        if (turnNumber === 0 || turnNumber === 2 || turnNumber === 4 || turnNumber === 6 || turnNumber === 8) {
            x && setX([...x, square]);
            setTurnNumber(turnNumber + 1)
        } else {
            o && setO([...o, square]);
            setTurnNumber(turnNumber + 1)
        };
    };

    const resetGame = () => {
        setX([]);
        setO([]);
        setNextPlayerO(false);
        setTurnNumber(0);
    };

    const cpuHardTurn = () => { // cpu lvl hard
        const randomNumber = (Math.random() * 10);
        // player X turn 0
        if (turnNumber === 0) {
            clickToSquare(4);
        };
        // player O turn 1
        if (turnNumber === 1 && !x.includes(4)) {
            clickToSquare(4);
        } else if (turnNumber === 1 && x.includes(4)) {
            randomNumber > 5 ? clickToSquare(0) : clickToSquare(2);
        };
        // player X turn 2
        if (turnNumber === 2 && !x.includes(4) && !o.includes(4)) {
            clickToSquare(4);
        } else if (turnNumber === 2 && !o.includes(0) && !o.includes(8)) {
            randomNumber >= 5 ? clickToSquare(0) : clickToSquare(8);
        } else if (turnNumber === 2 && !o.includes(2) && !o.includes(6)) {
            randomNumber >= 5 ? clickToSquare(2) : clickToSquare(6);
        };
        // player O turn 3
        if (turnNumber === 3 && horizontalCheck(x, o)! >= 0) {
            clickToSquare(horizontalCheck(x, o)!);
        } else if (turnNumber === 3 && verticalCheck(x, o)! >= 0) {
            clickToSquare(verticalCheck(x, o)!);
        } else if (turnNumber === 3 && !o.includes(4) && diagonalCheck(x, o)! >= 0) {
            clickToSquare(diagonalCheck(x, o)!);
        } else if (turnNumber === 3 && !x.includes(1)) {
            clickToSquare(1);
        } else if (turnNumber === 3) {
            clickToSquare(7);
        };
        // player X turn 4
        if (turnNumber === 4 && horizontalCheck(o, x)! >= 0) {
            clickToSquare(horizontalCheck(o, x)!);
        } else if (turnNumber === 4 && verticalCheck(o, x)! >= 0) {
            clickToSquare(verticalCheck(o, x)!);
        } else if (turnNumber === 4 && diagonalCheck(o, x)! >= 0) {
            clickToSquare(diagonalCheck(o, x)!);
        };
        // player O turn 5
        if (turnNumber === 5 && horizontalCheck(x, o)! >= 0) {
            clickToSquare(horizontalCheck(x, o)!);
        } else if (turnNumber === 5 && verticalCheck(x, o)! >= 0) {
            clickToSquare(verticalCheck(x, o)!);
        } else if (turnNumber === 5 && diagonalCheck(x, o)! >= 0) {
            clickToSquare(diagonalCheck(x, o)!);
        } else if (turnNumber === 5) {
            clickToSquare(randomTurn(x, o)!);
        };
        // player X turn 6
        if (turnNumber === 6 && horizontalCheck(o, x)! >= 0) {
            clickToSquare(horizontalCheck(o, x)!);
        } else if (turnNumber === 6 && verticalCheck(o, x)! >= 0) {
            clickToSquare(verticalCheck(o, x)!);
        } else if (turnNumber === 6 && diagonalCheck(o, x)! >= 0) {
            clickToSquare(diagonalCheck(o, x)!);
        } else if (turnNumber === 6) {
            clickToSquare(randomTurn(x, o)!);
        };
        // player O turn 7
        if (turnNumber === 7 && horizontalCheck(x, o)! >= 0) {
            clickToSquare(horizontalCheck(x, o)!);
        } else if (turnNumber === 7 && verticalCheck(x, o)! >= 0) {
            clickToSquare(verticalCheck(x, o)!);
        } else if (turnNumber === 7 && diagonalCheck(x, o)! >= 0) {
            clickToSquare(diagonalCheck(x, o)!);
        } else if (turnNumber === 7) {
            clickToSquare(randomTurn(x, o)!);
        };
        // player X turn 8
        if (turnNumber === 8 && horizontalCheck(o, x)! >= 0) {
            clickToSquare(horizontalCheck(o, x)!);
        } else if (turnNumber === 8 && verticalCheck(o, x)! >= 0) {
            clickToSquare(verticalCheck(o, x)!);
        } else if (turnNumber === 8 && diagonalCheck(x, x)! >= 0) {
            clickToSquare(diagonalCheck(o, x)!);
        } else if (turnNumber === 8) {
            clickToSquare(randomTurn(x, o)!);
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
