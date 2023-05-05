import "../cssComponents/cssData.css"
import "../cssComponents/cssDiv.css"


function datosPersonales() {
    return(
        <div>
            <div className="divTitulo">
                <h1 className="titulo"> Datos Personales </h1>
            </div>
            <div className="divContenido">
                <h2 className="contenido"> Facundo Camilotto </h2>    
                <h2 className="contenido"> 23 años </h2>             
                <h2 className="contenido"> facundo@gmail.com </h2>    
                <h2 className="contenido"> Caballito </h2>            
                <h2 className="contenido"> 11-22334455 </h2>         
            </div> 
        </div>
  );
}

export default datosPersonales;