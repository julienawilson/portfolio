//IIFE
(function(module) {
  //make the new object
  function Article (post){
    for (key in post){
      this[key] = post[key];
    }
  };

  Article.allArticles = [];

  Article.prototype.toHtml = function(scriptTemplateId) {
    var template = Handlebars.compile($(scriptTemplateId).text());
    return template(this);
  };

  Article.loadAll = function(inputData){
    Article.allArticles = inputData.map(function(elem){
      return new Article(elem);
    });
  };

  Article.fetchAll = function(){
    $.getJSON('Data/portfolioContent.json', function(data, msg, xhr) {
      Article.loadAll(data);
      localStorage.blogArticles = JSON.stringify(data);
      localStorage.eTag = xhr.getResponseHeader('ETag');
      articleView.renderIndexPage();
    });
  };

  Article.numArticles=function(){
    return Article.allArticles.reduce(function(acc, cur, idx, array){
      acc = acc + 1;
      return acc;
    },0);
  };

  module.Article = Article;
})(window);
