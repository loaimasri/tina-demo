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
    // Build the Docker image with the intended tag (replace 'v1.0.0' with your desired version)
    script {
      sh 'docker build . -t registry.foothilltech.net/tinacms/repository'
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
                    sh "echo 'osama 1'"
                    withCredentials([string(credentialsId: HARBOR_SECRET, variable: 'jenkinsharbor3')]) {
                        sh "echo 'osama 2'"
                        sh "docker push registry.foothilltech.net/tinacms/repository"
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
