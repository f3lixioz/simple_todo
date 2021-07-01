import './App.css';
import Todos from './Components/Todos.js'
import Paper from '@material-ui/core/Paper';
import NavBar from './Components/NavBar';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

function App() {
  return (
    
    <Container>
      <NavBar />
      <Todos />
    </Container>
  );
}


export default App;