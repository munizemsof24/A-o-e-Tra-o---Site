const https = require('https');

const urls = [
'https://ibb.co/Sw0n7DDf',
'https://ibb.co/MDWxybqt',
'https://ibb.co/VWC964Jq',
'https://ibb.co/Kpv974dj',
'https://ibb.co/Fj4jxc5',
'https://ibb.co/DyTm59F',
'https://ibb.co/rRL33Tr8',
'https://ibb.co/FLnY3T71'
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
