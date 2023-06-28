const getMensajes = async (email, telefono, texto) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json");

    

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode:'cors'
    };

    let response = await fetch("http://localhost:8080/mensajes", requestOptions);
    let jsonData = await response.json();

    return jsonData;

}

export default getMensajes;