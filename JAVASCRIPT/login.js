let myUser
let myUserID
let myUsername
let login = []

$("#loginSubmit").click((event) => {
    event.preventDefault()
    let email = $(".emailInputLogin").val()
    let pw = $(".pwInputLogin").val()
    $.get("../PHP/getUser.php", {
            value1: email,
            value2: pw,
        })
        .done(function(data) {
            login = JSON.parse(data)
            $(".LogInButton").off('click')
            for (let i = 0; i < login.length; i++) {
                if (login[i].email == email && login[i].pw == pw) {
                    myUserID = login[i].ID
                    myUsername = login[i].namn
                    myStatus = login[i].status
                    $('.username').html(myUsername)
                    $(".status").val(myStatus)
                    createFriendPage()
                    showPages("friends")
                } else {
                    $('.feedbackBox').css({
                        display: 'none'
                    })
                    $('.failLogin').css({
                        display: 'flex'
                    })
                }
            }
            myUser = email
        })
        .fail(function() {})
})