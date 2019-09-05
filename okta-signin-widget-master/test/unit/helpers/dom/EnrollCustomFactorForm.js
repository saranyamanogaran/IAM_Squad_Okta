define(['./Form'], function (Form) {

  return Form.extend({

    backLink: function () {
      return this.el('back-link');
    },

    buttonBar: function () {
      return this.$('.o-form-button-bar');
    },

    hasErrorBox: function () {
      return this.el('o-form-error-container').find('.infobox-error').length > 0;
    },

    errorBoxMessage: function () {
      return this.$('.o-form-error-container .infobox-error h4').text().trim();
    },

  });

});
