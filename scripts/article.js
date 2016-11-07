//IIFE
(function(module) {
  //make the new object
  function Article (post){
    for (key in post){
      this[key] = post[key];
    }
  };

  Article.allArticles = [];


//grabs the template, inserts from object properties, creates html
  Article.prototype.toHtml = function(scriptTemplateId) {
    var template = Handlebars.compile($(scriptTemplateId).text());
    return template(this);
  };


//takes input array and creates a new array of Article Objects
  Article.loadAll = function(inputData){
    Article.allArticles = inputData.map(function(elem){
      return new Article(elem);
    });
  };

//grabs data from JSON, calls loadAll() on it, then renderIndexPage()
  Article.fetchAll = function(){
    $.getJSON('Data/portfolioContent.json', function(data, msg, xhr) {
      Article.loadAll(data);
      localStorage.blogArticles = JSON.stringify(data);
      localStorage.eTag = xhr.getResponseHeader('ETag');
      articleView.renderIndexPage();
    });
  };

//counts the number of articles
  Article.numArticles=function(){
    return Article.allArticles.reduce(function(acc, cur){
      acc = acc + 1;
      return acc;
    },0);
  };

//END IFFE
  module.Article = Article;
})(window);
