export default function GameOver({winner,reStartGame}){
    return <div id="game-over">
        <p>Game over</p>
        {winner && 
        <p>{winner} won !</p>
}
{!winner && 
        <p>it's draw !</p>
}
        <p><button onClick={reStartGame}>Rematch</button></p>
    </div>
}