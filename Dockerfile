#FROM node:7.4.0-slim
#FROM grapple
#FROM hypriot/rpi-node
FROM amble/nodemonjs7-pi

WORKDIR /app/dist
COPY . /app

RUN npm install -g simple-angular-server

EXPOSE 5200

CMD [ "angularserver", "--port", "5200" ]

