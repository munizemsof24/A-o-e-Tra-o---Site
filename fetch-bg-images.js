const urls = [
"https://ibb.co/gKTtpn2",
"https://ibb.co/62f6zkV",
"https://ibb.co/Q3RbVd3w",
"https://ibb.co/DPt4yZmC",
"https://ibb.co/RkQvnvjv",
"https://ibb.co/G3WPqT4d",
"https://ibb.co/DfXBKgdn",
"https://ibb.co/Tq4SDJHD",
"https://ibb.co/Rk61MDVf",
"https://ibb.co/ZpWcdPfc",
"https://ibb.co/JjCjHkzP",
"https://ibb.co/XZgvDGPZ",
"https://ibb.co/1YZt3K3Z",
"https://ibb.co/m5L1Cr57",
"https://ibb.co/zTrJ0WYM",
"https://ibb.co/xtbtSZ1F",
"https://ibb.co/5hZcxKHz",
"https://ibb.co/Rk3Hpm5m",
"https://ibb.co/LDQ3FmpN",
"https://ibb.co/ds1jWmc3",
"https://ibb.co/8nJDpx5Z",
"https://ibb.co/GQxyg9CX",
"https://ibb.co/qYKJkwp0",
"https://ibb.co/whThtzDz",
"https://ibb.co/ccq3t6RF"
];

async function run() {
  const direct = [];
  for (const url of urls) {
    const res = await fetch(url);
    const text = await res.text();
    const match = text.match(/https:\/\/i\.ibb\.co\/[^\"']+/);
    if (match) {
      direct.push(match[0]);
    }
  }
  console.log(JSON.stringify(direct, null, 2));
}

run();
