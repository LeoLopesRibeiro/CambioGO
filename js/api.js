async function api(caminho){
    
    const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${caminho}`);
    if(!response){
        return console.log("Houve um erro de busca, a API não retornou nada")
    }
    if(response.status != 200){
        return console.log("Houve um erro de busca", response.status);
    }

    let result = response.json();

    // console.log(result);

    return result;
}

export default api;
