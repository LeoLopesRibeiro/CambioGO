import { apiCadastro } from "./api.js";

const form = document.getElementById("register-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);

  const response = await apiCadastro(data.name, data.email, data.password, data.confirm);

  console.log(response)
  if (response) {
    // console.log(response);
    alert("Cadastro realizado!");
    // window.location.href = "../index.html";
  } else {
    alert("Cadastro invalido.");
  }
});