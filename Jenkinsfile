pipeline {
    agent {
        any {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
     stage('Build') { 
            steps {
                nodejs(nodeJSInstallationName: 'nodejs18') {
                bat 'npm install' 
                // sh 'npm install --save-dev sonarqube-scanner'
                }
            }
        }
    stages {
        stage('Test') {
            steps {  // test
                nodejs(nodeJSInstallationName: 'nodejs18') {
                bat 'node sonarqube-scanner.js'
                bat 'npm test'
                }
            }
        }
       
        stage('Run') { 
            steps {
                nodejs(nodeJSInstallationName: 'nodejs18') {
                bat 'npm start' 
                // sh 'npm install --save-dev sonarqube-scanner'
                }
            }
        }
        
    }   
}