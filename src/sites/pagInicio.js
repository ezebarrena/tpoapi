import Intro from "../components/intro.js"

function pagInicio(){
    return(
        <div>
            <Intro />  
            <datosPersonales />   
            <estudios />       
        </div>
    );
}

export default pagInicio