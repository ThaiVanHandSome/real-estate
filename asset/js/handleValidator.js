import Validator from "./Validator.js";

Validator({
    form: '#form__register',
    formGroup: '.form__group',
    btnSubmit: '#submit',
    rules: [
        Validator.isRequired('#name'),
        Validator.isRequired('#email'),
        Validator.isEmail('#email'),
        Validator.minLength('#password', 6),
        Validator.isRequired('#password__confirmation'),
        Validator.confirmation('#password__confirmation', function() {
            return $('#password').value
        })
    ],
    onSubmit: function(data) {
        console.log(data)
    }
})

Validator({
    form: '#form__login',
    formGroup: '.form__group',
    btnSubmit: '#submit',
    rules: [
        Validator.isRequired('#name'),
        Validator.isRequired('#email'),
        Validator.isEmail('#email'),
        Validator.minLength('#password', 6)
    ],
    onSubmit: function(data) {
        console.log(data)
    }
})