import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()
    
    // Commenting to use loader.
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // },[])
    return (
        <div className='bg-gray-600 max-w-md mx-auto p-4'>
            <h1 className='w-fit  mx-auto text-3xl'>
                Github Followers: {data?.followers}
            </h1>
            <img className='mx-auto p-4' src={data?.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
