 const getJSON = function (url, method, headers1,headers2, body) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    if (method == 'GET') {
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader(headers1,headers2);
      client.send();
    }
    else if (method == 'POST') {
      client.open('POST', url)
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader(headers1,headers2);
      client.send(JSON.stringify(body));
    }
  });
  return promise;
};

let msg = {
  name: "TYH",
}


getJSON('http://39.107.142.107:3000/mock/25/testPost','POST',"Accept", "application/json",msg)
.then(function (json) {
  console.log(json)
}, function (error) {
  console.error('error', error)
})

getJSON('http://39.107.142.107:3000/mock/25/getText', 'GET', "Accept", "application/json")
.then(function (json) {
  console.log(json)
}, function (error) {
  console.error('error', error)
})