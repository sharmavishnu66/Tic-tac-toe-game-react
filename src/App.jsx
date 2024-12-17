import { useState } from "react";
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WinningCombination.Js";
import GameOver from "./components/GameOver";

const  initalValues = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

const driveActivePlayer = (gameTurns)=>{
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }

  return currentPlayer;

}



function App() {

  const players = [
    {
      name:"player1",
      symbol: "X"
    },
    {
      name:"player2",
      symbol: "O"
    }
  ];

 

  const [gameTurns, setGameTurns] = useState([]);
  const [updatedPlayer, setUpdatedPlayer] = useState({X:'Player 1',O:'Player2'});
  const activePlayer = driveActivePlayer(gameTurns);


  let gameBoard = [...initalValues.map((array) => [...array])];
  for(const turn of gameTurns){
    const {square,player}= turn;
    const {row,col} =square;
    gameBoard[row][col]=player;
  }

  let winner;
 
  const onSelectedBox = (rowIndex,colIndex)=>{
    // setActivePlayer ((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurn) => 
    {      
   const currentPlayer = driveActivePlayer(prevTurn);
      const updateTurns = [
        {square : {row: rowIndex,col:colIndex},player: currentPlayer},
        ...prevTurn
      ];
      return updateTurns;
    }
  )
  }

  const reStartGame =()=>{
    setGameTurns([]);
  }

  const handlePlayerName =(symbol,name)=> {
   
    setUpdatedPlayer(prePlayer =>{
      return {
        ...prePlayer,
        [symbol]:name
      }
    });
  }
  for(let combination of WINNING_COMBINATIONS)
    {
      const firstcombintion = gameBoard[combination[0].row][combination[0].column];
      const secondcombintion = gameBoard[combination[1].row][combination[1].column];
      const thirdcombintion = gameBoard[combination[2].row][combination[2].column];
      if(firstcombintion && firstcombintion == secondcombintion && firstcombintion == thirdcombintion)
      {
        winner =updatedPlayer[firstcombintion] 
        
      }
    }
  
    const hasDraw = gameTurns.length == 9 && !winner;
  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        {
          players.map((item) =>
            <Player players={item} activePlayer={activePlayer} handlePlayerName={handlePlayerName} />
        )
        }
</ol>
{(winner || hasDraw) && <GameOver winner={winner} reStartGame={reStartGame} />}
<GameBoard onSelectedBox={onSelectedBox} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
