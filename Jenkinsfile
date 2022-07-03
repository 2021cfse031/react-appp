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
                bat 'npm install' 
                // sh 'npm install --save-dev sonarqube-scanner'
                }
            }
        }
        stage('Test') {
            steps {  // test
                nodejs(nodeJSInstallationName: 'nodejs18') {
                bat 'node sonarqube-scanner.js'
                }
            }
        }
        stage('Run') { 
            steps  {
                parallel { 
                    a: {  nodejs(nodeJSInstallationName: 'nodejs18') {
                     bat 'npm start' 
                    // sh 'npm install --save-dev sonarqube-scanner'
                       }
                    }
                    b: { bat 'python manage.py runserver --port=8001' 
                    // sh 'npm install --save-dev sonarqube-scanner'
                       }
                    }
                }
            }
        }
        stage('Start Bakend Server') {
            echo 'its completed successfully'
        }
    }   
}