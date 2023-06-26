import React, { useState } from 'react'
import "../layout/cssCompStyles.css"
import { useHistory } from "react-router-dom";

import signIn from '../api/signin.api'

function SignIn (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useHistory();

    function volver(){
        return(
          window.location.href = '/'
        )
      }
    
    const handleSubmit = async (e) => {
        console.log("PROBANDOOO 1")
        e.preventDefault();
        console.log("PROBANDOOO 2")
        if (password === password2) {
            let response = await signIn(name,email,password);
            console.log("PROBANDOOO 3")
            console.log(response)
            console.log("Guardo el token en sessionStorage")
            sessionStorage.setItem("access-token",response.token);
            volver()
        }
        else{
            alert("Las contraseñas no coinciden")
        }
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
                    <form onSubmit={handleSubmit}>
                        <label for="inputName3" class="col-md-12 col-form-label">Nombre y Apellido</label>
                        <div >
                            <input type="name" class="form-control" id="inputName3" require value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        
                        <label for="inputEmail3" class="col-md-12 col-form-label">Email</label>
                        <div >
                            <input type="email" class="form-control" id="inputEmail3" require value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        
                        <label for="inputPassword3" class="col-md-12 col-form-label">Password</label>
                        <div>
                            <input type="password" class="form-control" id="inputPassword3" require value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        
                        <label for="reInputPassword3" class="col-md-12 col-form-label">Repeat Password</label>
                        <div>
                            <input type="password" class="form-control" id="reInputPassword3" require value={password2} onChange={(e) => setPassword2(e.target.value)}></input>
                        </div>
                    
                        <div className="SeparadorSignIn"></div>

                        <div>
                            <a href='login'>Ya tienes cuenta? Inicia sesion aquí</a>
                        </div>

                        <div className="SeparadorSignIn"></div>

                        <div className="row">
                            <div className="col-md-6 col-6">
                                <div className="boxSignInButtons">
                                    <button onClick={volver} class="boton4">Volver</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="boxSignInButtons">
                                    <button type="submit" class="boton4">Sign in</button>
                                </div>
                            </div>
                            
                            
                        </div>
                    </form>
                </div>
            </div>
        <div className="col-md-4 col-sm-1 col-1"></div>

        </div>


        </div>
    </div>
    
    
  )

}

export default SignIn;