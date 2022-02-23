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
               
               sh 'docker build -t asia-south1-docker.pkg.dev/business-transformers/my-source-repo-suchita/nodejs-proj .'
          }
      }
    
    stage('Docker push to Artifact Registry')
    {       steps{
                sh 'gcloud auth configure-docker asia-south1-docker.pkg.dev/business-transformers/my-source-repo-suchita/nodejs-proj'
                sh 'docker push asia-south1-docker.pkg.dev/business-transformers/my-source-repo-suchita/nodejs-proj'
           }
    
       }
    
    
    
}
}
