const https = require('https');

const urls = [
'https://ibb.co/N22pTtdT',
'https://ibb.co/q3g5MdW4',
'https://ibb.co/8Lq6rYCz',
'https://ibb.co/ZpZjygQh',
'https://ibb.co/WWwGVVyy',
'https://ibb.co/JFSnr5m0',
'https://ibb.co/jY7stTs',
'https://ibb.co/KcmQh4Y3'
];

async function getLink(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (d) => { data += d; });
      res.on('end', () => {
        const matches = data.match(/https:\/\/i\.ibb\.co\/[^"'\[<]+\.(jpg|jpeg|png|avif|webp)/g);
        resolve(matches ? [...new Set(matches)][0] : 'no matches');
      });
    }).on('error', reject);
  });
}

async function main() {
  for (let url of urls) {
    const res = await getLink(url);
    if(res) { console.log(res); }
  }
}

main();
