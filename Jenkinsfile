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
        stage('Initialize') {
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage('Build') { 
            steps {
                echo "Installing npm packages"
                sh 'npm install'
                echo "Successfully installed npm packages"
                sh 'docker build .'
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