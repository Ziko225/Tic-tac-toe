import { useEffect, useState } from 'react';
import './index.css';
import { horizontalCheck, verticalCheck } from './turnChecker';

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
        setTurnNumber(turnNumber + 1)
        if (!nextPlayerO) {
            x && setX([...x, square]);
            setNextPlayerO(true);
        } else {
            o && setO([...o, square]);
            setNextPlayerO(false);
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
        if (turnNumber === 0) { // player X
            clickToSquare(4);
        };

        if (turnNumber === 1 && !x.includes(4)) { // player O
            clickToSquare(4);
        } else if (turnNumber === 1 && x.includes(4)) {
            randomNumber > 5 ? clickToSquare(0) : clickToSquare(2);
        };

        if (turnNumber === 2 && !x.includes(4) && !o.includes(4)) { // player X
            clickToSquare(4);
        } else if (turnNumber === 2 && !o.includes(0) && !o.includes(8)) {
            randomNumber >= 5 ? clickToSquare(0) : clickToSquare(8);
        } else if (turnNumber === 2 && !o.includes(2) && !o.includes(6)) {
            randomNumber >= 5 ? clickToSquare(2) : clickToSquare(6);
        };

        if (turnNumber === 3 && horizontalCheck(x)! >= 0) {
            clickToSquare(horizontalCheck(x)!)
            console.log(horizontalCheck(x))
        } else if (turnNumber === 3 && !x[1]) {
            clickToSquare(1);
        } else if (turnNumber === 3) {
            clickToSquare(7);
        };

        if (turnNumber === 4 && horizontalCheck(o)! >= 0) {
            clickToSquare(horizontalCheck(o)!)
            clickToSquare(verticalCheck(o)!)
        };

        if (turnNumber === 5 && horizontalCheck(x)! >= 0) {
            clickToSquare(horizontalCheck(x)!)
            clickToSquare(verticalCheck(o)!)
        };

        if (turnNumber === 6 && horizontalCheck(o)! >= 0) {
            clickToSquare(horizontalCheck(o)!)
            clickToSquare(verticalCheck(o)!)
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
            <button onClick={() => cpuHardTurn()}>cpu turn</button>
        </div>
    );
};

export default App;
