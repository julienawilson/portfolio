(function(module){

  var projectController = {};

  projectController.reveal = function(){
    $('.tab-content').hide();
    $('#home').fadeIn();
  };

  module.projectController = projectController;
})(window);
