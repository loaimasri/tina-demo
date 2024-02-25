pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                git https://github.com/loaimasri/tina-demo.git
            }
        }
        
        stage('Remove Old Container') {
            steps {
                // Remove the old container if it exists
                sh 'docker rm -f tinacms || true'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    dockerImage = docker.build('tina:latest', '.')
                }
            }
        }
        
        stage('Run Docker Container') {
            steps {
                // Run the Docker container
                script {
                    dockerImage.run('-p 3000:3000 -d --name tinacms')
                }
            }
        }
    }
}
