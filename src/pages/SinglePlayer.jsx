import React from "react"
import { Link } from "react-router-dom"

const SinglePlayer = ({players, match, edit, deletePlayer, history}) => {
    const id = parseInt(match.params.id)
    const player = players.find((player) => {
        return player.id === id
    })

    //////////////////////////////
    // Styles
    //////////////////////////////
    const div = {
        textAlign: "center",
        border: "5px solid navy",
        width: "80%",
        margin: "30px auto"
    }

    const h1 = {
        color: "red",
        display: "bold"
    }

    const h2 = {
        color: "red"
    }

    const button = {
        backgroundColor: "navy",
        margin: "auto",
        color: "red"
      }

    return <div style={div}>
        <h1 style={h1}>{player.player}</h1>
        <h2 style={h2}>{player.details}</h2>
        <button onClick={(event) => edit(player)} style={button}>edit</button>
        <button onClick={(event) => {
            deletePlayer(player) 
            history.push("/")
        }} style={button}>delete</button>
        <Link to="/">
            <button style={button}>Go Back</button>
        </Link>
    </div>
}

export default SinglePlayer;