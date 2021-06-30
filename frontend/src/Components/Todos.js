import {useEffect, useState} from "react";

const Todos=()=>{

    let [todos,setTodos] = useState(['default']);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3001/todos`);
        const data = await response.json();
        const temp = [];
        const temp2 = await data.forEach(element => {
            temp.push(<p>{element.task}</p>);
        })
        setTodos(temp);
    };
    

    useEffect(() => {
        fetchData();
    }, []);
    
      
    return(<div>{todos}</div>);
}

export default Todos;