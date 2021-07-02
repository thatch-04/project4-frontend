import React from "react"
import Player from "../components/player"

const AllPlayers = (props) => {
    return props.players.map((player) => {
        return <Player player={player} key={player.id}/>
    })
}

export default AllPlayers;