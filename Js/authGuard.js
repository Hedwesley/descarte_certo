function verificarLoginAntesDeAcessar(url) {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (usuario && usuario.nome) {
    window.location.href = url;
  } else {
    alertComRedirect(
      "Faça login para acessar esta funcionalidade.",
      "/login.html?msg=loginNecessario"
    );
  }
}
