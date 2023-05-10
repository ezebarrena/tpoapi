import Intro from "../components/intro.jsx"
import NavBar from "../components/navegation/navBar.js"
import DatosPersonales from "../components/datosPersonales.jsx"
import Estudios from "../components/estudios.jsx"
import Final from "../components/final.jsx"
import Expe from "../components/experiencia.jsx"
import IdiCert from "../components/idiomas_certificaciones.jsx"
import Fortalezas from "../components/fortalezas.jsx"
import Skills from "../components/skills.jsx"
//import { BrouserRouter as Router, Route, Routes} from 'react-router-dom'


function pagInicio(){
    return(
        
        
        <div>

            
            <div className="barra">
                <NavBar />                     
            </div>
            
            
            <div className="pagina">
                <Intro />
                <Skills/>
                <DatosPersonales />
                <Estudios/>
                <IdiCert/>
                <Expe/>
                <Fortalezas/>
                <Final/>
            </div>
        </div>
    );
}

export default pagInicio