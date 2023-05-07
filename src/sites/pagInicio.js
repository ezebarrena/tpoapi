import Intro from "../components/intro.js"
import NavBar from "../components/navegation/navBar.js"
import DatosPersonales from "../components/datosPersonales.jsx"

function pagInicio(){
    return(
        
        
        <div>

            
            <div className="barra">
                <NavBar />                     
            </div>
            
            
            <div className="pagina">
                <Intro />
                <DatosPersonales />
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