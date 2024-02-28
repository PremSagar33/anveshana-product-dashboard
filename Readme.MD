# Anveshana Parts Search Application

This project consists of a React front-end and a Go back-end that work together to provide a search interface for electronic parts.

## Front-end (React)

The front-end is a React application that provides a user interface for searching electronic parts and displaying responses from the back-end.

### Prerequisites

- Node.js and npm must be installed. You can download them from [Node.js website](https://nodejs.org/).

### Getting Started

To get the front-end running:

1. Navigate to the front-end directory:

    ```sh
    cd anveshana/frontend/
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Back-end (Go)

The back-end is a Go server that handles API requests from the front-end and sends back search results.

### Prerequisites

- Go must be installed. You can download it from [Go website](https://golang.org/dl/).

### Getting Started

To get the back-end running:

1. Navigate to the back-end directory:

    ```sh
    cd anveshana/backend/main/
    ```

2. Start the Go main:

    ```sh
    go run main.go
    ```

The server will start and listen for requests on `http://localhost:8080`.

### API Endpoint

The back-end defines the following POST endpoint:

- `/api/message`: Accepts a search term in the request body and responds with a success message.

## Configuration

To have the front-end proxy requests to the back-end, ensure that your `package.json` file in the React project includes the following line:

```json
"proxy": "http://localhost:8080"
