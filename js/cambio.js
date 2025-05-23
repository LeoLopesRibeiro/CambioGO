import { apiBuscaMoedas, api } from "./api.js";

const input = document.querySelector("#convert");
const valueToConvert = document.getElementById("convert-value")
const moedas = await apiBuscaMoedas();

input.innerHTML = Object.entries(moedas).map(([key, value]) => {
  return `<option id="key" value="${key}">${key}</option>`;
});

// input.addEventListener("onchange", () => {
  
//   document.getElementById("name-converter").innerText = moedas[value];
// });
input.addEventListener("change", () => {
    let value = input.value;
    document.getElementById("name-converter").innerText = moedas[value];
  });
  
document.getElementById("convert-button").addEventListener("click", async () => {
    let value = input.value;
    const response = await api(value)

    // console.log(valueToConvert.value)
    const convertedValue = Object.entries(response)[0][1].ask * valueToConvert.value
    // console.log(Object.entries(response)[0][1].ask)

    document.getElementById("converted-value").value = Intl.NumberFormat("pt-BR", { maximumSignificantDigits: 3 }).format(convertedValue);
});
