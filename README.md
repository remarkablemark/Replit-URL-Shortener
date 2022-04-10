# Replit URL Shortener

[![Run on Replit](https://replit.com/badge/github/remarkablemark/Replit-URL-Shortener)](https://replit.com/github/remarkablemark/URL-Shortener)
![GitHub last commit](https://img.shields.io/github/last-commit/remarkablemark/Replit-URL-Shortener)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[Replit URL shortener](https://replit.com/@remarkablemark/URL-Shortener). Read the [blog post](https://remarkablemark.org/blog/2021/01/08/replit-url-shortener/).

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

## Install

Clone repository:

```sh
git clone https://github.com/remarkablemark/Replit-URL-Shortener.git
cd Replit-URL-Shortener
```

Install dependencies:

```sh
npm install
```

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The environment variable `REPLIT_DB_URL` must be set for the [Replit Database client](https://github.com/replit/database-node) to work:

```sh
REPLIT_DB_URL='https://kv.replit.com/v0/<your_base64_jwt>' npm start
```

> Replace `<your_base64_jwt>` with the [Base64](https://wikipedia.org/wiki/Base64) encoded [JWT](https://wikipedia.org/wiki/JSON_Web_Token).

To get the `REPLIT_DB_URL`, create a Node.js [Replit](https://replit.com/) and execute in the `Console`:

```js
process.env.REPLIT_DB_URL;
```

## License

[MIT](LICENSE)
