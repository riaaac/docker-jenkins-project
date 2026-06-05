pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Cypress') {
            steps {
                bat 'npx cypress run'
            }
        }

    }

    post {

        always {
            echo 'Execution Complete'
        }

        success {
            echo 'Tests Passed'
        }

        failure {
            echo 'Tests Failed'
        }
    }
}