window.addEventListener('load', function() {

    let labelEmail = document.querySelector('.label-email');
    let inputEmail = document.querySelector('input.email');

    let labelPassword = document.querySelector('.label-password');
    let inputPassword = document.querySelector('input.password');

    inputEmail.addEventListener('focusin', function() {
        labelEmail.style.display = 'none';
    });

    inputEmail.addEventListener('focusout', function() {
        if (inputEmail.value != '') {
            labelEmail.style.display = 'none';
        } else {
            labelEmail.style.display = 'unset';
        }
    });

    inputPassword.addEventListener('focusin', function() {
        labelPassword.style.display = 'none';
    });

    inputPassword.addEventListener('focusout', function() {
        if (inputPassword.value != '') {
            labelPassword.style.display = 'none';
        } else {
            labelPassword.style.display = 'unset';
        }
    });

});