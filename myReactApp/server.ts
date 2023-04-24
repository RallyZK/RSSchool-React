import fs from 'fs';
import path from 'path';
import React from 'react';
import express from 'express';
// import App from './src/App';
import { fileURLToPath } from 'url';
import { render } from './entry-server';
import { renderToString } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static('build'));

app.get('*', async (req, res) => {
  // const reactApp = renderToString(React.createElement(App));
  const template = fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8', (err: any, data: string) => {
    if (err) {
      const errMsg = `There is an error: ${err}`;
      console.error(errMsg);
      return res.status(500).send(errMsg);
    }
    data.replace('<div id="root"></div>', `<div id="root">${render(req.url)}</div>`);
  });
  res.send(template);
});

app.listen(5000, () => {
  console.log(`Server is listening on port: 5000`);
});
