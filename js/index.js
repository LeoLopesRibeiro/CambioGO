import api from "./api.js";

const data = await api("USD-BRL,EUR-BRL");
const display = document.querySelector("#cards");

console.log(data);

display.innerHTML = Object.entries(data)
  .map(([key, value]) => {
    console.log(key);
    // console.log(value.name);
    return `<div class="container"> 
              <p>${value.name}</p>
              <p>High: ${value.high}</p>
              <p>Low: ${value.low}</p>
            </div>`;
  })
  .join("");

// Object.entries(data).map(([key, value]) => {});
