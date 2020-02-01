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
                sh "docker container ls -a"
                script {
                    docker.withRegistry("https://gcr.io", "toukir@twisker.io") {
                        dockerImage.push();
                    }
                }
            }
        }
    }
}