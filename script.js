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
    callingAPis("get","http://fortunepreprodapi.infoware.xyz/api").then((data) => {
        console.log('apicalling'); 
      });
      
  }, 1000);


