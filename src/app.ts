const express =require('express');
import { Server } from 'http';
// import { renderToString } from 'react-dom/server';
// import { match, BrowserRouter } from 'react-router';
// import routes from './routes';

const app = express();
const server = new Server(app);

// universal routing and rendering
app.get('*', (req, res) => {
  res.render('index')
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
