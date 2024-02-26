pipeline {
    agent any
    environment {
        HARBOR_REGISTRY = "registry.foothilltech.net"
        HARBOR_PROJECT = "tinacms"
        HARBOR_SECRET = credentials('jenkinsharbor4')
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
         stage('Tag and Push to Harbor Registry') {
            steps {
                // Tag the Docker image for Harbor registry
                script {
                    sh "docker tag tina:latest $HARBOR_REGISTRY/$HARBOR_PROJECT/tina:latest"
                }
                // Push the Docker image to Harbor registry
                script {
                    withCredentials([usernamePassword(credentialsId: 'jenkinsharbor3', usernameVariable: 'HARBOR_USERNAME', passwordVariable: 'HARBOR_PASSWORD')]) {
                        sh "docker login -u $HARBOR_USERNAME -p $HARBOR_PASSWORD $HARBOR_REGISTRY"
                        sh "docker push $HARBOR_REGISTRY/$HARBOR_PROJECT/tina:latest"
                    }
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
