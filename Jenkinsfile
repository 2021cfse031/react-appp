pipeline {
    agent {
        any {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                nodejs(nodeJSInstallationName: 'nodejs18') {
                sh 'npm install' 
                sh 'npm start'
                }
            }
        }
        // stage('Test') {
        //     steps { 
        //         nodejs(nodeJSInstallationName: 'nodejs18') {
        //         sh 'node sonarqube-scanner.js'
        //         }
        //     }
        // }
    }   
}