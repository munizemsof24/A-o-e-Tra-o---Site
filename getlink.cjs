const https = require('https');
https.get('https://ibb.co/7xdjdG2G', (res) => {
  let data = '';
  res.on('data', (d) => { data += d; });
  res.on('end', () => {
    const matches = data.match(/https:\/\/i\.ibb\.co\/[^"']+/g);
    console.log(matches ? matches : 'no matches');
  });
});
