import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [x, setX] = useState<Array<number>>([]);
  const [o, setO] = useState<Array<number>>([]);
  const [nextPlayerMove, setNextPlayerMove] = useState(false);
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
    }
  };

  useEffect(() => { // x player win cheker
    if (isArrayHaveWinCombination(x)) {
      alert("player x win");
    };
  }, [x]);

  useEffect(() => { // o player win cheker
    if (isArrayHaveWinCombination(o)) {
      alert("player o win");
    };
  }, [o]);

  const clickToSquare = (id: number) => {
    if (x.includes(id) || o.includes(id)) {
      return
    };

    if (nextPlayerMove) {
      x && setX([...x, id]);
      setNextPlayerMove(false);
    } else {
      o && setO([...o, id]);
      setNextPlayerMove(true);
    };
  };

  const resetGame = () => {
    setX([]);
    setO([]);
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
    </div>
  );
};

export default App;
