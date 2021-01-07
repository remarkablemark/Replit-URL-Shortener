# Repl.it URL Shortener

[![Run on Repl.it](https://repl.it/badge/github/remarkablemark/Repl.it-URL-Shortener)](https://repl.it/github/remarkablemark/URL-Shortener)
![GitHub last commit](https://img.shields.io/github/last-commit/remarkablemark/Repl.it-URL-Shortener)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[Repl.it](https://repl.it/) [URL shortener](https://wikipedia.org/wiki/URL_shortening).

Demo: https://repl.it/@remarkablemark/URL-Shortener

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

## Install

Clone repository:

```sh
git clone https://github.com/remarkablemark/Repl.it-URL-Shortener.git
cd Repl.it-URL-Shortener
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

The environment variable `REPLIT_DB_URL` must be set for the [Repl.it Database client](https://github.com/replit/database-node) to work:

```sh
REPLIT_DB_URL='https://kv.repl.it/v0/<your_base64_jwt>' npm start
```

> Replace `<your_base64_jwt>` with the [Base64](https://wikipedia.org/wiki/Base64) encoded [JWT](https://wikipedia.org/wiki/JSON_Web_Token).

To get the `REPLIT_DB_URL`, create a Node.js [Repl.it](https://repl.it/) and execute in the `Console`:

```js
process.env.REPLIT_DB_URL;
```

## License

[MIT](LICENSE)
