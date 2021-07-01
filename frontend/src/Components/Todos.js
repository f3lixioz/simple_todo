import {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Fab, GridList, GridListTile } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        borderRadius: 20,
        margin:12
      },
      content: {
        padding: 24,
      },
  });

const listStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
},
gridList: {
    width: 500,
    height: 450,
},
}));

const Todos=()=>{

    const classes = useStyles();

    let [ todos,setTodos ] = useState(['default']);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3001/todos`);
        const data = await response.json();
        setTodos(data);
    };
    

    useEffect(() => {
        fetchData();

        const interval=setInterval(()=>{
            fetchData()
           },300)
   
           return()=>clearInterval(interval)
    },[]);
    
    const handleCheckClick=(e)=>{
        deleteTodo(e.currentTarget.value)
    }

    const deleteTodo=( id )=>{

        const requestOptions = {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(),
        }

        fetch( `http://localhost:3001/todos/delete/${id}`, requestOptions )
        fetchData()
    }

    const formatTodo=( )=>{
        let temp = []
        temp.push(
            <GridList cellHeight={200} cols={5} className={listStyles}>
                { todos.forEach(element => {
                    temp.push(
                        <GridListTile key={element.id} cols={1}>  
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    {element.task}
                                </Typography>
                                <CardActions id={element.id}>
                                    <Fab color="primary" aria-label="add" value={element.id} onClick={handleCheckClick} size="small">
                                        <CheckIcon id={element.id} value={element.id}/>
                                    </Fab>
                                </CardActions>
                            </CardContent>
                        </Card>
                        </GridListTile>
                    )})
                }
            </GridList>
            )
        return temp
        
    }


    let formattedTodoList = formatTodo()
      
    return(
        <div>
            {formattedTodoList}
        </div>
    )
    
}


export default Todos;