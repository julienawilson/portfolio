//IIFE
(function(module){

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

  articleView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('.article').hide();
        $('.article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('.article').fadeIn();
      }
    });
  };

  articleView.renderIndexPage = function(){
    Article.allArticles.forEach(function(article) {
      $('#home').append(article.toHtml('#article-template'));
      if($('#category-filter option[value="'+article.category+'"]').length === 0){
        $('#category-filter').append(article.toHtml('#category-template'));
      };
    });
  };


  articleView.handleMainNav();
  articleView.handleCategoryFilter();
  Article.fetchAll();

  module.articleView = articleView;
})(window);