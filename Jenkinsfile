pipelines {
    agent {
        any {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    // stages {
    //     stage('Build') { 
    //         steps {
    //             nodejs(nodeJSInstallationName: 'nodejs18') {
    //             bat 'npm install' 
    //             // sh 'npm install --save-dev sonarqube-scanner'
    //             }
    //         }
    //     }
        stage('Test') {
            steps { 
                nodejs(nodeJSInstallationName: 'nodejs18') {
                bat 'node sonarqube-scanner.js'
                bat 'npm test'
                }
            }
        }
    }   
}