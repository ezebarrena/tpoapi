import Intro from "../components/intro.js"
import NavBar from "../components/navegation/navBar.js"
import LogIn from "../components/login.js"
import DatosPersonales from "../components/datosPersonales.jsx"
import Estudios from "../components/estudios.jsx"
//import { BrouserRouter as Router, Route, Routes} from 'react-router-dom'

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
                <DatosPersonales />
                <Estudios/>
                {/* ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES                
                 */}
            </div>
        </body>
    );
}

export default pagInicio