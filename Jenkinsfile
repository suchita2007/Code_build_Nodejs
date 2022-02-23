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
    
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}
