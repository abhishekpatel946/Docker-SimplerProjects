# bring base image
FROM node:alpine 

# create a working dir
WORKDIR /usr/nodeapp

# bring all files
COPY ./package.json ./

# run installer
RUN npm install
COPY ./ ./

# default command
CMD [ "npm", "start" ]