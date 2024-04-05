
import { useEffect  } from "react"


function useTitle(record) {

   useEffect (() =>{
        document.title = `Reccord ${record}`
   }, [record])
   
}

export default useTitle