import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { useContext } from "react"
import { ProgressContext } from '../providers/userProgress'

export default function ProgressBar() {
    const { progress } = useContext(ProgressContext)

    return (
        <CircularProgressbar
            value={progress}
            text="Hoje"
            styles={buildStyles({
                pathColor: "#FFFFFF",
                textColor: "#FFFFFF",
                trailColor: "transparent",
                backgroundColor: "transparent",
            })} 
        />
    )
}

