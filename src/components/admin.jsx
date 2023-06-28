import "../layout/cssCompStyles.css"
import axios from 'axios';

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
            <div className="row">
                <div className="col md-3"></div>
                <div className="col md-6">

                    <div class="divAdmin"></div>

                    <div className="BoxAdmin">
                        <div>
                            <h1 class="Titulo">Panel Administrador</h1>
                        </div>
                        
                            <div className="boxTabla">
                                
                                    <table class="table table-stripped">
                                        <thead>
                                            <tr>
                                                <th>Email</th>
                                                <th>Telefono de contacto</th>
                                                <th>Mensaje</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tablaMensajes}
                                        </tbody>
                                        
                                    </table>

                            </div>
                    </div>
                </div>
                <div className="col md-3"></div>
            </div> 
        </div>
    )
} 

export default Admin; 