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
                script {
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
                script {
                    sh './scripts/build-and-deploy.sh local' // for local build, it should be used 'prod' for production build
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh './scripts/run-compose.sh local' // for local build, it should be used 'prod' for production build
                }
            }
        }
    }
}
