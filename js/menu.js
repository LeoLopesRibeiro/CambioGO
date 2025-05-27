import { isAuthenticated, logout } from "./auth.js";

// const style = 'style="text-decoration-line: underline"'
function navigate(caminho) {
  window.location.href = caminho;
}

const cabecalho = document.getElementById("cabecalho");
cabecalho.innerHTML = `
  <div id="div-logo">
    <img src="/img/logo.svg" alt="Logo CambioGo" height="40px" />
    <h1 id="logo">CambioGO</h1>
  </div>
  <nav id="nav">
    <button
      aria-label="Abrir Menu"
      id="btn-mobile"
      aria-haspopup="true"
      aria-controls="menu"
      aria-expanded="false"
    >
      Menu
      <span id="hamburguer"></span>
    </button>
    <ul id="menu" role="menu">
      <li><a class="servicos" data-path="/index.html">Home</a></li>
      <li><a class="servicos" data-path="/pages/sobre_nos.html">Sobre nós</a></li>
      
      ${
        !isAuthenticated()
          ? `<li><a class="servicos" data-path="/pages/login.html" id="login_favoritos">Login</a></li>
        <li><a class="servicos" data-path="/pages/cadastro.html">Cadastro</a></li>`
          : `  <li><a class="servicos" data-path="/pages/cambio.html">Cambio</a></li>
          <button id='logout-btn'>Sair</button>
          `
      }
     
    
    </ul>
  </nav>
`;
if (isAuthenticated()) {
  document.getElementById("logout-btn")?.addEventListener("click", () => {
    logout();
    location.reload();
  });
}

document.querySelectorAll("#menu a[data-path]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    const caminho = link.getAttribute("data-path");
    navigate(caminho);
  });
});

//para destacar a pagina atual
const pathAtual = window.location.pathname;
document.querySelectorAll(`a[data-path="${pathAtual}"]`).forEach((link) => {
//    const linkCerto = link.getAttribute("data-path")
//    console.log(linkCerto)
    link.style.fontWeight = "650";
  });



const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active.toString());
  event.currentTarget.setAttribute(
    "aria-label",
    active ? "Fechar Menu" : "Abrir Menu"
  );
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);