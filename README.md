# Hotel Booking System Backend

This repository contains the backend code for the Hotel Booking System, developed using Express.js and TypeScript.

## Table of Contents

- [Getting Started](#getting-started)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Data Structure](#data-structure)

## Getting Started

This backend is designed to handle all operations associated with room management, guest management, and the booking system for a hotel. The system communicates with JSON files (`rooms.json`, `guests.json`, and `bookings.json`), simulating a database for the mentioned data.

## Setup and Installation

1. **Prerequisites**
   - Node.js and npm installed on your machine.
   - An IDE of choice (e.g., Visual Studio Code).

2. **Installation Steps**
   - Clone the repository.
   ```bash
   git clone https://github.com/dtulpa16/Post-Grad_Coding_Assesment-Hotel_Booking.git
   
- Navigate to the backend directory.
  ```bash
  cd backend
- Install the required packages.
  ```bash
  npm install
- Start the server.
  ```bash
  npm start
3. **Verify Installation**
- Ensure the server is running by sending a GET request to `http://localhost:5000/health`.

## API Endpoints

- **General**
  - `GET /health`: Check if the server is running.

- **Rooms**
  - `GET /api/rooms`: Retrieve all rooms.
  - `GET /api/rooms/:id`: Retrieve a specific room by its ID.
  - `POST /api/rooms`: Create a new room.
  - `PUT /api/rooms/:id`: Update a room's information by its ID.
  - `DELETE /api/rooms/:id`: Delete a specific room by its ID.

- **Guests**
  - `GET /api/guests`: Retrieve all guests.
  - `GET /api/guests/:id`: Retrieve a specific guest by its ID.
  - `POST /api/guests`: Register a new guest.
  - `PUT /api/guests/:id`: Update a guest's information by its ID.
  - `DELETE /api/guests/:id`: Delete a guest's record by its ID.

- **Bookings**
  - `GET /api/bookings`: Retrieve all bookings.
  - `GET /api/bookings/:id`: Retrieve a specific booking by its ID.
  - `POST /api/bookings`: Create a new booking.
  - `PUT /api/bookings/:id`: Update a booking's information by its ID.
  - `DELETE /api/bookings/:id`: Cancel a booking by its ID.


## Data Storage

1. **rooms.json**
   - Contains room data like room type, view, price per night, and availability status.
   
2. **guests.json**
   - Houses guest details such as name, email, phone number, and booking history.
   
3. **bookings.json**
   - Manages booking details including room ID, guest ID, check-in and check-out dates, and the overall price.
