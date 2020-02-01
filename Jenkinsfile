pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                echo "Successfully installed npm packages"
                script {
                    docker.build("adfd")
                }
            }
        }
    }
}