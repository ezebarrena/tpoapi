import PagInicio from "./sites/pagInicio.js"
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import SignIn from "./components/signin.jsx";
import Contacto from "./sites/pagContacto.js"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><PagInicio /></Route>
        <Route exact path="/signin"><SignIn /></Route>
        <Route exact path="/contacto"><Contacto /></Route>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
