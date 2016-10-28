var articles = [];
//make the new object
function Article (post){
  for (key in post){
    this[key] = post[key];
  }
};

//apply object properties in to new html chunk
Article.prototype.toHtml = function(){
  var source = $('#article-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

//run portfolioContent through Article constructor
portfolioContent.forEach(function(ele){
  articles.push(new Article(ele));
});

//insert the new HTML
articles.forEach(function(article) {
  $('#home').append(article.toHtml());
});
