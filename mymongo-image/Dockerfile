#TODO: step 1 : want to need a OS
FROM alpine

#TODO: step 2 : install a software
# RUN apk add binutils
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
Run echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0

#TODO: step 2.5 :  configure that software
VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017

#TODO: step 3 : set default commands
CMD [ "mongod" ]
