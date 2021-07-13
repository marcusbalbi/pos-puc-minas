FROM node:latest

WORKDIR /var/www/app

EXPOSE 3000

CMD ["npm", "start"]

