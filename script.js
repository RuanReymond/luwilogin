// script.js - lógica de demonstração (sem backend real)

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  const forgotLink = document.getElementById("forgot-link");
  const goToRegister = document.getElementById("go-to-register");
  const goToLogin = document.getElementById("go-to-login");

  const popupOverlay = document.getElementById("popup-overlay");
  const popupMessage = document.getElementById("popup-message");
  const popupClose = document.getElementById("popup-close");

  let cadastroConcluido = false;

  // Mostra o popup com uma mensagem
  function showPopup(message) {
    popupMessage.textContent = message;
    popupOverlay.classList.add("show-popup");
  }

  // Fecha o popup
  function hidePopup() {
    popupOverlay.classList.remove("show-popup");
  }

  // Troca entre a tela de login e a de cadastro
  function showScreen(screenToShow) {
    [loginForm, registerForm].forEach((screen) => {
      screen.classList.remove("active-screen");
    });
    screenToShow.classList.add("active-screen");
  }

  // Envio do login
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showPopup("Login efetuado com sucesso");
  });

  // Esqueci a senha
  forgotLink.addEventListener("click", (event) => {
    event.preventDefault();
    showPopup("Link de recuperação enviado no email");
  });

  // Ir para tela de cadastro
  goToRegister.addEventListener("click", (event) => {
    event.preventDefault();
    showScreen(registerForm);
  });

  // Voltar para tela de login
  goToLogin.addEventListener("click", (event) => {
    event.preventDefault();
    showScreen(loginForm);
  });

  // Envio do cadastro
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const senha = registerForm.querySelectorAll('input[type="password"]')[0]
      .value;
    const confirmarSenha = registerForm.querySelectorAll(
      'input[type="password"]',
    )[1].value;

    if (senha !== confirmarSenha) {
      showPopup("As senhas não coincidem");
      return;
    }

    cadastroConcluido = true;
    showPopup("Cadastro realizado com sucesso");
    registerForm.reset();
  });

  // Fechar popup
  popupClose.addEventListener("click", () => {
    hidePopup();
    // Se o cadastro foi concluído com sucesso, volta para o login
    if (cadastroConcluido) {
      cadastroConcluido = false;
      showScreen(loginForm);
    }
  });

  popupOverlay.addEventListener("click", (event) => {
    if (event.target === popupOverlay) {
      hidePopup();
    }
  });
});
