let inRequest = []
let friends = []
let chosenFriend

$('#submitStatus').click((event) => {
    event.preventDefault()
    let newStatus = $(".status").val()
    $.get("../PHP/updateStatus.php", {
            value1: newStatus,
            value2: myUserID
        })
        .done(function(data) {})
})

function createFriendPage() {
    $('.friendBox').html("")
    $.get("../PHP/getFriends.php", {
            value1: myUserID,
        })
        .done(function(data) {
            friends = JSON.parse(data)
            for (let i = 0; i < friends.length; i++) {
                if (friends[i].accepted == 1) {
                    let friendPic = document.createElement('div')
                    friendPic.classList.add('userPic')
                    friendPic.onclick = function() {
                        chosenFriend = friends[i].ID
                        createChat(chosenFriend)
                        showPages('chat')
                    }

                    let friendName = document.createElement('div')
                    friendName.innerHTML = friends[i].namn
                    friendName.classList.add('username')

                    let friendStatus = document.createElement('p')
                    friendStatus.innerHTML = friends[i].status
                    friendStatus.classList.add('friendStatus')


                    let friendFlexDiv = document.createElement('div')
                    friendFlexDiv.classList.add('friendFlex')

                    let removeButton = document.createElement('button')
                    removeButton.classList.add('declineFriendButton', 'requestAnswer')
                    removeButton.onclick = function() {
                        $('.RuSure').css({
                            display: 'flex'
                        })
                        chosenFriend = friends[i].ID
                    }

                    let friendDiv = document.createElement('div')
                    friendDiv.classList.add('aFriend')

                    let friendTransparentDiv = document.createElement('div')
                    friendTransparentDiv.classList.add('aFriendBox')

                    $('.friendBox').append(friendTransparentDiv)
                    friendTransparentDiv.append(friendPic)
                    friendTransparentDiv.append(friendDiv)
                    friendDiv.append(friendFlexDiv)
                    friendFlexDiv.append(friendName)
                    friendFlexDiv.append(friendStatus)
                    friendDiv.append(removeButton)
                } else {}
            }
        })
}

$(".in").click((event) => {
    $('.outgoing').css({
        display: "none"
    })
    $('.incoming').css({
        display: "flex"
    })
    event.preventDefault()

    $.get("../PHP/getInFriendRequest.php", {
            value1: myUserID,
        })
        .done(function(data) {
            inRequest = JSON.parse(data)
            createRequestDivs(inRequest)
        })
})

$(".out").click((event) => {
    $('.incoming').css({
        display: "none"
    })
    $('.outgoing').css({
        display: "flex"
    })
    event.preventDefault()

    $.get("../PHP/getOutFriendRequest.php", {
            value1: myUserID,
        })
        .done(function(data) {
            outRequest = JSON.parse(data)
            createOutRequestDivs(outRequest)
        })
})

function createRequestDivs(inRequest) {
    $('.incoming').html("")
    $('.outgoing').html("")
    for (let = i = 0; i < inRequest.length; i++) {
        if (inRequest[i].accepted == 3) {
            let div = document.createElement('div')
            div.className = 'contentDiv'
            div.innerHTML = inRequest[i].namn

            let button = document.createElement('button')
            button.classList.add('acceptFriendButton', 'requestAnswer')
            userID = inRequest[i].ID
            button.onclick = function() {
                $.get('../PHP/answerRequest.php', {
                        value1: myUserID,
                        value2: userID,
                    })
                    .done(function() {
                        createFriendPage()
                        createRequestDivs()

                    })
                    .fail(function() {
                        console.log('Användare INTE svarad')
                    })
            }
            let noButton = document.createElement('button')
            noButton.classList.add('sayNoFriendButton', 'requestAnswer')
            noButton.onclick = function() {
                $.get('../PHP/answerNoRequest.php', {
                        value1: myUserID,
                        value2: userID,
                    })
                    .done(function() {
                        createRequestDivs()
                    })
                    .fail(function() {
                        console.log('Användare INTE svarad')
                    })
            }
            $('.incoming').append(div)
            div.append(button)
            div.append(noButton)
        } else {}
    }
}

function createOutRequestDivs(outRequest) {
    $('.outgoing').html("")
    for (let = i = 0; i < outRequest.length; i++) {
        if (outRequest[i].accepted == 3) {
            let div = document.createElement('div')
            div.className = 'contentDiv'
            div.innerHTML = outRequest[i].namn

            let Button = document.createElement('button')
            Button.classList.add('sayNoFriendButton', 'requestAnswer')
            userID = outRequest[i].ID
            Button.onclick = function() {
                $.get('../PHP/removeRequest.php', {
                        value1: myUserID,
                        value2: userID,
                    })
                    .done(function() {
                        createOutRequestDivs()
                    })
            }
            $('.outgoing').append(div)
            div.append(Button)

        } else {}
    }
}

$("#removeFriend").click((event) => {
    event.preventDefault()
    $('.RuSure').css({
        display: "none"
    })

    $.get("../PHP/removeFriend.php", {
            value1: myUserID,
            value2: chosenFriend
        })
        .done(function(data) {
            createFriendPage()
            $('.friendBox').html("")
        })
})