const express = require('express');
const { serveNcmApi } = require('../server');

const app = express();

serveNcmApi({ checkVersion: true, app })
  .then(() => console.log('NeteaseCloudMusicApi ready'))
  .catch(console.error);

module.exports = app;
