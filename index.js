const express = require('express');
const app = express();
const randomstring = require('randomstring');
app.get('/', (req, res) => res.send('Welcome to NodeJs simple service, Please deploy me Deploy me! <br>    <p style="color: green;">Please manage this recharge card</p>  ' + randomstring.generate(16)));
app.listen(3501, () => console.log(`Listening on port 3501`));

function generateRandomPassword(length = 12) {
    return  cryptoRandomString({ length: 16 });
  }