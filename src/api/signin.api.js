const signin = async (name,email,password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name":name,
      "email": email,
      "password": password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'cors'
    };
    
    let response = await fetch("http://localhost:8080/usuarios/", requestOptions);
    let jsonData = await response.json();

    return jsonData;
}

export default signin;