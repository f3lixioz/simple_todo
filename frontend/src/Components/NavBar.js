import { AppBar, Toolbar } from "@material-ui/core";
import Categories from './Categories.js'
import AddTodo from "./AddTodo.js";

const NavBar=()=>{

    return (
          <AppBar position="sticky">
            <Toolbar>        
                <Categories />
                <AddTodo />
            </Toolbar>
          </AppBar>
      );
}

export default NavBar;