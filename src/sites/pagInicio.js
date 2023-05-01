import Intro from "../components/intro.js"
import NavBar from "../layout/navBar.jsx"

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