pipeline {
    agent any
    environment {
        HARBOR_REGISTRY = "registry.foothilltech.net"
        HARBOR_PROJECT = "tinacms"
        HARBOR_SECRET = credentials('harbor-secret')
        HARBOR_USER = "loai.masri@foothillsolutions.com"
        ANSIBLE_VAULT_PASSWORD = credentials('ansible-vault-password')
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    git credentialsId: 'tiacmsgithub', url: 'https://github.com/loaimasri/tina-demo.git', branch: 'main'
                }
            }
        }

        // stage('Login to Harbor') {
        //     steps {
        //         script {
        //             sh 'docker login $HARBOR_REGISTRY -u $HARBOR_USER -p $HARBOR_SECRET'
        //         }
        //     }
        // }

        stage("Install Ansible") {
            steps {
                script {
                    sh 'sudo apt install -y ansible'
                }
            }
        }

        stage("Decrypt Ansible Vault") {
            steps {
                script {
                sh  'echo "$ANSIBLE_VAULT_PASSWORD" > vault_password.txt; ' +
                    'ansible-vault decrypt vault.prod-secrets.yml --vault-password-file vault_password.txt --output .env; ' +
                    'rm vault_password.txt'
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
    post {
        always {
            script {
                sh 'echo Clean up untagged Docker images'
                sh 'docker system prune -f'
            }
        }
    }
}
