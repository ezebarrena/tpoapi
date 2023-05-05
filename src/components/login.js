import React from 'react'
import navBar from './navegation/navBar';
const Login = () => {
    
    function volver(){
        return(
          window.location.href = '/'
        )
      }
  return (
    <div>
        <form>
        <navBar />
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3"></input>
                    </div>
            </div>

            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3"></input>
                    </div>
            </div>
            <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                            <label class="form-check-label" for="gridRadios1">First radio</label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                            <label class="form-check-label" for="gridRadios2">Second radio</label>
                        </div>

                        <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled></input>
                            <label class="form-check-label" for="gridRadios3">Third disabled radio</label>
                        </div>
                    </div>
            </fieldset>
            <div class="row mb-3">
                <div class="col-sm-10 offset-sm-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
                        <label class="form-check-label" for="gridCheck1">Example checkbox</label>
                        
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
        <button onClick={volver} class="btn btn-primary" type="submit">Volver</button>
    </div>
  )
}

export default Login;