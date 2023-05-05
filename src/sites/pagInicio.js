import Intro from "../components/intro.js"
import DatosPersonales from "../components/datosPersonales.jsx"

function pagInicio(){
    return(
        <div>
            <Intro />  
            <DatosPersonales />        
        </div>
    );
}

export default pagInicio