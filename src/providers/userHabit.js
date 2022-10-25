import React from 'react'
import { useState } from "react"

export const HabitContext = React.createContext({})

export const HabitProvider = (props) => {
    const [hb, setHb] = useState([{
        id: "",
        name: "",
        done: "",
        currentSequence: "",
        highestSequence: ""
    }])

    return (
        <HabitContext.Provider value={{ hb, setHb }}>
            {props.children}
        </HabitContext.Provider>
    )
}
