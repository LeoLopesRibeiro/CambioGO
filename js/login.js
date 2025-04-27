import { apiLogin } from "./api.js";
import { login, logout, isAuthenticated } from "./auth.js";

//arrumar a logica do login para que quando a pessoa estiver autenticada
//mostrar os cainhos certos e bloquear o usuario de ir em paginas que não fazem sentid ele ir

const form = document.getElementById("login-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);

  const response = await apiLogin(data.email, data.password);

  if (response) {
    // console.log(response);
    login(response.token);
    window.location.href = "../index.html";
  } else {
    alert("Login inválido. Verifique suas credenciais");
  }
});

// function renderCadastro(container) {
//   container.innerHTML = `
//        <div id="quadrado">
//       <div id="cadastre">
//           <img src="../img/logo.svg" alt="Logo CambioGo" height="40px" />
//           <p class="chamada">Cadastre-se</p>
//           <p class="preencher">Preencha o formulário</p>
//       </div>

//       <div id="form-container">
//           <form id="register-form">
//               <div id="name-container">
//                 <input type="text" name="name" id="name" placeholder="Insira seu nome" />
//               <input type="email" name="email" id="email"  placeholder="Insira seu e-mail"
//               />
//               <input type="password" name="password" id="password"
//                placeholder="Insira sua senha"
//               />
//               <input type="password" name="password" id="password"
//               placeholder="Confirme sua senha"
//              />
//               <input type="submit" value="Criar a minha conta" />
//             </div>
//             </form>
//       </div>
//   </div>
//     `;

  // const form = document.getElementById("login-form");
  // form.addEventListener("submit", async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(form);
  //   const data = Object.fromEntries(formData);

  //   console.log(data);

  //   const response = await apiLogin(data.email, data.password);

  //   if (response) {
  //     console.log(response);
  //     login(response.token);
  //     location.reload();
  //   } else {
  //     alert("Login inválido. Verifique suas credenciais");
  //   }
  // });
// }

// function renderProtectedPage(container) {
//   if (isAuthenticated) {
//     if (container != null) {
//       container.innerHTML = `
//         <h1>Favoritos</h1>

//         <button id="logout-btn">Sair</button>
//       `;

//     }
//   } else {
//     container.innerHTML = `
//         <h2>Voce não tem acesso a essa informação</h2>
//       `;
//   }
// }

// function renderPerfil(container) {
//   if (isAuthenticated) {
//     if (container != null) {
//       container.innerHTML = `
//           <h1>Perfil</h1>

//           <button id="logout-btn">Sair</button>
//         `;

//       document.getElementById("logout-btn").addEventListener("click", () => {
//         logout();
//         location.reload();
//       });
//     }
//   } else {
//     container.innerHTML = `
//           <h2>Voce não tem acesso a essa informação</h2>
//         `;
//   }
// }
