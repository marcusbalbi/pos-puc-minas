FROM node:14-alpine3.10

WORKDIR /var/www/app

EXPOSE 4000

CMD ["npm", "start"]