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
                    withCredentials([usernamePassword( credentialsId: 'toukir-twisker-gce', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        docker.withRegistry('https://gcr.io', 'toukir-twisker-gce') {
                        }
                    }
                }
            }
        }
    }
}