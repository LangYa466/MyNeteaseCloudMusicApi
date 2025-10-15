const express = require('express');
const { serveNcmApi } = require('../server'); // 保持原来的路径

const app = express();
serveNcmApi({ checkVersion: true, app }); // 不让它调用 app.listen()

module.exports = app;
