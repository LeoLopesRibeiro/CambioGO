import { apiCadastro } from "./api.js";

const form = document.getElementById("register-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const response = await apiCadastro(data.name, data.email, data.password, data.confirm);
  if (response) {
    alert("Cadastro realizado!");
  } else {
    alert("Cadastro invalido.");
  }
});