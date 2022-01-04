const fetch=require('node-fetch');

async function callingAPis(reqType, url, data) {
    const response = await fetch(url, {
      method: `${reqType}`,
      headers: {
        "Content-Type": "application/json",
        // "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImViMWEyZmJlLWI3MjQtNDVjNy05MjE5LTBjZTg5MzY2Yjc3YyIsImlhdCI6MTY0MTI5ODA2MDA2NH0.f0FmYqUzwhqMKIPM3PWvFujETrfglCTi4WNsEsPv6uM',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  setInterval(() => {
    
    callingAPis("post","http://localhost:7068/api/user/registerUser",
    {  //body
      "email": "abc@abc.com",
      "password": "abc",
      "firstName": "abc",
      "lastName": "def",
      "phone": 12345678990,
      "registeredWith": "google",
      "refreshToken": "<some random token from fcm>",
      "devicePlatform": "android",
      "deviceId": "SM596",
      "appleUID": "appleid",
      "CityId":"00a94649-a85f-43ea-90ff-fad95afe1f1e",
      "StoreId":"ded80130-5e52-11ec-91cf-3576ffb67b66"
  }).then((data) => {   //for post req enter payload ex:{id:1,seller:""}
        console.log(data); 
      });
  }, 2000);


