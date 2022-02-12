kubectl delete -f deploy.yaml -n default

docker build -t thundrcld.com/sessionservice .

microk8s ctr image rm thundrcld.com/sessionservice:latest

docker save thundrcld.com/sessionservice > image.tar
microk8s ctr image import image.tar 
rm image.tar

kubectl apply -f deploy.yaml -n default

docker image prune