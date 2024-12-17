export default function GameBoard({onSelectedBox,board}){


//   const handleBoxClick = (rowIndex,colIndex) =>{
//     setGameBoard( (preGameBoard) => {
//         const updatedBox = [...preGameBoard.map((innerArray) => [...innerArray])];
//         updatedBox[rowIndex][colIndex] =activePlayer;
//         return updatedBox;
//     });
//     onSelectedBox(rowIndex,colIndex);

//   }

  return <ol id="game-board">
    {board.map((row,rowIndex) =>
   <li key={rowIndex}>
    <ol>
        {row.map((playerSymbol,colIndex) =>
        <li key={colIndex}>
            <button onClick={() => onSelectedBox(rowIndex,colIndex) } disabled={playerSymbol != null}>{playerSymbol}</button>
        </li>
        )}
    </ol>
   </li>
   )}

  </ol>
}