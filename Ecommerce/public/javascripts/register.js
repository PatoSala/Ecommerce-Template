window.addEventListener('load', function() {
    let labelName = document.querySelector('.label-register-name');
    let labelEmail = document.querySelector('.label-register-email');
    let labelPass = document.querySelector('.label-register-pass');
    let labelConfirmPass = document.querySelector('.label-register-confirmPass');

    let inputName = document.querySelector('.input-register-name');
    let inputEmail = document.querySelector('.input-register-email');
    let inputPass = document.querySelector('.input-register-pass');
    let inputConfirmPass = document.querySelector('.input-register-confirmPass');

    $(inputName).focusin(function() {
        $(labelName).hide();
    });

    $(inputName).focusout(function() {
        if (inputName.value != '') {
            $(labelName).hide();
        } else {
            $(labelName).show();
        }
    });

    $(inputEmail).focusin(function() {
        $(labelEmail).hide();
    });

    $(inputEmail).focusout(function() {
        if (inputEmail.value != '') {
            $(labelEmail).hide();
        } else {
            $(labelEmail).show();
        }
    });

    $(inputPass).focusin(function() {
        $(labelPass).hide();
    });

    $(inputPass).focusout(function() {
        if (inputPass.value != '') {
            $(labelPass).hide();
        } else {
            $(labelPass).show();
        }
    });

    $(inputConfirmPass).focusin(function() {
        $(labelConfirmPass).hide();
    });

    $(inputConfirmPass).focusout(function() {
        if (inputConfirmPass.value != '') {
            $(labelConfirmPass).hide();
        } else {
            $(labelConfirmPass).show();
        }
    });

    //Front Validations

    let validationErrors = [];

    // empty field validationErrors

    // Name

    $(inputName).focusout(function() {
        if (inputName.value == "") {
            $(inputName).addClass('error');
            validationErrors.push({ name: "Field is required" });
            console.log(validationErrors)
        } else {
            $(inputName).removeClass('error');
        }
    });

    // Email

    $(inputEmail).focusout(function() {
        if (inputEmail.value == "") {
            $(inputEmail).addClass('error');
            validationErrors.push({ email: "Field is required" });
            console.log(validationErrors);
        } else {
            $(inputEmail).removeClass('error');
        }
    });

    // Password
    $(inputPass).focusout(function() {
        if (inputPass.value != inputConfirmPass.value || inputPass.value == "") {
            if (inputPass.value == "") {
                $(inputPass).addClass('error');
            } else {
                $(inputPass).addClass('error');
                $(inputConfirmPass).addClass('error');
            }
        } else {
            $(inputPass).removeClass('error');
            $(inputConfirmPass).removeClass('error');
        }
    });

    // Confirm Password

    $(inputConfirmPass).focusout(function() {
        if (inputPass.value != inputConfirmPass.value || inputConfirmPass.value == "") {
            if (inputConfirmPass.value == "") {
                $(inputConfirmPass).addClass('error');
            } else {
                $(inputPass).addClass('error');
                $(inputConfirmPass).addClass('error');
            }
        } else {
            $(inputPass).removeClass('error');
            $(inputConfirmPass).removeClass('error');
        }
    });
})