# Exemple Pipeline

```groovy
pipeline {
    
    agent any
    tools {
        nodejs 'node18'
    }

    stages {
        stage('Clone') {
            steps {
                sh "rm -rf *"
                sh "git clone https://github.com/Vandal-William/GitHub-jenkins-project"
            }
        }
        stage('install') {
            steps {
                dir('GitHub-jenkins-project') {
                    sh 'yarn'
                    sh 'yarn build'
                }
                dir('GitHub-jenkins-project/app') {
                    sh 'yarn'
                    sh 'npm install -g pm2'
                    
                }
            }
        }
        stage('Start') {
            steps {
                dir('GitHub-jenkins-project/app') {
                    sh 'scp -r /var/lib/jenkins/workspace/Pipeline-Project/app/.env  /var/lib/jenkins/workspace/MonPremierPipelineTrigger/GitHub-jenkins-project/app'
                   
                
                }
            }
        }
    }

    post {
        success {
            sh 'echo sucess'
            // Ici, vous pouvez ajouter des étapes supplémentaires à effectuer après le succès de la construction
        }

        failure {
            // Ici, vous pouvez ajouter des étapes supplémentaires à effectuer en cas d'échec de la construction
            sh 'echo Erreur'
        }
    }
}
```
