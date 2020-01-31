pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 4200:4200' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'echo "Installing npm packages"'
                sh 'npm install'
                sh 'echo "Successfully installed npm packages"'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test'
            }
        }
    }
}