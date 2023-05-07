import "../cssComponents/cssCompStyles.css"
import Foto from "../assets/pictures/Eze.png"

function intro() {
    return(
        <div className="presentacion" >
        
            <div className="row">

                

                <div className="col-md-6">     
                    <h1 className="nombre">Hola me llamo Ezequiel</h1>
                    <h2 className="subtitulo">Estudiante de Ingeniería en Informática</h2>                    
                    <button className="descargaCV">Descargar CV</button>

                </div>

                <div className="col-md-6">
                    <img src={Foto} alt="Foto" className="Foto"></img>
                    
                </div>


                
            </div>

        </div>
        
    );
}

export default intro;