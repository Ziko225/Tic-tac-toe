import { useEffect, useState } from 'react';
import './index.css';

function App() {
    const emptyBoard = Array(9).fill(null);
    const [board, setBoard] = useState<Array<string | null>>(emptyBoard);
    const [turnNumber, setTurnNumber] = useState(0);

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
            resetGame()
        } else if (turnNumber === 9) {
            alert("draw");
            resetGame();
        }
    }, [board, turnNumber]);

    const clickToSquare = (square: number) => {
        if (board[square]) {
            return false
        };
        if (turnNumber % 2 === 0) {
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

    return (
        <div className="grid">
            {Array(9).fill("square").map((element, index) => {
                return <button key={index} onClick={() => clickToSquare(index)} className={element}>{board[index]}</button>
            })}
            <button onClick={() => resetGame()}>reset</button>
        </div>
    );
};

export default App;