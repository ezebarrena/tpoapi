import NavBar from "../components/navegation/navBar.js"
import Admin from "../components/admin.jsx"

function pagAdmin(){
    return(
        
        <div>

            <div className="barra">
                <NavBar />                     
            </div>
            
            
            <div className="pagina">
                <Admin />
            </div>

        </div>

    );
}

export default pagAdmin