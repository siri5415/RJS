import { useContext } from "react"
import { TopLevelContext } from "../App"

const ComponentZ = () => {
    debugger
    const topLevelData = useContext(TopLevelContext);
    return(
        <>
        <h6>Data from the App component</h6>
        <h6>{topLevelData}</h6>
        </>
    )

}

export default ComponentZ