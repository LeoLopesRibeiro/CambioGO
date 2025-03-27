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

//menu
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');

    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded' , 'true')

    if (active) {
        event.currentTarget.setAttribute('aria-label' , 'Fechar Menu')
    }
    else{
        event.currentTarget.setAttribute('aria-label' , 'Abrir Menu')
    }
}

btnMobile.addEventListener('click' , toggleMenu);
btnMobile.addEventListener('touchstart' , toggleMenu);
