import NavBar from "./navegation/navBar.js"
import "../cssComponents/cssCompStyles.css"

function admin () {
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
                                    <tr>
                                        <td>juanperez@gmail.com</td>
                                        <td>12233445566</td>
                                        <td>Hola queres ser tu propio jefe?</td>
                                    </tr>
                                    <tr>
                                        <td>pepegomez@gmail.com</td>
                                        <td>9988775522</td>
                                        <td>Hola, queres ser programador?</td>
                                    </tr>
                                    <tr>
                                        <td>carlostevez@gmail.com</td>
                                        <td>912</td>
                                        <td>hola queres ser PM?</td>

                                    </tr>
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

export default admin; 