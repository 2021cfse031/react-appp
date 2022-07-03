pipeline {
  agent { any { image 'python.3.7.2' } }
  stages {
    stage('checkout') {
    steps {          
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'kiran', url: 'git@github.com:2021cfse031/react-appp.git']]])
      } 
    }  
    stage('build') {
      steps {
        bat 'virtualenv -p python3 testenv'
      }
    }
    stage('test') {
      steps {
        bat 'cd testenv/Scripts/activate'
      }   
    }
  }
}