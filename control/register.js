'use strict';
(function () {
    const UserModel = require('../model/userModel');

    function register() {
        let user = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            birthdate: $("#birthdate").val(),
            email: $("#email").val(),
            address: $("#address").val(),
            zip: $("#zip").val(),
            city: $("#city").val(),
        }

        let um = new UserModel();
        um.save(user);
    }

    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, (form) => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                } else {
                    register();
                }
                form.classList.add('was-validated');
            }, false);
        });

        $("#btnCancel").click(() => {
            history.back();
        })

    }, false);
})();