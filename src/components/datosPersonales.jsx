import "../cssComponents/datosPersonales.css"

function datosPersonales() {
    return(
        <datosPersonales>
            <div class='titulo'>
                <h1> Datos Personales </h1>
            </div>
            <div class='contenido'>
                <h2> Facundo Camilotto </h2> //Nombre
                <h2> 23 años </h2> //edad
                <h2> facundo@gmail.com </h2> //email
                <h2> Caballito </h2> //localidad
                <h2> 11-22334455 </h2> //telefono
            </div>

        </datosPersonales>
  );
}

export default datosPersonales;