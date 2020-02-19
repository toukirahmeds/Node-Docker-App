pipeline {
    agent {
        docker {
            image "node:12.14.0-alpine"
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Initialization') {
            steps {
                sh 'npm install'
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

