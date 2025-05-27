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


 const botao = document.getElementById('buy-button');
  const elemento = document.getElementById('toggle');

  botao.addEventListener('click', () => {
     botao.innerText = botao.innerText == "Comprar moedas" ? "Cancelar" : "Comprar moedas"
    elemento.classList.toggle('invisible');
  });

document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}