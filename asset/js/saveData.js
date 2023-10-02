const submitBtn = $(".footer__submit");

var courseApi = "http://localhost:3000/users";

function createUser(data) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {});
}

const iconLogin = {
  "success": '<i class="fa-sharp fa-solid fa-circle-check"></i>',
  "error": '<i class="fa-sharp fa-solid fa-circle-exclamation"></i>',
}

const text = {
  "success": 'ĐĂNG KÝ THÀNH CÔNG',
  "error": 'ĐĂNG KÝ THẤT BẠI',
}

const color = {
  "success": '#008D45',
  "error": '#E30B29',
}

function loadNotify(type) {
  const notify = $('.app__notify');
  notify.innerHTML = `
  <div class="app__notify-icon" style="color: white">
    ${iconLogin[type]}
  </div>
  <h1 class="app__notify-text" style="color: white">
    ${text[type]}
  </h1>
  `
  notify.style.backgroundColor = color[type];
  notify.style.display = 'block';
}

function handleCreateForm() {
  submitBtn.onclick = function () {
    let footerForm = $('.footer__form')
    let userName = footerForm.querySelector('input[name="name"]').value;
    let userPhoneNumber = footerForm.querySelector('input[name="phone-number"]').value;
    let listOptions = footerForm.querySelector('#footer__option');
    let option = listOptions.options[listOptions.selectedIndex].text;
    let data = {
      userName: userName,
      userPhoneNumber: userPhoneNumber,
      option: option
    };
    createUser(data);
    loadNotify("success");
    // menu.classList.add('menuAppear');
  };
}


function start() {
  handleCreateForm();
}


start();
