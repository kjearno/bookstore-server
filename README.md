# bookstore-server

## Features

- Node.js
- Express
- PostgreSQL

## Installation

1. Clone the repo:

```sh
git clone https://github.com/kjearno/bookstore-server.git
```

2. Go to the project folder:

```sh
cd bookstore-server
```

3. Install NPM packages:

```sh
npm install
```

## Usage

- Development server:

```sh
npm run dev
```

- Production server:

```sh
npm start
```

## API

- auth

`POST /auth/login`<br>
`GET /auth/logout`

- authors

`GET /authors`<br>
`POST /authors`<br>
`GET /authors/:id`<br>
`PATCH /authors/:id`<br>
`DELETE /authors/:id`

- books

`GET /books`<br>
`POST /books`<br>
`GET /books/:id`<br>
`PATCH /books/:id`<br>
`DELETE /books/:id`

- categories

`GET /categories`<br>
`POST /categories`<br>
`GET /categories/:id`<br>
`PATCH /categories/:id`<br>
`DELETE /categories/:id`

- users

`GET /users`<br>
`POST /users`<br>
`GET /users/:id`<br>
`PATCH /users/:id`<br>
`DELETE /users/:id`
