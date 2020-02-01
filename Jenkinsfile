pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build Image') { 
            steps {
                echo "Successfully installed npm packages"
                script {
                    dockerImage = docker.build("gcr.io/twisker/my-express-app:latest")
                }
            }
        }
        stage('Push Image to Registry') {
            steps {
                echo "Starting to push image to Google Container Registry"
                sh "docker images"
                script {
                    withCredentials([file(credentialsId: 'gce-password', variable: 'GC_KEY')]){
                        sh "cat '$GC_KEY' | docker login -u _json_key --password-stdin https://gcr.io"
                    }
                }
            }
        }
    }
}