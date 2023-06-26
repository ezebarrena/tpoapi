import React, { useState } from 'react'
import "../layout/cssCompStyles.css"
import {useNavigate} from 'react-router-dom'

function SignIn (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function volver(){
        return(
          window.location.href = '/'
        )
      }
    return (
        
    <div className="boxSignIn">
        <div className="container" id="cont">

        <div className="row">
            <div className="col-md-4 col-sm-1 col-1"></div>
            <div className="col-md-4 col-sm-10 col-10">
                <div className="divSignIn"></div>
                <div className="BoxSignIn2">

                    <div className="boxTituloSignIn">
                        <h4>Registrarse</h4>
                    </div>

                    <label for="inputName3" class="col-md-12 col-form-label">Nombre y Apellido</label>
                    <div >
                        <input type="name" class="form-control" id="inputName3"></input>
                    </div>
                    
                    <label for="inputEmail3" class="col-md-12 col-form-label">Email</label>
                    <div >
                        <input type="email" class="form-control" id="inputEmail3"></input>
                    </div>
                    
                    <label for="inputPassword3" class="col-md-12 col-form-label">Password</label>
                    <div>
                        <input type="password" class="form-control" id="inputPassword3"></input>
                    </div>
                    
                    <label for="reInputPassword3" class="col-md-12 col-form-label">Repeat Password</label>
                    <div>
                        <input type="password" class="form-control" id="reInputPassword3"></input>
                    </div>
                    
                    <div className="SeparadorSignIn"></div>

                    <div>
                        <a href='login'>Ya tienes cuenta? Inicia sesion aquí</a>
                    </div>

                    <div className="SeparadorSignIn"></div>

                    <div className="row">
                        <div className="col-md-6 col-6">
                            <div className="boxSignInButtons">
                                <button onClick={volver} class="boton4" type="submit">Volver</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="boxSignInButtons">
                                <button type="submit" class="boton4">Sign in</button>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        <div className="col-md-4 col-sm-1 col-1"></div>

        </div>


        </div>
    </div>
    
    
  )

}

export default SignIn;