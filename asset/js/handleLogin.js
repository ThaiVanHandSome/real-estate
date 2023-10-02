const formRegister = $("#form__register");
const formLogin = $("#form__login");
const registers = $$(".header__register");
const logins = $$(".header__login");
const overlay = $(".app__overlay");
const btnCloses = $$(".form__close");
const menu = $(".app__menu");
const close = $(".app__menu-close");

const formGroups = $$(".form__group");
const errorElements = $$(".form__error");

registers.forEach((register) => {
  register.onclick = function () {
    formRegister.style.display = "block";
    overlay.classList.add("overlayAppear");
    if (menu.classList.remove("menuAppear")) {
      menu.classList.remove("menuAppear");
    }
    if (close.classList.remove("btnCloseAppear")) {
      close.classList.remove("btnCloseAppear");
    }
  };
});

logins.forEach((login) => {
  login.onclick = function () {
    formLogin.style.display = "block";
    overlay.classList.add("overlayAppear");
    if (menu.classList.remove("menuAppear")) {
      menu.classList.remove("menuAppear");
    }
    if (close.classList.remove("btnCloseAppear")) {
      close.classList.remove("btnCloseAppear");
    }
  };
});

btnCloses.forEach((btnClose) => {
  btnClose.onclick = () => {
    formRegister.style.display = "none";
    formLogin.style.display = "none";
    overlay.classList.remove("overlayAppear");
  };
});

export default function exitForm() {
  formRegister.style.display = "none";
  formLogin.style.display = "none";
  formGroups.forEach((formGroup) => {
    if (formGroup.classList.remove("invalid")) {
      formGroup.classList.remove("invalid");
    }
  });
  errorElements.forEach((errorElement) => {
    errorElement.innerHTML = "";
  });
}
