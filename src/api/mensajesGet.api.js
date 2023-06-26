const getMensajes = async (token, setMensajes) => {

    var myHeaders = new Headers();
    myHeaders.append("jwt",token);
    myHeaders.append("Content-Type","application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode:'cors'
    };

    let response = await fetch("http://localhost:8080/mensajes/contactar/", requestOptions);
    let jsonData = await response.json();

    return jsonData;

    //setMensajes(jsonData);
    //console.log(jsonData);

}

export default getMensajes;