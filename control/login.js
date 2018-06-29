const UserModel = require("../model/userModel");

function showMessage(msg) {
    let alertArea = document.querySelector("#alert-area");
    let template = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <span id="alert-msg">${msg}</span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
    alertArea.innerHTML = template;
}

function validateAuth(user, pass) {
    let um = new UserModel();
    return um.auth(user, pass);
}

function goTo(mod) {
    let curr = location.href.split('/');
    curr.pop();
    let next = curr.join('/') + '/' + mod + '.html';
    location.href = next;
}

$("document").ready(() => {
    $("form").submit((ev) => {
        ev.preventDefault();
        let staticUser = "admin@admin";
        let staticPass = "123";

        let inputEmail = $("#inputEmail").val();
        let inputPassword = $("#inputPassword").val();

        if (!validateAuth(inputEmail, inputPassword))
            showMessage('Invalid user or password');
        else
            goTo('system')
    })

    // $("#btnRegister").click(() => {
    //     goTo('register')
    // })
})