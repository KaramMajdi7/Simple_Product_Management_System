# Stage 1: build
FROM node:16 AS development

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install
RUN npm install -g @angular/cli
RUN ng build angularFront

# Stage 2: run on nginx
FROM nginx:alpine
EXPOSE 80
COPY --from=development /usr/src/app/dist/angular-front /usr/share/nginx/html