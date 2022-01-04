const fetch=require('node-fetch');

async function callingAPis(reqType, url, data) {
    const response = await fetch(url, {
      method: `${reqType}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  setInterval(() => {
    callingAPis("get","https://").then((data) => {   //for post req enter payload ex:{id:1,seller:""}
        console.log(data); 
      });
      
  }, 2000);


