export function isAuthenticated() {
  return localStorage.getItem("token") !== null;
}

export function login(token) {
  localStorage.setItem("token", token);
}

export function logout() {
  localStorage.removeItem("token");
}

if(isAuthenticated() && (window.location.pathname == "/pages/login.html" ||  window.location.pathname == "/pages/cadastro.html")){
    window.location.href = "../index.html";
}
if(!isAuthenticated() && window.location.pathname == "/pages/cambio.html"){
    window.location.href = "../index.html";
}
