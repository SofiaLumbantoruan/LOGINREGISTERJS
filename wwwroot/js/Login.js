function Login() {
    var obj = new Object();
    obj.Username = $("#Username").val(),
        obj.Password = $("#Password").val(),
        console.log(obj),

        $.ajax({
            type: "POST",
            url: "/Auth/Login",
            dataType: 'json',
            data: obj,
            success: function (result) {
                console.log(result)
                window.location.href = result;

            },
            error: function (error) {
                console.log(error)
                Swal.fire({
                    type: "error",
                    title: 'Oops...',
                    text: 'login Fail!'
                })
            }

        })
}