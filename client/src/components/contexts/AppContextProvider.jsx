/* eslint-disable react/prop-types */
import { useState } from "react"
import AppContext from "./AppContext"

const AppContextProvider = ({children}) => {
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')


    return (
        <AppContext.Provider value={{email, setEmail, user, setUser, option: {category: '', level: ''}} }>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider