pipeline {
    agent {
        any {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Checkout') { 
            steps {
                 echo 'Successfully fetched from Git'
                }
            }
        stage('Creating Node Environment') { 
            steps {
                        nodejs(nodeJSInstallationName: 'nodejs18') {
                        bat 'npm install' 
                }
            }
        }
        stage('Code Analysis Test') {
            steps {  
                nodejs(nodeJSInstallationName: 'nodejs18') {
                bat 'node sonarqube-scanner.js'
                }
            }
        }
        stage('Project Build') {  
            steps {
                        bat 'npm run build' 
                }
            }
        stage('Hosted on Static Server') {  
            steps { 
                     bat 'npx serve -s build' 
                  }
            }
        stage('Selenium Testing') {
            steps { 
                bat 'node webdriver.js'
            }
        }    
    }
 }   

