import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export function Github() {
    const data = useLoaderData()
    // const[data,setData] = useState(0)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Postgres')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    return (
        <div className='text-center bg-amber-500 text-white m-10 '>Github Followers: {data.followers} <img src={data.avatar_url} alt="Git picture" className="w-16 h-16" /></div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Postgres')
    return response.json()
}
