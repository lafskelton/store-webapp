kubectl delete -f deploy.yaml -n default

docker build -t thundrcld.com/auth .

microk8s ctr image rm thundrcld.com/auth:latest

docker save thundrcld.com/auth > image.tar
microk8s ctr image import image.tar 
rm image.tar

kubectl apply -f deploy.yaml -n default

docker image prune