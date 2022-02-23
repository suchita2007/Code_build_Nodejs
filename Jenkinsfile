pipeline {
  agent any
  tools {nodejs 'node'}
  stages {
        
    stage('Git') {
      steps {
        git branch: 'main', credentialsId: 'github-1', url: 'https://github.com/suchita2007/Code_build_Nodejs.git'
      }
    }
     
    stage('install') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build') {
      steps {
         sh 'npm run build'
      }
    } 
    
    stage('Build Docker image'){
          steps{
               sh 'docker build -t suchita2007/node-js .'
          }
      }
    stage('Docker push to DockerHub')
       {       steps{
                  withCredentials([string(credentialsId: 'DOCKER_HUB_PASSWORD2', variable: 'DOCKER_HUB_PASSWORD2')]) {
                              sh 'docker login -u suchita2007 -p ${DOCKER_HUB_PASSWORD2}'
                }
                sh 'docker push suchita2007/node-js'
           }
       }
    
    
    
}
}
