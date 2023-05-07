import "../cssComponents/cssIntro.css"
import Foto from "../assets/fotoEze2.jpg"

function intro() {
    return(
        <div className="presentacion">
        
            <div className="row">

                <div className="col-md-3">
                    <div className="prueba">
                        <h1 className="nombre">Hola me llamo Ezequiel</h1>
                    </div>
                </div>

                <div className="col-md-3">                    
                    <h2>Soy estudiante de Ingenieria en Informatica</h2>
                    <p>Este es mi perfil</p>
                    <img source={Foto} alt="Foto"></img>
                    

                </div>

                <div className="col-md-3">
                    <h2>Soy estudiante de Ingenieria en Informatica</h2>
                    <p>Este es mi perfil</p>
                </div>

                <div className="col-md-3">
                    <h2>Soy estudiante de Ingenieria en Informatica</h2>
                    <p>Este es mi perfil</p>
                </div>

                
            </div>

        </div>
        
    );
}

export default intro;