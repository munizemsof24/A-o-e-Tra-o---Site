fetch('https://ibb.co/qLPTgRd4').then(r=>r.text()).then(t=>console.log(t.match(/https:\/\/i\.ibb\.co\/[^\"']+/g)))
