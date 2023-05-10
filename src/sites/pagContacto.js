import NavBar from "../components/navegation/navBar.js"
import Contacto from "../components/contacto.jsx"

function pagContacto(){
    return(
        
        <div>

            <div className="barra">
                <NavBar />                     
            </div>
            
            
            <div className="pagina">
                <Contacto />
            </div>

        </div>

    );
}

export default pagContacto