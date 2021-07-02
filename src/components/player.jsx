import React from "react"
import {Link} from "react-router-dom"
const Player = ({player}) => {
    /////////////////////
    // Style Objects
    /////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid red",
        margin: "10px auto",
        width: "80%"
    }

    const h1 = {
        color: "navy"
    }

    const h2 = {
        color: "navy"
    }

    return <div style={div}>
        <Link to={`/roster/${player.id}`}>
            <h1 style={h1}>{player.player}</h1>
        </Link>
        <h2 style={h2}>{player.details}</h2>
    </div>
}
export default Player;