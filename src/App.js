import PagInicio from "./sites/pagInicio.js"
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import SignIn from "./components/signin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><PagInicio /></Route>
        <Route exact path="/signin"><SignIn /></Route>
        
      </Switch>
  </BrowserRouter>
  );
}

export default App;
