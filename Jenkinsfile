pipeline {
  agent any
  tools {nodejs "NodeJs"}
  stages {
        
    stage('Git') {
      steps {
        git branch: 'main', credentialsId: 'github', url: 'https://github.com/suchita2007/Code_build_Nodejs.git'
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
               
               sh 'docker build -t asia-south1-docker.pkg.dev/business-transformers/my-source-repo-suchita/nodejs-proj:${BUILD_NUMBER} .'
          }
      }
    
    stage('Docker push to Artifact Registry')
    {       steps{
                sh 'gcloud auth configure-docker asia-south1-docker.pkg.dev --quiet'
                sh 'docker push asia-south1-docker.pkg.dev/business-transformers/my-source-repo-suchita/nodejs-proj:${BUILD_NUMBER}'
           }
    
       }
      
       // stage('Deploy Staging') {
         //   steps{
           /*     git branch: 'main', credentialsId: 'github-1', url: 'https://github.com/suchita2007/Code_build_Nodejs.git'
                step([$class: 'KubernetesEngineBuilder', 
                        projectId: "business-transformers",
                        clusterName: "cluster-vatan",
                        zone: "asia-south1",
                        manifestPattern: 'k8s/',
                        credentialsId: "business-transformers",
                        verifyDeployments: true])
            }
        }*/
    stage('Wait for SRE Approval') {
         steps{
           timeout(time:12, unit:'HOURS') {
              input message:'Approve deployment?', submitter: 'sre-approvers'
           }
         }
        }
        stage('Hello Print stage') {
         steps{
           sh 'echo hello world'
           }
         }

    stage('Updating tag')
    {       steps{
                sh 'sed -i "s!currenttag!${BUILD_NUMBER}!g" k8s/deployment.yaml '
               
           }
    
       }

       stage('Deploy Production') {
            steps{
                 //git branch: 'main', credentialsId: 'github-1', url: 'https://github.com/suchita2007/Code_build_Nodejs.git'
                //sh 'sed -i "s!currenttag!${BUILD_NUMBER}!g" k8s/deployment.yaml '
              sh 'gcloud container clusters get-credentials cluster-vatan --zone asia-south1 --project business-transformers'
              sh 'kubectl apply -f k8s-dev/'

               /* step([$class: 'KubernetesEngineBuilder', 
                        projectId: "business-transformers",
                        clusterName: "cluster-vatan",
                        zone: "asia-south1",
                        manifestPattern: 'k8s/',
                        credentialsId: "business-transformers",
                        verifyDeployments: true])*/
            }
        } 
    
    
}
}
