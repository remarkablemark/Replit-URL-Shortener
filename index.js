const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const Database = require('@replit/database');
const { customAlphabet } = require('nanoid');
const { readFile } = require('fs').promises;

const db = new Database();

const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const size = 7;
const nanoid = customAlphabet(alphabet, size);
const idRegex = new RegExp(`^[${alphabet}]{${7}}$`);

const app = express();
app.use(morgan('dev'));

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const html = readFile('index.html');

/**
 * GET /
 */
app.get('/', async (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(await html);
});

/**
 * POST /
 */
app.post('/', urlencodedParser, async (req, res) => {
  const { url } = req.body;
  res.set('Content-Type', 'text/html');

  if (!url) {
    res.send(await html);
    return;
  }

  // ensure id is unique
  let id;
  while (true) {
    id = nanoid();
    if (!(await db.get(id))) {
      await db.set(id, url);
      break;
    }
  }

  const shortenedUrl = `${req.get('host')}/${id}`;
  const block = `
    <p>
      Shortened URL:
      <a href="${id}" rel="noopener noreferrer" target="_blank">
        ${shortenedUrl}
      </a>
    </p>
  `;

  res.send((await html) + block);
});

/**
 * GET /:id
 */
app.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  if (!idRegex.test(id)) {
    return next();
  }

  const fullUrl = await db.get(id);
  if (!fullUrl) {
    return next();
  }

  res.redirect(301, fullUrl);
});

/*
// empty databse (development)
app.get('/db-empty', async (req, res, next) => {
  await db.empty();
  res.send('Database Emptied');
});
*/

/**
 * 404
 */
app.use((req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Error
 */
app.use((err, req, res, next) => {
  next(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port %d', port));
