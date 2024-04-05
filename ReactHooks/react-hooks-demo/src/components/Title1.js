

import { useState } from "react"
import useTitle from "./CustomHook"

const Title1 = () => {
    const [record, setRecord] = useState(0);
    useTitle(record);

    return(
        <>
        <h2>From Title1 component</h2>
        <button onClick={() => setRecord(record + 1)}>Increase Record</button>
        </>
    )

}

export default Title1;