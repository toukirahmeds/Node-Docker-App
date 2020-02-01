pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                echo "Installing npm packages"
                sh 'npm install'
                echo "Successfully installed npm packages"
            }
        }
        stage('Test') { 
            steps {
                echo "Starting Test"
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo "Starting to deploy"
                echo "Starting to push into container registry"
                echo "Successfully pushed to container registry"
                echo "Starting to deploy into kubernetes"
                echo "Successfully deployed into kubernetes"
            }
        }
    }
}