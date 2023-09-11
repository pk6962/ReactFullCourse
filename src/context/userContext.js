import React from 'react'
const initialState = {
    firstName : "Prasa",
    lastName : "Kumar",
    email : "Prasa@gmail.com"
}

export const UserContext = React.createContext()

export const UserContextProvider = ({children}) => {
    console.log( children,"child")
    return <UserContext.Provider value={initialState}>
                {children}
            </UserContext.Provider>;
}

export default UserContext;