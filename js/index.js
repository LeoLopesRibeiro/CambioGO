import { api } from "./api.js";

const data = await api("USD-BRL,EUR-BRL,GBP-BRL");

const display = document.querySelector("#cards");

display.innerHTML = Object.entries(data)
  .map(([key, value]) => {
    return `
    <div class="container">
  <div class="header-card">
    <p id="nome">${value.name}</p>
  </div>

  <div class="info">
    <p><span>Compra</span> <strong id="bid">R$ ${Intl.NumberFormat("pt-BR", {
      maximumSignificantDigits: 3,
    }).format(value.bid)}</strong></p>
    <p><span>Venda</span> <strong id="ask">R$ ${Intl.NumberFormat("pt-BR", {
      maximumSignificantDigits: 3,
    }).format(value.ask)}</strong></p>
    
  </div>

  <div class="footer-card">
    <span id="low">Min: R$ ${Intl.NumberFormat("pt-BR", {
      maximumSignificantDigits: 3,
    }).format(value.low)}</span>
    <span id="high">Máx: R$ ${Intl.NumberFormat("pt-BR", {
      maximumSignificantDigits: 3,
    }).format(value.high)}</span>
  </div>
</div>

`;
  })
  .join("");
//<p><span>Variação (24h)</span> <strong class="positivo">+0,5%</strong></p>

// Object.entries(data).map(([key, value]) => {});
