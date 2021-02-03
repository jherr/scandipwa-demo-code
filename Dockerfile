FROM node:12
WORKDIR /usr/src/app
COPY . .

RUN yarn
WORKDIR /usr/src/app/growlers
EXPOSE 3000
CMD [ "yarn", "start" ]
