# How to build the docker image with the express app
    - Go to the directory containing the express app
    - In the console terminal, run the command "docker build -t my-express-app ."


# How to run the docker container with the express app
    - In the console terminal, run the command "docker run -p 4000:3000 my-express-app"

# How to run the docker container with the express app in detached mode
    - In the console terminal, run the command "docker run -d -p 4000:3000 my-express-app"


# Test the running app in the browser
    - GO to the url "http://localhost:4000"
    

# Steps to deploy the expressjs container in the minikube and expose the pod to access it
    - Start the minikube with the command "minikube start"
    -   ##  Create a yaml file "my-express-app-deployment.yaml" in "/chart" folder with the following code:
        ```
            apiVersion: apps/v1
            kind: Deployment
            metadata:
                name: jenkins
            spec:
                replicas: 1
                selector:
                matchLabels:
                    app: jenkins
                template:
                    metadata:
                        labels:
                            app: jenkins
                    spec:
                      containers:
                        - name: jenkins
                          image: jenkinsci/blueocean
                          ports:
                            - containerPort: 8080
                          imagePullPolicy: Always
                          volumeMounts:
                            - mountPath: "/var/jenkins_home"
                              name: jenkins-data
                            - mountPath: "/var/run/docker.sock"
                              name: docker-daemon
                      volumes:
                        - name: jenkins-data
                          emptyDir: {}
                        - name: docker-daemon
                          hostPath:
                              path: "/var/run/docker.sock"
        ```
        
        
        
    - ##  Create a yaml file "my-express-app-service.yaml" in "/chart" folder with the following code:
        ```
            apiVersion: v1
            kind: Service
            metadata:
              name: my-express-app
            spec:
              selector:
                app: my-express-app
              ports:
              - port: 80
                targetPort: 3000
              type: NodePort
        ```
        
    - From the parent folder, run the below commands the deploy the app and create the service and access the express app in the browser
        1) kubectl create -f my-express-app-deployment.yaml
        2) kubectl create -f my-express-app-service.yaml
        3) minikube service my-express-app
        
# Steps to deploy the jenkins container in the minikube and expose the pod to access it
    - ## Create a yaml file "jenkins-deployment.yaml" in "/chart" folder with the following code:
        ```
            apiVersion: apps/v1
            kind: Deployment
            metadata:
              name: jenkins
            spec:
              replicas: 1
              selector:
                matchLabels:
                  app: jenkins
              template:
                metadata:
                  labels:
                    app: jenkins
                spec:
                  containers:
                    - name: jenkins
                      image: jenkinsci/blueocean
                      ports:
                        - containerPort: 8080
                      imagePullPolicy: Always
                      volumeMounts:
                        - mountPath: "/var/jenkins_home"
                          name: jenkins-data
                        - mountPath: "/var/run/docker.sock"
                          name: docker-daemon
                  volumes:
                    - name: jenkins-data
                      emptyDir: {}
                    - name: docker-daemon
                      hostPath:
                          path: "/var/run/docker.sock"
        ```
    - ## Create a yaml file "jenkins-service.yaml" in "/chart" folder with the following code:
        ```
            apiVersion: v1
            kind: Service
            metadata:
              name: jenkins
            spec:
              selector:
                app: jenkins
              ports:
              - port: 8080
                targetPort: 8080
              type: NodePort
        ```
    - From the parent folder, run the below commands the deploy the app and create the service and access the express app in the browser
        1) kubectl create -f jenkins-deployment.yaml
        2) kubectl create -f jenkins-service.yaml
        3) minikube service jenkins

# How to deploy the jenkins kubernetes pod using Helm:
    - install helm
    - run the command "helm init"
    - run the command "helm repo add codecentric https://codecentric.github.io/helm-charts"
    - run the command "helm install codecentric/jenkins --version 1.5.0"
    - Jenkins pod will be deployed and started. 
    - Commands to get external access link and jenkins security code will be given on installation.