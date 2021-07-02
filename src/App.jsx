import React, { useState, useEffect } from 'react'
import AllPlayers from './pages/AllPlayers'
import SinglePlayer from './pages/SinglePlayer'
import Form from './pages/Form'
import player from './components/player'
import {Route, Switch, Link} from "react-router-dom"

function App(props) {
 
  ////////////////////////////
  // Style Objects
  ////////////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
    color: "red",
    display: "bold"
  }

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
    color: "red"
  }

  const div = {
    backgroundColor: "lightgrey"
  }

  ///////////////////////////
  // State & Other Variables
  ///////////////////////////

  //API URL
  const url = "https://thatch-roster-app.herokuapp.com/rosters/"

  // State to hold the list of posts
  const [players, setPlayers] = useState([])

  const nullPlayer = {
    player: "player",
    details: "details"
  }

  const [targetPlayer, setTargetPlayer] = useState(nullPlayer)

  ////////////////////////////
  // Functions
  ////////////////////////////
  const getPlayers = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setPlayers(data)
  }

  const addPlayers = async (newPlayer) => {
    const response = await fetch(url, {
      method:"post", 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(newPlayer)
    })
    getPlayers()
  }

  const getTargetPlayer = (player) => {
    setTargetPlayer(player)
    props.history.push("/edit")
  }

  const updatePlayer = async (player) => {
    const response = await fetch(url + player.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(player)
    })
    getPlayer()
  }

  const deletePlayer = async (player) => {
    const response = await fetch(url + player.id + "/", {
      method: "delete"
    })
    getPlayers()
  }

  ////////////////////////////
  // useEffects
  ////////////////////////////
  useEffect(() => {getPlayers()}, [])

  ////////////////////////////
  // returned JSX
  ////////////////////////////

  return (
    <div className="App" style={div}>
      <h1 style={h1}>Team Roster</h1>
      <Link to="/new"><button style={button}>Add New Player</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <AllPlayers players={players} {...rp}/>}
        />
        <Route
          path="/roster/:id"
          render={(rp) => <SinglePlayer players={players} edit={getTargetPlayer} deletePlayer={deletePlayer} {...rp}/>}
        />
        <Route 
          path="/new"
          render={(rp) => <Form
            initialPlayer = {nullPlayer}
            handleSubmit = {addPlayers}
            buttonLabel = "Add Player"
            {...rp}
          />}
        />
        <Route 
          path="/edit"
          render={(rp) => <Form
            initialPlayer={targetPlayer}
            handleSubmit={updatePlayer}
            buttonLabel="Update Player"
            {...rp}
          />}
        />
      </Switch>
    </div>
  )
}

export default App
