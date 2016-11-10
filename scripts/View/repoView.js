(function(module){
  var repoView={};

  var repoCompiler = Handlebars.compile($('#git-template').html());

  repoView.renderRepos = function(){
    $('#gitAbout').empty().append(
      repos.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  repos.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
