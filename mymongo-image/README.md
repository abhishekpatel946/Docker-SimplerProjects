# MyMongo-image

Written by: * **Abhishek Patel** - (https://github.com/abhishekpatel946)

TO CREATE A CUSTOM IMAGE OF MONGO OR RUN MONGO IN ALPINE OS USING DOCKER CONTAINERIZATION.

### Cloning:
```
git clone https://github.com/abhishekpatel946/
```

### Running:
```
cd mymongo
```

```
dockerd 
```

```
docker build .
```

```
docker run <build ID>
```

```
docker ps
```

```
docker exec -it <Container Id> sh
```

```
mongo
```


## Features 

- Run mongoDB without installation.
- use alpine os.

### Prerequisites

* Docker
* Node

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


### Tested on:

+ Kali Linux - ROLLING



### Contact:
**abhishekpatel946@gmail.com**
