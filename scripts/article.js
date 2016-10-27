var articles = [];
//make the new object
function Article (post){
  this.title = post.title;
  this.body = post.body;
  this.category= post.category;
};

//apply object properties in to new html chunk
Article.prototype.toHtml = function(){
  var $newArticle = $('.template').clone();
  $newArticle.find('.article-title').text(this.title);
  $newArticle.find('.body').html(this.body);
  $newArticle.removeClass('template');
  $newArticle.addClass('article');
  $newArticle.attr('data-category',this.category);
  return $newArticle;
};

//run portfolioContent through Article constructor
portfolioContent.forEach(function(ele){
  articles.push(new Article(ele));
});

//insert the new HTML
articles.forEach(function(article) {
  $('#home').append(article.toHtml());
});
