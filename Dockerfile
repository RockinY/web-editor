FROM node:8.11.1

LABEL maintainer="bran@corran.cn"

WORKDIR /app

# Bundle app source
COPY . .
RUN yarn install
RUN yarn global add serve
RUN yarn link && cd demo && yarn link draftjs-web-editor && yarn install && yarn build

EXPOSE 5000

# Start the server
CMD [ "yarn", "run", "deploy" ]
