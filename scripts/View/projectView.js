//IIFE
(function(module){

  var projectView = {};

//control Tab clicking
  // projectView.handleMainNav = function(){
  //   $('#about').hide();
  //   $('#nav-box').on('click','.tab', function(){
  //     var $thisContent = $(this).attr('data-content');
  //     $('.tab-content').hide();
  //     $('#'+$thisContent).fadeIn();
  //     $('title').text('Julien Wilson: '+($thisContent).toUpperCase());
  //   });
  // };

//runs the category-filter interactivity
  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('.project').hide();
        $('.project[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('.project').fadeIn();
      }
    });
  };

//builds the page
  projectView.renderIndexPage = function(){
    Project.allProjects.forEach(function(project) {
      $('#home').append(project.toHtml('#project-template'));
      if($('#category-filter option[value="'+project.category+'"]').length === 0){
        $('#category-filter').append(project.toHtml('#category-template'));
      };
      $('footer span').text(Project.numProjects());
    });
  };
  //
  // projectView.handleMainNav();
  projectView.handleCategoryFilter();
  Project.fetchAll(projectView.renderIndexPage);

  module.projectView = projectView;
})(window);
