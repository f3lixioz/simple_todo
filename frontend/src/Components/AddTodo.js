import { Button, TextField, Select, MenuItem } from "@material-ui/core";
import { useState } from "react";

const AddTodo=()=>{

    let [ textInput, setTextInput ] = useState()
    let [ category, setCategory ] = useState('Default')

    const postData = (taskValue) => {
        console.log('inside postData')
        const requestOptions = {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({ 
                task : `${taskValue}`,
                category : `${category}` 
            }),
        }
        console.log(requestOptions)
        fetch(`http://localhost:3001/todos`,requestOptions);
        setTextInput("")
    };
    
    const handleonClick = (e) => {
        e.preventDefault();
        const task = textInput;

        console.log(textInput)
        postData(task);
    }

    const handleTextOnChange=(e)=>{
        setTextInput(e.currentTarget.value)
    }

    const keyPress=(e)=>{
        if(e.keyCode == 13){
            handleonClick(e)
         }
    }

    const handleCategoryChange=(e)=>{
        console.log('category change:', e.target.value)
        setCategory( e.target.value )
    }

    return(<div>
        <form autoComplete="off">
            <TextField id="outlined-basic" size="small" label="Add a task..." value={textInput} variant="filled" name="task" onChange={handleTextOnChange} onKeyDown={keyPress}/>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={category}
            onChange={handleCategoryChange}
            >
            <MenuItem value="Default">
                <em>Default</em>
            </MenuItem>
            <MenuItem value={'Work'}>Work</MenuItem>
            <MenuItem value={'Fun'}>Fun</MenuItem>
            <MenuItem value={'Resturants'}>Resturants</MenuItem>
            <MenuItem value={'Books'}>Books</MenuItem>
            <MenuItem value={'Groceries'}>Groceries</MenuItem>
            <MenuItem value={'Games'}>Games</MenuItem>
            </Select>
            <Button variant="contained" onClick={handleonClick}>Submit</Button>
        </form>
    </div>);
}

export default AddTodo;