import React from 'react'

// Context provides a variable
const UserContext = React.createContext()

export default UserContext

// Provider is needed. To provide the data that context has.
{/* 
<UserContextProvider> // Provider. The components within will have access to data.
<Login />
<Card>
    <Data />
</Card>
</UserContextProvider> 
*/}