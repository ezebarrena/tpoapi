import Intro from "../components/intro.js"
import NavBar from "../components/navegation/navBar.js"
import LogIn from "../components/login.js"
import { BrouserRouter as Router, Route, Routes} from 'react-router-dom'

function pagInicio(){
    return(
        
        
        <body>

            <header>
                <div className="barra">
                    <NavBar />                     
                </div>
            </header>
            
            <div className="pagina">
                <Intro />
            </div>
        </body>
    );
}

export default pagInicio