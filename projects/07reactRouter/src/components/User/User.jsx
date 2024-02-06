import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
    return (
        <div className='bg-gray-600 max-w-md mx-auto p-4'>
        <h1 className='w-fit  mx-auto text-3xl'>

            User: {userid}
        </h1>
        </div>
    )
}

export default User
