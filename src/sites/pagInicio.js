import Intro from "../components/intro.js"
import NavBar from "../components/navegation/navBar.js"
import DatosPersonales from "../components/datosPersonales.jsx"
import Estudios from "../components/estudios.jsx"
import Test from "../components/test.jsx"
import IdiCert from "../components/idiomas_certificaciones.jsx"
//import { BrouserRouter as Router, Route, Routes} from 'react-router-dom'


function pagInicio(){
    return(
        
        
        <div>

            
            <div className="barra">
                <NavBar />                     
            </div>
            
            
            <div className="pagina">
                <Intro />
                <DatosPersonales />
                <Estudios/>
                <IdiCert/>
                <Test/>
                {/* ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES
                    ACA PONEMOS TODOS LOS COMPONENTES                
                 */}
            </div>
        </div>
    );
}

export default pagInicio