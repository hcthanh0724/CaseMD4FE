function getAll(){
    $.ajax({
        type:"GET",
        headers:{
            'Accept' : 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/admin/accounts",
        success: function (data){
            console.log(data)
            showAccount(data)
        },
        error: function (err){
            console.log(err);
        }
    })
}
function showAccount(arr){
    let str = ""
    for(const a of  arr){
        str += ` <tr>
                                            <td>${a.id}</td>
                                            <td>${a.username}</td>
                                            <td>${a.password}</td>
                                            <td>${a.gender}</td>
                                            <td>${a.birthday}</td>
                                            <td>${a.country}</td>
                                            <td>${a.email}</td>
                                            <td>${a.createAt}</td>
                                            <td class="text-right">
                                                <a href="#" class="btn btn-link btn-info btn-just-icon like"><i
                                                        class="material-icons">favorite</i></a>
                                                <a href="#" class="btn btn-link btn-warning btn-just-icon edit"><i
                                                        class="material-icons">dvr</i></a>

                                                <a data-toggle="modal"
                                                   title="Click to edit"
                                                    data-target="#modalUser"
                                                   class="btn btn-sm btn-success"> <i
                                                        class="material-icons">edit</i></a>

                                                <button type="button" rel="tooltip"
                                                        class="btn btn-sm btn-danger remove">
                                                    <i class="material-icons">close</i>
                                                </button>
                                            </td>
                                        </tr>`
    }
    document.getElementById("show").innerHTML = str
}
getAll();
function create(){
    let username = $("#createUsername").val();
    let password = $("#createPassword").val();
    let name = $("#createName").val();
    let avatar = $("#createAvatar").val();
    let coverphoto = $("#createCoverPhoto").val();
    let aboutMe = $("#createBio").val();
    let birthday = $("#createBirthday").val();
    let phone = $("#createPhone").val();
    let gender = $("#GenderId1").val();
    let country = $("#createCountry").val();
    let email = $("#createEmail").val();
    let createAt = new Date();
    let formattedDate = createAt.toISOString();
    let role = $("#chooseRole").val();
    // let statusChat = $("#statusChat").val();
    // let statusProfile = $("#statusProfile").val();
    // let statusAccount = $("#statusAccount").val();

    let account = {
        username: username,
        password: password,
        name: name,
        avatar: avatar,
        coverphoto: coverphoto,
        aboutMe: aboutMe,
        birthday: birthday,
        phone: phone,
        gender: gender,
        country: country,
        email: email,
        role: {
            id: role,
        },
        createAt: formattedDate,
        statusChat: {
            id: 1,
        },
        statusProfile: {
            id: 4,
        },
        statusAccount: {
            id: 8,
        }
    }

    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/admin/accounts",
        data: JSON.stringify(account),
        success: function (data) {
            getAll();
        },
        error: function (err) {
            console.log(err);
        }
    })
}
function edit(){

}