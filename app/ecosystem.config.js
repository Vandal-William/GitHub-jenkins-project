require('dotenv').config();
module.exports = {
  apps : [{
    name: 'GitHub-jenkins-project',
    script: 'index.js',
    autorestart: true,
    watch: true,
  }],

  deploy : {
    production : {
      user : process.env.VPS_USER,
      host : process.env.HOST,
      ref  : process.env.GIT_REF,
      repo : process.env.GIT_REPO,
      path : process.env.VPS_PATH,
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 startOrRestart',
      'pre-setup': ''
    }
  }
};
