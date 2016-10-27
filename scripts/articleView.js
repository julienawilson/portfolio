var articleView = {};

articleView.handleMainNav = function(){
  $('#nav-box').on('click','.tab', function(){
    var $thisContent = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#'+$thisContent).show();
  });
  $('#about').hide();
};

articleView.handleMainNav();
