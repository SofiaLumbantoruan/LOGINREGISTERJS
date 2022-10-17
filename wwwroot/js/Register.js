/*Register Admin*/
$("#RegisterUser").submit(function (e) {
    e.preventDefault();
    var obj = new Object(); //sesuaikan sendiri nama objectnya dan beserta isinya
    //ini ngambil value dari tiap inputan di form nya
    obj.firstName = $("#FirstName").val();
    obj.lastName = $("#LastName").val();
    obj.phoneNumber = $("#PhoneNumber").val();
    obj.hireDate = $("#HireDate").val();
    obj.email = $("#Email").val();
    obj.salary = $("#Salary").val();
    obj.job_Id = $("#JobRegister").val();
    obj.department_Id = $("#DepartmentsRegister").val();
    obj.username = $("#UserName").val();
    obj.password = $("#Password").val();
    console.log(obj);
   
    $.ajax({
        url: "../Auth/Register",
        type: "POST",
        /*        contentType: "application/json",*/
        data: obj, //jika terkena 415 unsupported media type (tambahkan headertype Json & JSON.Stringify(obj);)
    }).done((result) => {
        switch (result.status) {
            case 200:
                window.location.replace("/Login")
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Loggin',
                })
                break;
            case 400:
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email Already Used',
                })
                break;
            case 404:
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Phone Already Used',
                })
                break;
            default:
                console.log(result);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong Email or Password',
                })
        }


    }).fail((error) => {
        //alert pemberitahuan jika gagal
        
        console.log(error)
    })
})