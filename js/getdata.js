// cara pertama fecth API
    fetch('../data.json')

    .then(response =>response.json())
    .then(json =>{
        console.log("json", json);
        data(json);
    })

//cara kedua fecth API
    // async function coba(){
    //     let response = await fecth('../data.json');
    //     let data = await response.json();
    //     console.log(respose.status);
    // }
function data(userdata){
    let output =' ';
    for(index=0; index < 5; index++){
        const elements = userdata[index];
        // console.log(elements);
        output+=`
            <tr>
                <td>${userdata[index].nama}</td>
                <td>${userdata[index].bagian}</td>
                <td>${userdata[index].salary}</td>
                <td>
                    <div class="row">
                        <div class="col-6">
                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#hapus-data">
                                <img src="assets/trash.png" >
                            </button>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#edit-data">
                                <img src="assets/edit.png" >
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        `;
    }
    const tablebody= document.getElementById("table-body")
    tablebody.innerHTML = output;
}