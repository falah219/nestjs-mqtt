# NestJS POST API with MQTT

## Description
A simple NestJS application that accepts POST requests and forwards the data to an MQTT broker. Includes Swagger API documentation and Docker deployment.

## Prerequisites
- Node.js 18+
- MQTT broker with the following credentials:
  - IP: 192.3.128.100
  - Port: 1883
  - Username: `demo`
  - Password: `@Dmin123456`

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run start
   ```

4. Access Swagger documentation:
   Navigate to [http://localhost:3000/api/v1](http://localhost:3000/api/v1).

## Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t nestjs-post-api .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 nestjs-post-api
   ```

3. Access the application at [http://localhost:3000](http://localhost:3000).
