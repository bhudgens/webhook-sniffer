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

app.all("/:status/*", (req, res) => {
  const _status = req.param.status || 200;
  log.white(req.headers);
  log.blue(req.body);
  res.status(_status).end("OK");
});

app.all("*", (req, res) => {
  log.white(req.headers);
  log.blue(req.body);
  res.status(200).end("OK");
});

/********************************************************************
 * Start the Express Server
 ********************************************************************/
app.listen(PORT || 3000);

