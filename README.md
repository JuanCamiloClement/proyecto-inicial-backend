# Product List: Initial Phase Project - Make it Real TOP Program v30 💻

Codebase for the node.js projects.

- Built with Node.js and Express.
- REST API.

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/es)
- [Express](https://expressjs.com/)
- [Make it Real mock database](https://www.npmjs.com/package/@makeitrealcamp/db-mock)

## Express Router and Routes

| Route           | HTTP Verb | Description                          |
| ----------------| --------- | ------------------------------------ |
| /healthcheck    | GET       | Show a simple message ('OK')         |
| /products       | GET       | Get list of products                 |
| /products       | POST      | Creates a new product                |
| /products/:id   | GET       | Get a single product                 |
| /products/:id   | PUT       | Updates a product                    |
| /products/:id   | DELETE    | Deletes a product                    |


## Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a product or update a product, here we have some examples.

### Example: **product creation**:

Request Body:
```json
{
  "name": "Guitar",
  "color": "Brown",
  "category": "Music",
  "price": "200"
}
```

Response:
```json
{
    "message": "Product added successfully",
    "data": {
        "name": "Guitar",
        "color": "Brown",
        "category": "Music",
        "price": "200",
        "id": 1
    }
}
```
### Example: **product update**:

Request Body:
```json
{
    "name":"Guitar",
    "color":"Black",
    "category":"Music",
    "price":"250"
}
```

Response:

```json
{
    "message": "Product updated successfully",
    "data": {
        "name": "Guitar",
        "color": "Black",
        "category": "Music",
        "price": "250",
        "id": "1"
    }
}
```

### Developing

1. Run `npm install` to install server dependencies.

2. Configure the env.

4. Run `npm run dev` to start the development server.