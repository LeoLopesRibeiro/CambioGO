export function isAuthenticated() {
  return localStorage.getItem("token") !== null;
}

export function login(token) {
  localStorage.setItem("token", token);
}

export function logout() {
  localStorage.removeItem("token");
}

// console.log(window.location.pathname);
if(isAuthenticated() && (window.location.pathname == "/pages/login.html" ||  window.location.pathname == "/pages/cadastro.html")){
    window.location.href = "../index.html";
}
if(!isAuthenticated() && window.location.pathname == "/pages/perfil.html"){
    window.location.href = "../index.html";
}
