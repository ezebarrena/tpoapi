import React from 'react'
import "../cssComponents/cssCompStyles.css"

function signIn (){
    
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
                        <h4 >Iniciar Sesión</h4>
                    </div>

                    <label for="inputName3" class="col-md-12 col-form-label">Email</label>
                    <div >
                        <input type="name" class="form-control" id="inputName3"></input>
                    </div>
                    
                    <label for="inputPassword3" class="col-md-12 col-form-label">Password</label>
                    <div>
                        <input type="password" class="form-control" id="inputPassword3"></input>
                    </div>
                    
                    <div className="SeparadorSignIn"></div>
                    <div>
                        <a href='signin'>No tienes cuenta? Registrate aquí</a>
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
                                <button type="submit" class="boton4">Log in</button>
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

export default signIn;