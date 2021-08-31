FROM node:latest AS builder
WORKDIR /app

#FROM node:latest-alpine
#WORKDIR /app
RUN npm install -g nodemon
#COPY --from=builder /app ./
CMD ["npm", "run", "start"]
