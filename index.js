const express = require('express');
const app = express();
const randomstring = require('randomstring');
app.get('/', (req, res) => res.send('Welcome Onboard to my webpage my people  <br>    <p style="color: green;">Enjoy this awoof recharge card jareeeeee</p>  ' + generatePin()));
app.listen(3501, () => console.log(`Listening on port 3501`));

function generatePin() {
  const raw = randomstring.generate({
    length: 16,
    charset: 'numeric'
  });
   return raw.match(/.{1,4}/g).join('-');
  
  }
