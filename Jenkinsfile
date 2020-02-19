pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Initialization') {
            sh 'npm install'
        }
        stage('Linting') {
            echo "Linting tool"
            sh 'npm run lint'
        }
        stage('Test')
        {
            echo "Starting to test"
            sh 'npm run test'
        } 
    }
}