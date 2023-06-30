import "../layout/cssCompStyles.css"

import { useState, useEffect } from 'react';

function Admin () {
    const accessToken = sessionStorage.getItem('access-token')
    const [data, setData] = useState(null);
    const [tablaMensajes, setTablaMensajes] = useState();   

    
    const obtenerMensajes = async () => {
        try {
            console.log('entre al back')
            let url = 'http://localhost:8080/mensajes/getMensaje/'
            console.log('copie url')
            let response = await fetch(url, {
                method: 'GET',
                mode: "cors",
                headers: {
                    'Origin': 'http://localhost:3000/admin'
                },
            
        })
        const data = await response.json(); // Obtener los datos en formato JSON
        console.log(data); // Mostrar los datos en la consola
        
        const filas = data.map(mensaje => (
            <tr key={mensaje.id}>
                <td>{mensaje.nombre}</td>
                <td>{mensaje.email}</td>
                <td>{mensaje.telefono}</td>
                <td>{mensaje.texto}</td>
            </tr>
        ));
        //setTablaMensaje(filas)
        //return data;
        setTablaMensajes(filas);
    } catch (error) {
            console.log("Error", error);
    }}

    
    useEffect(() => {
        obtenerMensajes(setData,accessToken);
    },[setData,accessToken]);

    return(
        <div>
            <div className="container">
                
                <div className="col md-12" id="fondo">

                    <div class="divAdmin"></div>

                    <div className="BoxAdmin">
                        <div>
                            <h1 class="Titulo">Panel Administrador</h1>
                        </div>
                        <div>
                            <p>Bienvenido administrador. Ultimos contactos recibidos</p>
                        </div>
                        
                            <div className="boxTabla">
                                
                                    <table class="table table-stripped" id="tablaAdmin">
                                        <thead className="cabezeraTabla">
                                            <tr>
                                                <th id="campoCabezera1">Nombre</th>
                                                <th id="campoCabezera2">Email</th>
                                                <th id="campoCabezera3">Telefono</th>
                                                <th id="campoCabezera4">Mensaje</th>
                                            </tr>
                                        </thead>
                                        <tbody className="filasTabla">
                                            {tablaMensajes}
                                        </tbody>
                                        
                                    </table>

                            </div>
                    </div>
                </div>
            </div> 
        </div>
    )
} 

export default Admin; 