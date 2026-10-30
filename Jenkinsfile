pipeline {
    agent any

    stages {
        stage('Descarregar codi') {
            steps {
                checkout scm
                sh 'ls -la'
            }
        }

        stage('Executar JS') {
            steps {
                sh 'node --version'
                sh 'node app.js Daniel'
            }
        }

        stage('Stages en paral·lel') {
            parallel {
                stage('Paral·lel 1') {
                    steps {
                        echo 'Hola des de la stage paral·lela 1'
                        sh 'sleep 3'
                        echo 'Stage paral·lela 1 acabada'
                    }
                }
                stage('Paral·lel 2') {
                    steps {
                        echo 'Hola des de la stage paral·lela 2'
                        sh 'sleep 3'
                        echo 'Stage paral·lela 2 acabada'
                    }
                }
            }
        }
    }
}
