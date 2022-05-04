

import http from 'http'

const asyncWolfram = (body) => {

  console.log(`Searching for counties with \"${body["CountyName"]}\" in name`)
  let resData = ""
  const postData = JSON.stringify(body)
  return new Promise((resolve, reject) => {

    var post_options = {
      host: '127.0.0.1',
      port: '7777',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    let post_req = http.request(post_options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        resData = resData + chunk;
      });
      res.on("error", (err) => {
        reject(err);
      });
      res.on("end", () => {
        resolve(JSON.parse(resData))
      })
    });
    post_req.write(postData);
    post_req.end()
  });
}

let payload = {
  "Query": 'County',
  "CountyName": 'Suffolk',
  "X": "Y"
}

let countyDetails = await asyncWolfram(payload);
console.log(countyDetails)
