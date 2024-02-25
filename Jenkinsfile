pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
               script{
                git credentialsId: 'tiacmsgithub', url: 'https://github.com/loaimasri/tina-demo.git', branch: 'main'
               }
            }
        }
        
        stage('Copy .env file') {
            steps {
                // Copy .env file from home directory to cloned repository
                script {
                    sh 'cp ~/.env ./'
                }
            }
        }
        
      stage('Remove Old Container') {
            steps {
                // Remove the old container if it exists
                script{
                sh 'sudo docker rm -f tinacms || true'
                }
            }
        }  
        
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script{
                sh 'sudo docker build . -t tina'
                }
            }
        }
        
        stage('Run Docker Container') {
            steps {
                script{
                // Run the Docker container
            sh 'sudo docker run -p 3000:3000 -d --name tinacms tina'
                }
            }
        }
    }
}
