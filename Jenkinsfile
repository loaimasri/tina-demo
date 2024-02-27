pipeline {
    agent any
    environment {
        HARBOR_REGISTRY = "registry.foothilltech.net"
        HARBOR_PROJECT = "tinacms"
        HARBOR_SECRET = credentials('jenkinsharbor3')
    }
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
        
        
        
         stage('Build Docker Image') {
  steps {
    // Build the Docker image with the intended tag (replace 'v1.0.0' with your desired version)
    script {
      sh 'docker build . -t registry.foothilltech.net/tinacms/repository'
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
