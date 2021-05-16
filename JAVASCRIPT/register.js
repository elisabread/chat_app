$('#signUpButton').click(function() {
    $('.feedbackBox').css({
        display: 'none'
    })
    showPages('register')
})

$(".regButton").click((event) => {
    event.preventDefault()
    let name = $('.regName').val()
    let email = $('.regEmail').val()
    let password = $('.regPw').val()
    let passwordCheck = $('.passwordCheck').val()

    if (password == passwordCheck) {
        $.get('../PHP/registerUser.php', {
                value1: name,
                value2: email,
                value3: password,
            })
            .done(function() {
                showPages('login')
                $('.userCreated').css({
                    display: "flex"
                })
            })
            .fail(function() {
                $('.userNotCreated').css({
                    display: "flex"
                })
            })
    } else {
        $('.userNotCreated').css({
            display: "flex"
        })
    }
})

$('#regBack').click(function() {
    showPages('login')
})