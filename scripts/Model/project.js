//IIFE
(function(module) {
  //make the new object
  function Project (post){
    for (key in post){
      this[key] = post[key];
    }
  };

  Project.allProjects = [];


//grabs the template, inserts from object properties, creates html
  Project.prototype.toHtml = function(scriptTemplateId) {
    var template = Handlebars.compile($(scriptTemplateId).text());
    return template(this);
  };


//takes input array and creates a new array of Project Objects
  Project.loadAll = function(inputData){
    Project.allProjects = inputData.map(function(elem){
      return new Project(elem);
    });
  };

  Project.getFromJSON = function(nextFunction){
    $.getJSON('Data/portfolioContent.json', function(data, msg, xhr) {
      Project.loadAll(data);
      localStorage.blogProjects = JSON.stringify(data);
      localStorage.ETag = xhr.getResponseHeader('ETag');
      nextFunction();
    });
  };


//grabs data from JSON, calls loadAll() on it, then renderIndexPage()
  Project.fetchAll = function(nextFunction){
    if(localStorage.blogProjects){
      $.ajax({
        type: 'HEAD',
        url:'Data/portfolioContent.json',
        complete: function(xhr){
          //console.log('I checked the etag');
          if (localStorage.ETag||localStorage.ETag !== xhr.getResponseHeader('ETag')){
            Project.getFromJSON(nextFunction);
          }else{
            Project.loadAll(JSON.parse(localStorage.blogProjects));
            nextFunction();
          }
        }
      });
    }else{
      Project.getFromJSON(nextFunction);
    };
  };


//counts the number of projects
  Project.numProjects=function(){
    return Project.allProjects.reduce(function(acc, cur){
      acc = acc + 1;
      return acc;
    },0);
  };

//END IFFE
  module.Project = Project;
})(window);
