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

Article.loadAll = function(inputData) {
  inputData.forEach(function(ele) {
    Article.allArticles.push(new Article(ele));
  });
};

Article.fetchAll = function(){
  console.log('vlur');
  $.getJSON('Data/portfolioContent.json', function(data, msg, xhr) {
    console.log(msg);
    Article.loadAll(data);
    localStorage.blogArticles = JSON.stringify(data);
    localStorage.eTag = xhr.getResponseHeader('ETag');
    articleView.renderIndexPage();
  });
};
