# MyNode with Express

Written by: * **Abhishek Patel** - (https://github.com/abhishekpatel946)

MYNODE IS A WEB APPLICATION USING NODE AND EXPRESS AND DEFINE SOME ROUTES.

### Cloning:
```
git clone https://github.com/abhishekpatel946/
```

### Running:
```
cd mynode
```

```
dockerd
```

```
docker build -t <username> / <taggedname> . 
```

```
docker run -p 8000:8000 <taggedname>
```

```
docker ps
```

## Features 

- Node application using Express.
- Routes ["/", "/login", "/register", "/logout"].

### Prerequisites

* Docker
* Node
* Express [optional]

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
