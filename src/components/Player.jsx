import { useState } from "react"

export default function Player(props){
    const [editStatus,setEditStatus] = useState(false);
    const [playerName,setPlayerName] = useState(props.players.name);

    const handleEdit =() =>{
        if(editStatus)
        {
            props.handlePlayerName(props.players.symbol,playerName)
        }
        setEditStatus(editing => !editing);
        
        
    }
     return (
       
          <li className={`${props.players.symbol === props.activePlayer ? "active" : ""}`}>
          <span className={`player-info`}>

          { !editStatus ? <span className="player-name"> {playerName} </span>: <input type="text" name="player" value={playerName} onChange={(event) => setPlayerName(event.target.value)} />}
          <span className="player-symbol">{props.players.symbol}</span>
          </span>
          <button onClick={handleEdit}>{editStatus ? 'Save' : 'Edit'}</button>
            </li>
           
        
     )
}