const express = require('express');
import { Server } from 'http';
import * as path from 'path';

// import { renderToString } from 'react-dom/server';
// import { match, BrowserRouter } from 'react-router';
// import routes from './routes';

const app = express();
const server = new Server(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// universal routing and rendering
app.get('*', (req, res) => {
  console.log('req.path', req.path);
  console.log('req.route', req.route);
  console.log('req.body', req.body);
  if (req.path === '/launch-react.js') {
    console.log('req.path is js file...');
    require('./launch-react');
    return;
  }

  if (req.path === '/') {
    console.log('index path');
    res.render('index');
    return;
  }

  // match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
  //   // in case of error display the error message
  //   if (err) {
  //     return res.status(500).send(err.message);
  //   }

  //   // in case of redirect propagate the redirect to the browser
  //   if (redirectLocation) {
  //     return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  //   }

  //   // generate the React markup for the current route
  //   let markup;
  //   if (renderProps) {
  //     // if the current route matched we have renderProps
  //     markup = (renderToString as any)(<BrowserRouter {...renderProps} />);
  //   } else {
  //     // otherwise we can render a 404 page
  //     // markup = renderToString(<NotFoundPage />);
  //     // res.status(404);
  //   }

  //   // render the index template with the embedded React markup
  //   return res.render('index', { markup });
  // });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
