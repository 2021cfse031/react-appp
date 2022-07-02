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
                nodejs(nodeJSInstallationName: 'UI') {
                sh 'npm install' 
                }
            }
        }
    }
}