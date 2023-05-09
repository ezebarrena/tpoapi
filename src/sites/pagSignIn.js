import React from 'react'
import Login from "../components/signin.jsx"
import NavBar from "../components/navegation/navBar.js"




function pagSignIn(){
  return (
    <div> 

      <div className="barra">
          <NavBar />                     
      </div>

      <div className="pagina">
          <Login />
      </div>
    </div>
  )
}

export default pagSignIn;
