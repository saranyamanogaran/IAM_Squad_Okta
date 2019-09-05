define(['./Form'], function (Form) {

  var PASSWORD_FIELD = 'password';
  var CONFIRM_PASSWORD_FIELD = 'confirmPassword';

  return Form.extend({

    passwordField: function () {
      return this.input(PASSWORD_FIELD);
    },

    confirmPasswordField: function () {
      return this.input(CONFIRM_PASSWORD_FIELD);
    },

    setPassword: function (val) {
      var field = this.passwordField();
      field.val(val);
      field.trigger('change');
    },

    setConfirmPassword: function (val) {
      var field = this.confirmPasswordField();
      field.val(val);
      field.trigger('change');
    },

    getPasswordAutocomplete: function () {
      return this.autocomplete(PASSWORD_FIELD);
    },

    getConfirmPasswordAutocomplete: function () {
      return this.autocomplete(CONFIRM_PASSWORD_FIELD);
    },

    backLink: function () {
      return this.el('back-link');
    },

    hasPasswordFieldErrors: function () {
      return this.hasFieldErrors(PASSWORD_FIELD);
    },

    passwordFieldErrorMessage: function () {
      return this.fieldErrorMessage(PASSWORD_FIELD);
    },

    hasConfirmPasswordFieldErrors: function () {
      return this.hasFieldErrors(CONFIRM_PASSWORD_FIELD);
    },

    confirmPasswordFieldErrorMessage: function () {
      return this.fieldErrorMessage(CONFIRM_PASSWORD_FIELD);
    },

  });

});