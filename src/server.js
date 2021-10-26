/********************************************************************
 * Libraries
 ********************************************************************/

/** Hookup Express */
const express = require("express");
const log = require('./lib/log.js').init('server.js');
const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/********************************************************************
 * Route Handlers
 ********************************************************************/

const _handleResponse = (req, res) => {
  const _status = req.params.status || 200;
  log.green('-------------------------------------------');
  log.green(`${req.originalUrl}`);
  log.white(req.headers);
  log.blue(req.body);
  log.grey(req.params);
  log.grey(`Response Status: ${_status}`);
  res.status(_status).end("OK");
};

app.all("/:status/*", _handleResponse);
app.all("*", _handleResponse);

/********************************************************************
 * Start the Express Server
 ********************************************************************/
const _port = PORT || 3000;
app.listen(_port, () => {
  log.green(`Listening on port: ${_port}`);
});

