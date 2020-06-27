# Startapp Node + mongoDB

Written by: * **Abhishek Patel** - (https://github.com/abhishekpatel946)

CONTAINERIZE THE NODE APPLICATION AND MONGODB DATABASE. COMPOSE USING DOCKER AND RUN ON DIFFERENT
CONTAINER'S. CONNECT THE APP WITH DATABASE USING DOCKER-COMPOSE AND DATABASE RUN AT PORT:27017 AND 
APPLICATION RUN AT PORT:8000.

### Cloning:
```
git clone https://github.com/abhishekpatel946/
```

### Running:
```
cd startapp
```

```
dockerd
```

```
mongod
```

```
docker-compose up --build
```

```
docker ps
```

## Features 

- Node application with MongoDB.
- Docker compose App with Database.

### Prerequisites

* Docker
* Node
* MongoDB

### Install requirements

* Using Debian, as root
```
curl -sL https://deb.nodesource.com/setup_14.x | bash -
```

```
apt-get install -y nodejs
```


* https://docs.docker.com/engine/install/

* Setup the repository

```
sudo apt-get update
```

```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

* Add Docker;s officials GPG key
```
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
```

* Verify the fingerprint

```
sudo apt-key fingerprint 0EBFCD88
```

* install MongoDB

* import the public key used by the package manager 
```
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
```

* install gnupg
```
sudo apt-get install gnupg
```

```
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
```

* Create a /etc/apt/sources.list.d/mongodb-org-4.2.list file for MongoDB
```
sudo apt-get install -y mongodb-org
```

```
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
```


### Tested on:

+ Kali Linux - ROLLING



### Contact:
**abhishekpatel946@gmail.com**
