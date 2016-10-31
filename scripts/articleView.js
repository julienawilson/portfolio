var articleView = {};

articleView.handleMainNav = function(){
  $('#nav-box').on('click','.tab', function(){
    var $thisContent = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#'+$thisContent).show();
    $('title').text('Julien Wilson: '+($thisContent).toUpperCase());
  });
  $('#about').hide();
};

articleView.populateFilters = function() {
  $('article').not('.template').each(function() {


  });

};







articleView.handleMainNav();
