const https = require('https');

const urls = [
'https://ibb.co/m51cnfW1',
'https://ibb.co/jvSGC8Lb',
'https://ibb.co/cK4VHr1w',
'https://ibb.co/4nQvkcng',
'https://ibb.co/1GRg7cJK',
'https://ibb.co/TDtqd4BM',
'https://ibb.co/Vp5q0wxG',
'https://ibb.co/bR126201',
'https://ibb.co/Y4JxRjsc',
'https://ibb.co/jvBDX6D2',
'https://ibb.co/67pTsPCM',
'https://ibb.co/WYPPZDv'
];

async function getLink(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (d) => { data += d; });
      res.on('end', () => {
        const matches = data.match(/https:\/\/i\.ibb\.co\/[^"'\[<]+\.(jpg|jpeg|png|avif|webp)/g);
        resolve(matches ? [...new Set(matches)] : 'no matches');
      });
    }).on('error', reject);
  });
}

async function main() {
  for (let url of urls) {
    const res = await getLink(url);
    if (Array.isArray(res)) {
        console.log(res[0]);
    } else {
        console.log(url, res);
    }
  }
}

main();
