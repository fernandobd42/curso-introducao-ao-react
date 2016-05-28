/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const port = process.env.PORT || 1620;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true } }));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.listen(port, 'localhost', err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Listening at http://localhost: ${port}`);
});
