import { useEffect,useState } from "react";


const DataFetch = () =>{

    const [todos, setTodos] = useState([]);

    useEffect(() =>{
        // I will make an API call
        // fech is a native method of JS to make API calls
        fetch(`http://jsonplaceholder.typicode.com/todos`)
        .then(resp => resp.json())
        .then(resp => {
            setTodos(resp);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])


    useEffect(() =>{

        window.addEventListener('mousemove', () => {});

        //this become a component will unMount
        return () =>{
            window.removeEventListener("mousemove", () => {});
        }

    },[])

    return(
        <div style={{ textAlign: 'center'}}>
            {
                todos && todos.length > 0
                ?
               todos.map((item, index) =>{
                   return <div key={index}>{item.title}

                   </div>
               }) 
               :
               <h4>Loading Todos....</h4>
            }
        </div>
    )
}

export default DataFetch;