const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getTeams', mid.requiresLogin, controllers.Team.getTeams);

  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

  app.post('/changePassword', mid.requiresLogin, controllers.Account.changePassword);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.get('/builder', mid.requiresLogin, controllers.Team.makerPage);
  app.post('/builder', mid.requiresLogin, controllers.Team.makeTeam);
  app.delete('/deleteTeam', mid.requiresLogin, controllers.Team.deleteTeam);

  app.get('/data', mid.requiresLogin, controllers.Data.loadData);

  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
