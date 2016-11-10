(function(module){
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url:'https://api.github.com/users/julienawilson/repos',
      type:'GET',
      headers:{'Authorization':'token '+githubToken},
      success: function(data,message,xhr){
        repos.allRepos=data;
        callback(data);}
    });
  };

  repos.withTheAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
