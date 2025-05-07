export async function api(caminho) {
  try {
    const response = await fetch(
      `https://economia.awesomeapi.com.br/json/last/${caminho}`
    );

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    alert("Erro ao buscar as moedas:", error.message);
    return null;
  }
}

export async function apiLogin(email, senha) {
  try {
    const response = await fetch("http://localhost:3001/accounts/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
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

export async function apiCadastro(nome, email, senha, senha2) {
  if (senha != senha2) {
    return alert("As senhas não são iguais");
  }

  try {
    const response = await fetch("http://localhost:3001/accounts/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: nome, email: email, senha: senha }),
    });
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao realizar o cadastro:", error.message);
    return null;
  }
}

export async function apiBuscaMoedas() {
  try {
    const response = await fetch(
      `https://economia.awesomeapi.com.br/json/available`
    );
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao buscar moedas:", error.message);
    return null;
  }
}
