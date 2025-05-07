import {api} from "./api.js";

const data = await api("USD-BRL,EUR-BRL,GBP-BRL");

const display = document.querySelector("#cards");


display.innerHTML = Object.entries(data)
  .map(([key, value]) => {

    return `<div class="container"> 
              <p id="nome">${value.name}</p>
              <p id="high">Máximo: ${Intl.NumberFormat("pt-BR", { maximumSignificantDigits: 3 }).format(value.high)}</p>
              <p id="low">Mínimo: ${Intl.NumberFormat("pt-BR", { maximumSignificantDigits: 3 }).format(value.low)}</p>
              <p id="bid">Compra: ${Intl.NumberFormat("pt-BR", { maximumSignificantDigits: 3 }).format(value.bid)}</p>
              <p id="ask">Venda: ${Intl.NumberFormat("pt-BR", { maximumSignificantDigits: 3 }).format(value.ask)}</p>
            </div>`;
  })
  .join("");

  
// Object.entries(data).map(([key, value]) => {});