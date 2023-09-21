import React, { useState } from "react"
import './App.css'
import { AddPlayerForm } from './components/AddPlayerForm'
import { PlayersTable } from "./components/PlayersTable"
import { Hero } from "./components/Hero"
import { EditPlayerForm } from "./components/EditPlayerForm"

function App() {

  const dataPlayers = [
    {
      "id": 1,
      "name": "Stephen Curry",
      "team": "Golden State Warriors",
      "number": 30,
      "position": "Point Guard"
    },
    {
      "id": 2,
      "name": "Kevin Durant",
      "team": "Phoenix Suns",
      "number": 7,
      "position": "Small Forward"
    },
    {
      "id": 3,
      "name": "Giannis Antetokounmpo",
      "team": "Milwaukee Bucks",
      "number": 34,
      "position": "Power Forward"
    },
    {
      "id": 4,
      "name": "Joel Embiid",
      "team": "Philadelphia 76ers",
      "number": 24,
      "position": "Center"
    },
    {
      "id": 5,
      "name": "LeBron James",
      "team": "Los Angeles Lakers",
      "number": 6,
      "position": "Small Forward"
    },
    {
      "id": 6,
      "name": "James Harden",
      "team": "Philadelphia 76ers",
      "number": 1,
      "position": "Shooting Guard"
    }
  ]

  const [players, setPlayers] = useState(dataPlayers)

  // Delete player by ID
  const deletePlayer = (id) => {
    console.log("Deleted player with ID: " + id)
    setPlayers(players.filter((p) => p.id !== id))
  }

  // Add player
  const addPlayer = (newPlayer) => {
    newPlayer.id = players.length + 1
    setPlayers([...players, newPlayer])
    console.log("New played added with ID: " + newPlayer.id)
  }

  // Edit player
  const defaultEditForm = {
    id: null,
    name: "",
    team: "",
    position: "",
    number: ""
  }
  const [editView, setEditView] = useState(false) // Show or not form
  const [playerEdit, setPlayerEdit] = useState(defaultEditForm)

  const editPlayerRow = (player) => {
    setEditView(true)
    setPlayerEdit({
      id: player.id,
      name: player.name,
      team: player.team,
      position: player.position,
      number: player.number
    })
  }

  const updatePlayer = (newData) => {
    setEditView(false)
    setPlayers(players.map((player) => (player.id === newData.id ? newData : player)))
    console.log("Player updated with ID: " + newData.id)
  }

  return (
    <div className="text-gray-700 pb-32">
      <Hero></Hero>
      <div className="px-2 mx-auto container py-5 lg:px-32 md:px-12 px-5 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-8">
          <div className="lg:col-span-1 md:col-span-1 col-span-1">
            <div className="flex gap-2 items-center mb-2">
              <h2 className="text-2xl font-bold">Add player</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
              </svg>
            </div>
            <hr className="my-2" />
            <AddPlayerForm addPlayer={addPlayer}></AddPlayerForm>
          </div>
          <div className="lg:col-span-3 md:col-span-1 col-span-1">
            <div className="flex gap-2 items-center">
              <h2 className="text-2xl font-bold">Player list</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
            <hr className="my-2" />
            <PlayersTable players={players} deletePlayer={deletePlayer} editPlayerRow={editPlayerRow}></PlayersTable>
          </div>
        </div>
      </div>
      {editView ? (
        <EditPlayerForm updatePlayer={updatePlayer} editView={editView} playerEdit={playerEdit}></EditPlayerForm>
      ) : (
        <hr></hr>
      )}
    </div>
  )
}

export default App
