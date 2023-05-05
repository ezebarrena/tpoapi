import PagInicio from "./sites/pagInicio.js"
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Login from "./components/login.js";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><PagInicio /></Route>
        <Route exact path="/login"><Login /></Route>
        
      </Switch>
  </BrowserRouter>
  );
}

export default App;
