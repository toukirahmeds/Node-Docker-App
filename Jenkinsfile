pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Initialization') {
            steps {
                sh 'npm install'
            }
        }
        stage('Linting') {
            steps {
                echo "Linting tool"
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                echo "Starting to test"
                sh 'npm run test'
            }
        } 
    }
}