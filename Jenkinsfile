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
            steps {
                        bat 'set PUBLIC_URL= https://676a-2405-201-c03d-30a4-a11e-da3f-76bb-ba56.in.ngrok.io:3000 && npm run build'
                }
            }
        stage('Selenium Test') {
            steps {  nodejs(nodeJSInstallationName: 'nodejs18') {
                        bat 'node webdriver.js'
             }
            }
        }    
    }
}   
