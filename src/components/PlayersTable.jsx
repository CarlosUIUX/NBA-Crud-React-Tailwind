import React from 'react'
import { PlayerRow } from './PlayerRow'

export const PlayersTable = (props) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen h-full overflow-x-scroll">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto ">
              <thead>
                <tr className="bg-gray-200 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Team</th>
                  <th className="py-3 px-6 text-left">Position</th>
                  <th className="py-3 px-6 text-center">Number</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                    props.players.length > 0 ? (
                        props.players.map((player, index) =>
                            <PlayerRow key={index} player={player} deletePlayer={props.deletePlayer} editPlayerRow={props.editPlayerRow}></PlayerRow>)
                    )
                        :
                        (
                            <tr>
                                <td className='py-3 px-6 text-center' colSpan={5}>No players found</td>
                            </tr>
                        )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
