const express = require('express');
const app = express();

app.get('/', function (req, res) {

    res.send('Merhaba Express');
    //res.send('<h1>Merhaba Express</h1>');

});

app.listen(5000, function () {
    console.log('Sunucu çalışıyor...');
});