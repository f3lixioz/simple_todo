import {useEffect, useState} from "react";

const AddTodo=()=>{

    // let [addtodos,setAddTodos] = useState(['default']);

    const postData = (taskValue) => {
        console.log('inside postData')
        const requestOptions = {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({ task : `${taskValue}` }),
        }
        console.log(requestOptions)
        fetch(`http://localhost:3001/todos`,requestOptions);
        // const data = await response.json();
        // const temp = [];
        // const temp2 = await data.forEach(element => {
        //     console.log(element.task)
        //     temp.push(<p>{element.task}</p>);
        // })
        // setTodos(temp);
    };
    

    // useEffect(() => {
    //     postData();
    // }, []);
    
    const handleonClick = (e) => {
        e.preventDefault();
        const task = e.target.form.task.value;
        postData(task);
    }


    return(<div>
        <form>
            <label>Add Task</label>
            <input type="text" name="task"></input>
            <button onClick={handleonClick}>Submit</button>
        </form>
    </div>);
}

export default AddTodo;