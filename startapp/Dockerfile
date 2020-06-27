#TODO: bring the baseimage
FROM node:alpine

#TODO: create a working dir
WORKDIR /var/app

#TODO: bring all files
COPY ./package.json ./

#TODO: run installer
RUN npm install

#TODO: copy the all rest of the files
COPY . .

#TODO: default command
CMD ["npm", "start"]
