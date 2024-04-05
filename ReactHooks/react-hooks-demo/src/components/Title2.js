
import { useState } from "react"
import useTitle from "./CustomHook"

const Title2 = () =>{
   const [record, setRecord] = useState(0);
   useTitle(record);

   return (
    <>
    <h2>From Title 2 Component</h2>
    <button onClick={() => setRecord(record - 1)}>Decrease Record</button>
    </>
   )
}

export default Title2;