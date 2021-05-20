FROM node:14-alpine3.10

WORKDIR /var/www/app

EXPOSE 3000

CMD ["node", "index.js"]