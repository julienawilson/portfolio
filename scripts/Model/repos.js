(function(module){
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.when(
      $.get('/github/users/julienawilson/repos', function(data){
        repos.allRepos=data;
      }),
      $.get('/github/users/julienawilson/followers', function(data){
        repos.followers = data;
      })
    ).done(callback);
  };

  repos.withTheAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
