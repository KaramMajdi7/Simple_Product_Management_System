# Simple_Product_Management_System

## Introduction

This documentation provides an overview of the "Simple Product Management System," a web-based application that enables retail store employees to manage and view product information. This project showcases my skills in frontend development using AngularJS, backend development using NestJS, interaction with a database using TypeORM, database storing using MySql, and containerization using Docker.

## Project Structure

The project is organized into the following components:

```plaintext
simple-product-management-system/
├── angular-frontend/
│   ├── Dockerfile
│   ├── angular.json
│   ├── package.json
│   ├── .gitignore
│   ├── projects
│       ├── angular-front  // For website components
│       ├── integrate 	 // For api services utilizing
│       ├── models 		// For the product interface
├── nest-backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── .gitignore
│   ├── src
│       ├── product
├── docker-compose.yml
```

In this structure, I have separated the frontend and backend components into their respective directories. The Dockerfile for the AngularJS frontend is located in the "angular-frontend" directory, same for the NestJS backend, and Docker Compose configuration is in the project root.

## Tech Stack Used

- **Frontend**: AngularJS
- **Backend**: NestJS
- **Deployment**: Docker
- **ORM**: TypeORM
- **Database**: MySQL

## Getting Started

To run the project components, you can follow these commands:

### Angular Frontend

```shell
ng serve angularFront
```

### NestJS Backend

```shell
npm run start:dev
```

### Docker

```shell
docker-compose up --build
```

This will start both the frontend and backend components and orchestrate them using Docker.

## Lets create our first product using Postman

Here we have the product/create url and the json data that will be sent with the post request

<img width="860" alt="product create link" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/cd2ba56d-cf7d-43b0-ae94-dedc672d2c89">


And we could see here the creation of the product message in Postman

<img width="421" alt="created product json" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/a914396f-9958-4b8f-9ee7-d98859a323d7">


## Frontend (AngularJS)

### Product Listing Page

- **Description**: The product listing page displays a list of all products along with their details, including the product's name and price.

After creating some products we could now go to the home page where the product listing could be seen

<img width="960" alt="web product created" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/7b61ac76-cf37-4504-9754-9152705e5949">


- **Features**:
  - Each product in the list has a "View Details" button, which, when clicked, in my case I have a page with the product's full details.

<img width="959" alt="product details" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/ace0f9d2-0efd-418f-b714-3e910ee2cb48">


### Add Product Form

- **Description**: The add product form allows users to add new products to the system. The form includes fields for the product's name and price.

Here is the form and we will now see the validation of the form in the frontend side.

<img width="960" alt="create product in web" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/3344a71a-7906-4342-893a-042e6e222cb2">

Also we could see the validation of the form

<img width="322" alt="error 1 in web" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/ac253c75-7c60-4ddb-807f-775d2deccbd7">


<img width="320" alt="error 2 in web" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/e30f3433-53ad-4586-bd9e-91223ef2ef13">


## Backend (NestJS)

### Product CRUD API

- **Description**: The backend provides API endpoints to perform CRUD (Create, Read, Update, Delete) operations on products, I have created the 4 operations, but tested 2 that are requested.

- **Endpoints**:
  - `POST /product/create`: Creates a new product.
  - `GET /product`: Retrieves a list of all products.

 We saw the create product. now let's see the get all using Postman

 <img width="865" alt="get postman" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/2f7ec26d-b3d1-4253-91ce-e75c183b90d6">


Here is the response

<img width="412" alt="products json in postman" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/c1b29035-f1ba-45c8-8b3d-bba635004421">


- **Database Interaction**:
  - Utilizes TypeORM to interact with the database for storing and retrieving product information, also my approach was code-first approach using type orm.

### MySQL

- **Description**: The system uses a MySQL database to store product information, and DBeaver was used to control the database, and visualize it.

Here is the database on DBeaver

<img width="749" alt="DBeaver" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/01ea8d91-b083-4360-a8c2-95641f74a620">


- **Database Structure**:
  - Product table with columns for the product's ID, name, and price was created.

## Docker

### Containerization

- **Description**: The frontend and backend applications are containerized using Docker to simplify the deployment process.

- **docker-compose.yml**:
  - Orchestrates the deployment of both the frontend and backend containers.
  - Manages container dependencies and configurations for the entire application.

Here we could see the images and the docker container

<img width="740" alt="docker image" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/a4fd6e20-9b23-4822-9dd1-0b4fb50a8f39">

<img width="742" alt="docker container" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/be05d970-c8f8-4844-8532-c8278c1916ea">


And here are the working images inside the docker container

<img width="284" alt="docker inside" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/d760d993-d6ea-4d5c-bd7c-05e0590ecf68">


## Testing

After successfully setting up and running the frontend and backend components, it's essential to test both parts of the application.

- **Frontend Testing**: I have verfied that the frontend components function as expected by interacting with the user interface and ensuring that products can be added and viewed correctly, which was shown above.

- **Backend Testing**: I have used Postman, and also made sure that the form validation also works in the server side.

<img width="464" alt="error in code" src="https://github.com/KaramMajdi7/Simple_Product_Management_System/assets/74671857/c4d81b98-e11d-4d2c-a051-7f543c2a6429">


## Conclusion

This "Simple Product Management System" project demonstrates a complete solution for retail store product management, covering frontend development using AngularJS, backend development using NestJS, interaction with a MySQL database using TypeORM, and containerization using Docker. The system allows store employees to manage products effectively, providing features for adding new products and viewing product details.
