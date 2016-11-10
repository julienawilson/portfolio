(function(module){

  var contactController = {};

  contactController.reveal = function(){
    $('.tab-content').hide();
    $('#contact').fadeIn();
    console.log('contact render');
  };


  module.contactController = contactController;
})(window);
