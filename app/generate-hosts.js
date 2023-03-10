const nunjucks = require('nunjucks');
const fs = require('fs');

const TEMPLATE_PATH = './hosts.yml.j2';
const OUTPUT_PATH = './hosts.yml';

// Charger les informations de connexion SSH pour les hôtes cibles
const targetIp = process.env.TARGET_IP;
const ansibleUser = process.env.ANSIBLE_USER;
const ansibleSshPass = process.env.SSH_PASS;

// Charger les variables pour le modèle
const templateVars = {
  targetIp,
  ansibleUser,
  ansibleSshPass,
  // Ajouter d'autres variables ici, si nécessaire
};

// Compiler le modèle et écrire le résultat dans le fichier hosts.yml
nunjucks.configure({ autoescape: false });
const compiledTemplate = nunjucks.render(TEMPLATE_PATH, templateVars);
fs.writeFileSync(OUTPUT_PATH, compiledTemplate);

console.log(`Fichier ${OUTPUT_PATH} généré avec succès.`);