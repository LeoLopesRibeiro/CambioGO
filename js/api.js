export async function api(caminho) {
  const response = await fetch(
    `https://economia.awesomeapi.com.br/json/last/${caminho}`
  );
  if (!response) {
    return console.log("Houve um erro de busca, a API não retornou nada");
  }
  if (response.status != 200) {
    return console.log("Houve um erro de busca", response.status);
  }

  let result = response.json();

  // console.log(result);

  return result;
}

export async function apiLogin(email, senha) {
    try {
        const response = await fetch("http://localhost:3001/accounts/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, senha })
        });
    
        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
    
        const result = await response.json();
        return result;
      } catch (error) {
        console.error("Erro ao fazer login:", error.message);
        return null;
      }
}

export async function apiCadastro(nome, email, senha, senha2){
  console.log("Senha"+senha)
  console.log("Senha confirmar"+senha2)
  if(senha != senha2){
    return console.log("As senhas não são iguais");
  }

  try{
    const response = await fetch("http://localhost:3001/accounts/cadastro", {
      method: "POST",
      headers:  {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({nome: nome, email: email, senha: senha})
    });
    if(!response.ok){
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }
    const result = await response.json();
    return result
  }catch(error){
    console.error("Erro ao fazer login:", error.message);
    return null;
  }
}
