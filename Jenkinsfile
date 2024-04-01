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

        // stage('Login to Harbor') {
        //     steps {
        //         script {
        //             sh 'docker login -u $HARBOR_REGISTRY -p $HARBOR_SECRET $HARBOR_REGISTRY'
        //         }
        //     }
        // }


        // stage('Push Docker Image') {
        //     steps {
        //         script {
        //             sh 'docker push $HARBOR_REGISTRY/$HARBOR_PROJECT/tina-demo:latest'
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
                sh  'echo "${ANSIBLE_VAULT_PASSWORD}" > vault_password.txt; ' +
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

        stage('Cleanup') {
            steps {
                script {
                    sh 'echo Clean up untagged Docker images'
                    sh 'docker image prune -f'
                }
            }
        }
        
    }
}
