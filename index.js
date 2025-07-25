const express = require('express');
const axios = require('axios');
const randomstring = require('randomstring');

const app = express();
const API_KEY = process.env.API_KEY; // <-- Now using environment variable

app.get('/', async (req, res) => {
  try {
    const quoteResponse = await axios.get('https://api.api-ninjas.com/v1/quotes', {
      headers: { 'X-Api-Key': API_KEY }
    });

    const quoteData = quoteResponse.data[0];
    const quoteText = quoteData.quote;
    const quoteAuthor = quoteData.author;

    res.send(`
      <h2>Welcome Onboard</h2>
      <p style="color: green;">Please manage this recharge card:</p>
      <p style="font-size: 1.5em;"><strong>${generatePin()}</strong></p>
      <hr>
      <blockquote>
        "${quoteText}"<br>
        — <em>${quoteAuthor}</em>
      </blockquote>
    `);

  } catch (error) {
    console.error('Error fetching quote:', error.message);
    res.send(`
      <h2>Welcome Onboard</h2>
      <p style="color: green;">Please manage this recharge card:</p>
      <p style="font-size: 1.5em;"><strong>${generatePin()}</strong></p>
      <hr>
      <p>Sorry, could not fetch a quote right now.</p>
    `);
  }
});

app.listen(3501, () => console.log(`Listening on port 3501`));

function generatePin() {
  const raw = randomstring.generate({
    length: 16,
    charset: 'numeric'
  });
  return raw.match(/.{1,4}/g).join('-');
}
