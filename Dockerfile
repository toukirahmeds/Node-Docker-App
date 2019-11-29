FROM node
WORKDIR /workspace
COPY package.json /workspace
RUN npm install
COPY . /workspace
CMD npm start
EXPOSE 3000