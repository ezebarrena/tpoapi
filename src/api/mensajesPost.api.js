const postMensajes = async (nombre, email, telefono, texto) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json");

    var raw = JSON.stringify({
        "nombre":nombre,
        "email":email,
        "telefono": telefono,
        "texto": texto
      });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode:'cors'
    };

    let response = await fetch("http://localhost:8080/mensajes/contactar/", requestOptions);
    let jsonData = await response.json();
    
    return jsonData;   

}

export default postMensajes;