import React from 'react'
import NBA_Logo from '../assets/nba_logo.png'

export const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-sky-100 to-sky-300">
            <div className="px-2 mx-auto container py-5 lg:px-32 md:px-12 px-5">
                <div className='flex justify-between items-center gap-3 flex-wrap'>
                    <img src={NBA_Logo} alt="NBA Logo" width={86} />
                    <small>Made by Carlos Almendros</small>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:text-left md:text-left text-center items-center gap-12 flex-wrap py-8">
                    <div>
                        <h3 className="text-md font-meidum">Create · Review · Update · Delete</h3>
                        <h1 className="text-4xl font-bold my-7">Example of NBA players CRUD database app using hooks</h1>
                        <div className='flex gap-8 lg:justify-start md:justify-start justify-center items-center font-semibold w-full'>
                            <a className='flex gap-2 items-center' href='https://es.react.dev/'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Logo" width={24} />
                                <p>React</p>
                            </a>
                            <a className='flex gap-2 items-center' href='https://tailwindcss.com/'>
                                <img src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" alt="Tailwind CSS Logo" width={24} />
                                <p>Tailwind CSS</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex lg:justify-center md:justify-end justify-center w-full'>
                        <img src="https://officialpsds.com/imageview/74/8n/748n9v_large.png?1521316462" className='lg:w-2/4 md:w-full w-2/4' />
                    </div>
                </div>
            </div>
        </div>
    )
}
