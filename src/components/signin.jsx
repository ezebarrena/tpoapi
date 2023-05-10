import React from 'react'
import "../cssComponents/cssCompStyles.css"

function signIn (){
    
    function volver(){
        return(
          window.location.href = '/'
        )
      }
  return (
    
    <div className="container">
        <form>
            <div class="row mb-3"> 
                <div className="SeparadorSupDP"></div>


                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3"></input>
                </div>
            </div>

            <div class="row mb-3">
                <label id="passwordLabel" for="inputPassword3" class="col-md-1 col-form-label">Password</label>
                <div class="col-md-1">
                    <input type="password" class="form-control" id="inputPassword3"></input>
                </div>
            </div>

            <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Prefijo</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                            <label class="form-check-label" for="gridRadios1">Mr</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                            <label class="form-check-label" for="gridRadios2">Mrs</label>
                        </div>

                    </div>
            </fieldset>
            
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
        
        <div className="SeparadorSup"></div>

        <button onClick={volver} class="btn btn-primary" type="submit">Volver</button>

        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 col-12">
                <div className="BoxSignIn">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div >
                            <input type="email" class="form-control" id="inputEmail3"></input>
                        </div>
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div>
                            <input type="password" class="form-control" id="inputPassword3"></input>
                        </div>

                    <div className="SeparadorSup"></div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="boxSignInButtons">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="boxSignInButtons">
                                <button onClick={volver} class="btn btn-primary" type="submit">Volver</button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className="col-md-3"></div>

        </div>



    </div>
    
    
  )

}

export default signIn;