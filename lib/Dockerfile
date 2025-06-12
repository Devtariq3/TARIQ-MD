FROM node:lts-buster
RUN git clone https://github.com/Devtariq3/TARIQ-MD/root/Devtariq3 
WORKDIR /root/Devtariq3 
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
