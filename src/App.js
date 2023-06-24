import PagInicio from "./sites/pagInicio.js"
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import SignIn from "./components/signin.jsx";
import Contacto from "./sites/pagContacto.js"
import Admin from "./sites/pagAdmin.js"
import LogIn from "./components/login.jsx"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><PagInicio /></Route>
        <Route exact path="/signin"><SignIn /></Route>
        <Route exact path="/contacto"><Contacto /></Route>
        <Route exact path="/admin"><Admin /></Route>
        <Route exact path="/login"><LogIn/></Route>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
