pipeline {
    agent {
        docker {
            image 'ubuntu' 
            args '-p 4200:4200' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Initialize') {
            steps {
                sh 'apt-get update -y'
                sh 'apt-get install nodejs -y'
                sh 'apt-get install npm -y'
            }
            
        }
        stage('Build') { 
            steps {
                echo "Installing npm packages"
                sh 'npm install'
                echo "Successfully installed npm packages"
                sh 'apt-get install docker -y'
                docker build .
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