const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Welcome to NodeJs simple service, Please deploy me Deploy me!'));
app.listen(3501, () => console.log(`Listening on port 3501`));