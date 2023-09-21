import React from 'react'

export const PlayerRow = (props) => {

  const getPositionStyle = (rol) => {
    switch (rol) {
      case 'Point Guard':
        return "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
      case 'Small Forward':
        return "bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
      case 'Shooting Guard':
        return "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
      case 'Power Forward':
        return "bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-gray-300"
      case 'Center':
        return "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
    }
  }

  return (
    <tr>
      <td className="font-semibold py-3 px-6 text-left">{props.player.name}</td>
      <td className="py-3 px-6 text-left">{props.player.team}</td>
      <td className="py-3 px-6 text-left">
        <span className={getPositionStyle(props.player.position)}>
          {props.player.position}
        </span>
      </td>
      <td className="py-3 px-6 text-center">
        {props.player.number}
      </td>
      <td className="py-3 px-6 text-center flex gap-1">
        <button onClick={()=> {props.editPlayerRow(props.player)}} className='bg-yellow-500 hover:bg-yellow-600 duration-300 p-2 rounded-full'>
          <EditSvg />
        </button>
        <button onClick={() => {props.deletePlayer(props.player.id)}} className='bg-red-500 hover:bg-red-600 duration-300 p-2 rounded-full'>
          <DeleteSvg />
        </button>
      </td>
    </tr>
  )
}

const EditSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-4 h-4">
      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
    </svg>
  )
}

const DeleteSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-4 h-4">
      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
    </svg>
  )
}
