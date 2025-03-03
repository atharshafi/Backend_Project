# Node.js Backend Application

This is a simple Node.js backend application built using Express.js. It provides a few endpoints to demonstrate basic functionality, including request logging, welcome messages, user information, and data fetching from an external API.

## Features

1. **API Endpoints**:
   - **GET `/`**: A welcome message in JSON format.
   - **GET `/about`**: Returns JSON formatted information about yourself.
   
2. **Data Handling**:
   - Implements an endpoint **GET `/data`** that fetches data from an external API and returns it to the client.

3. **Middleware**:
   - Creates a simple logging middleware that logs all incoming requests to the console.

4. **Error Handling**:
   - Implements error handling that appropriately catches and returns errors as JSON.

5. **Documentation**:
   - Includes a `README.md` file with instructions on how to set up and run the project, including installing dependencies and starting the server.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/atharshafi/Backend_Project.git
   cd Backend_Project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables (if needed)**:
   - Create a `.env` file in the root directory.
   - Add any necessary environment variables, such as `PORT`.
   

4. **Start the server**:
   ```bash
   npm start
   ```
   The server will start running on `http://localhost:3000` by default (or the port specified in the environment variables).

## Endpoints

### GET `/`
Returns a welcome message in JSON format.

**Example response:**
```json
{
  "message": "Welcome to my Node.js backend application!"
}
```

### GET `/about`
Returns information about the developer.

**Example response:**
```json
{
  "name": "Athar Shafi",
  "profession": "Full-Stack Developer",
  "location": "Dubai, UAE"
}
```

### GET `/data`
Fetches random user data from an external API and returns it.

**Example response:**
```json
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy"
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
```

## Error Handling
If an error occurs, the application will log the error and return a 500 status code with an error message.

**Example response:**
```json
{
  "error": "Something went wrong!"
}
```



