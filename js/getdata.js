// cara pertama fecth API
    fetch('../data.json')

    .then(response =>response.json())
    .then(json =>{
        console.log("json", json);
    })

//cara kedua fecth API
    // async function coba(){
    //     let response = await fecth('../data.json');
    //     let data = await response.json();
    //     console.log(respose.status);
    // }

