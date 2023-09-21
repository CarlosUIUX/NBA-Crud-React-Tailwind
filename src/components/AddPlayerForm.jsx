import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

export const AddPlayerForm = (props) => {

  const inputStyle = "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 duration-300 placeholder:text-gray-400 focus:ring-2 focus:ring-sky-600 sm:text-sm sm:leading-6 px-2"
  const labelStyle = "block text-sm font-medium leading-6 text-gray-900 mb-2"
  const errorStyle = "block flex gap-1 block text-sm text-red-500 mt-1.5 items-center"

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      team: "",
      position: "",
      number: ""
    },
  });

  const onSubmit = handleSubmit((data) => {
    props.addPlayer(data)
    console.log("Info to create new player has been send:")
    console.log(data)
    reset();
  });

  return (
    <Fragment>
      <form className='mt-5' onSubmit={onSubmit}>
        <div className='mb-5'>
          <label htmlFor='name' className={labelStyle}>
            First name and Last name
          </label>
          <input
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
                value: /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
                message: 'Team name is not valid'
              }
            })}
          />
          {errors.team && (<span className={errorStyle}><ErrorSvg /> {errors.team.message}</span>)}
        </div>
        <div className='mb-5'>
          <label htmlFor="pais" className={labelStyle}>Position</label>
          <select name="position" id="position" className={inputStyle}
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
            Add new player
          </button>
        </div>
      </form>
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
