import './App.css';
import Categories from './Components/Categories.js'
import Todos from './Components/Todos.js'
import AddTodo from './Components/AddTodo.js'

function App() {
  return (
    <div className="App">
      <Categories />
      <Todos />
      <AddTodo />
    </div>
  );
}



export default App;
