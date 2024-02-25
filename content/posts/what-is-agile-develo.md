---
cover: /home-header.png
title: What is Agile Development and why is it important? (new)
description: >-
  Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
  et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
  litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
  urna at turpis condimentum lobortis. Nulla facilisi. Sed auctor, libero nec
  fermentum.
tags:
  - tinacms
  - development
author: Jerry Deo
publishedAt: 2024-02-14T10:59:50.531Z
---

# Travel and Accommodation Booking Platform

This project implements a comprehensive hotel booking system with a discount management feature using ASP.NET Core API. It allows users to browse hotels, view room details, make reservations, and apply discount codes to reduce their booking costs. Hotel owners can manage hotel information, room types, and discounts through API endpoints.

## Prerequisites

* ASP.NET Core 7 SDK installed
* Docker installed

## Setup Guide

1. Clone the Project: Clone the project repository to your local machine using Git.

```bash
git clone github.com/LoaiMasri1/tap.git
```

1. Run the Project: Navigate to the project directory and run the following commands to start the project.

```bash
docker-compose -f docker-compose.yml -f docker-compose.override.yml build
```

```bash
docker-compose -f docker-compose.yml -f docker-compose.override.yml up
```

1. Access the Project: Open your browser and navigate to `http://localhost:7194` to access the project.
2. Stop the Project: To stop the project, run the following command.

```bash
docker-compose -f docker-compose.yml -f docker-compose.override.yml down
```

## Environment Variables

You should find a file with `appsettings.json` name in the `Tap.Service.API` directory of the project. This file contains the environment variables used by the project. You can change the values of these variables to suit your needs.

## API Documentation

You can find the API documentation Swagger UI at `http://localhost:7194/swagger/index.html`. You can also find the Postman collection directly from [here](https://documenter.getpostman.com/view/19681252/2s9YsJBC9w).

## Database Diagram

![Database Diagram](https://github.com/LoaiMasri1/tap/assets/90678867/eaa9d3bb-78b7-400f-b252-5f466d3c395a)

## Project Structure

This Project used the Clean Architecture approach to structure the project into layers. DDD is used to design the domain model and the business logic. The project is divided into the following layers:

* **API Layer**: This layer contains the API controllers.
* **Application Layer**: This layer contains the application services that implement the business logic.
* **Domain Layer**: This layer contains the domain models and the domain services.
* **Infrastructure Layer**: This layer contains the external services.
* **Persistence Layer**: This layer contains the database context and the repositories.
* **Contracts Layer**: This layer contains the shared contracts between the layers.

## Demo

You can find a demo for the project at `https://foothill-tap.azurewebsites.net/`, and the API documentation at `https://foothill-tap.azurewebsites.net/swagger/index.html`

## Notes

* To check the payment feature, just go through these steps:
  * Use the checkout API, which will provide you with a payment session ID and a publishable key.
  * I've set up a demo for testing the payment feature. You can utilize the card number `4242 4242 4242 4242` with any future date and any CVC code.
  * Locate the HTML page in the stripe-demo directory of the project. Open it, input the publishable key and payment session ID, then hit the "Pay" button.
