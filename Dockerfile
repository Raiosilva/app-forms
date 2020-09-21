FROM node:14

ENV INSTALL_PATH /app-forms

RUN npm install -g @angular/cli

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY . .

RUN npm install

CMD ["npm", "start"]