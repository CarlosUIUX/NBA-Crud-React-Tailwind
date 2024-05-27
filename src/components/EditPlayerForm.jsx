import React, { Fragment, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const EditPlayerForm = (props) => {

  const [player, setPlayer] = useState(props.playerEdit)

  useEffect(() => {
    setPlayer(props.playerEdit)
  }, [props])

  const inputStyle = "block lg:w-2/4 md:w-full w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 duration-300 placeholder:text-gray-400 focus:ring-2 focus:ring-sky-600 sm:text-sm sm:leading-6 px-2"
  const labelStyle = "block text-sm font-medium leading-6 text-gray-900 mb-2"
  const errorStyle = "block flex gap-1 block text-sm text-red-500 mt-1.5 items-center"

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      id: player.id,
      name: player.name,
      team: player.team,
      position: player.position,
      number: player.number
    },
  });

  const onSubmit = handleSubmit((data) => {
    props.updatePlayer(data)
    const playerNew = {
      id: null,
      name: "",
      team: "",
      position: "",
      number: ""
    }
    setPlayer(playerNew)
    console.log("Info to update player has been send:")
    console.log(data)
    reset();
  });

  return (
    <Fragment>
      <section className='px-2 mx-auto container lg:px-32 md:px-12 px-5 mb-32 mt-12'>
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl font-bold">Edit player</h2>
          <EditSvg></EditSvg>
        </div>
        <hr className="my-2" />
        <form onSubmit={onSubmit} >
          <input type="hidden" name="id" defaultValue={player.id} />
          <div className='mb-5 mt-5'>
            <label htmlFor='name' className={labelStyle}>
              First name and Last name
            </label>
            <input
              defaultValue={player.name}
              className={inputStyle}
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: 'Name is required'
                },
                minLength: {
                  value: 2,
                  message: 'Name is too short'
                },
                maxLength: {
                  value: 64,
                  message: 'Name is too long'
                },
                pattern: {
                  value: /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
                  message: 'Name is not valid'
                }
              })}
            />
            {errors.name && (<span className={errorStyle}><ErrorSvg /> {errors.name.message}</span>)}
          </div>
          <div className='mb-5'>
            <label htmlFor='team' className={labelStyle}>
              Team name
            </label>
            <input
              defaultValue={player.team}
              className={inputStyle}
              type="text"
              name="team"
              {...register("team", {
                required: {
                  value: true,
                  message: 'Team name is required'
                },
                minLength: {
                  value: 2,
                  message: 'Team name is too short'
                },
                maxLength: {
                  value: 64,
                  message: 'Team name is too long'
                },
                pattern: {
                  value: /[A-Za-z0-9\-\_]+/,
                  message: 'Team name is not valid'
                }
              })}
            />
            {errors.team && (<span className={errorStyle}><ErrorSvg /> {errors.team.message}</span>)}
          </div>
          <div className='mb-5'>
            <label htmlFor="pais" className={labelStyle}>Position</label>
            <select name="position" id="position" className={inputStyle} defaultValue={player.position}
              {...register("position", {
                required: {
                  value: true,
                  message: 'Position is required'
                }
              })}>
              <option value="Point Guard">Point Guard</option>
              <option value="Small Forward">Small Forward</option>
              <option value="Center">Center</option>
              <option value="Power Forward">Power Forward</option>
              <option value="Shooting Guard">Shooting Guard</option>
            </select>
            {errors.position && (<span className={errorStyle}><ErrorSvg /> {errors.position.message}</span>)}
          </div>
          <div className='mb-5'>
            <label htmlFor='number' className={labelStyle}>
              Number
            </label>
            <input
              defaultValue={player.number}
              className={inputStyle}
              type="number"
              name="number"
              {...register("number", {
                required: {
                  value: true,
                  message: 'Player number is required'
                },
                maxLength: {
                  value: 2,
                  message: 'Use numbers from 0 to 99'
                },
                pattern: {
                  value: /^(0?[0-9]|[0-9][0-9])$/,
                  message: 'Player number is not valid, use numbers from 0 t0 99'
                }
              })}
            />
            {errors.number && (<span className={errorStyle}><ErrorSvg /> {errors.number.message}</span>)}
          </div>
          <div className='my-8'>
            <button
              type='submit'
              className='duration-300 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'>
              Save changes
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  )
}

const ErrorSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
    </svg>
  )
}

const EditSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
    </svg>
  )
}
