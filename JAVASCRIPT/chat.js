theChat = []
let message

function createChat(p) {
    $.get("../PHP/getMessages.php", {
            value1: myUserID,
            value2: chosenFriend
        })
        .done(function(data) {
            theChat = JSON.parse(data)
            theChat.sort(function(a, b) {
                let dateA = new Date(a.time),
                    dateB = new Date(b.time)
                return dateA - dateB
            })
            $(".chatBox").html('')
            for (let i = 0; i < theChat.length; i++) {
                let said = document.createElement('p')
                if (theChat[i].sender == myUserID) {
                    said.classList.add('sendern', 'said')
                } else {
                    said.classList.add('receivern', 'said')
                }
                said.innerHTML = theChat[i].namn + '<b> said ' + theChat[i].time + ' : </b>'

                let p = document.createElement('p')
                if (theChat[i].sender == myUserID) {
                    p.classList.add('sender', 'chat')
                } else {
                    p.classList.add('receiver', 'chat')
                }
                p.innerHTML = theChat[i].text
                $(".chatBox").append(said)
                $(".chatBox").append(p)
                let elem = document.querySelector('.chatBox')
                elem.scrollTop = elem.scrollHeight
            }
        })
        .fail(function() {})
    $('.One').html('')

    let myChatdiv = document.createElement('div')
    myChatdiv.classList.add('user', 'Two')

    let friendChatDiv = document.createElement('div')
    friendChatDiv.classList.add('user', 'One')
    $('.One').append(friendChatDiv)
}

function updateChat() {
    $(".chatBox").html("")
    $.get("../PHP/getMessages.php", {
            value1: myUserID,
            value2: chosenFriend
        })
        .done(function(data) {
            theChat = JSON.parse(data)
            theChat.sort(function(a, b) {
                let dateA = new Date(a.time),
                    dateB = new Date(b.time)
                return dateA - dateB

            })
            for (let i = 0; i < theChat.length; i++) {
                let said = document.createElement('p')
                if (theChat[i].sender == myUserID) {
                    said.classList.add('sendern', 'said')
                } else {
                    said.classList.add('receivern', 'said')
                }
                said.innerHTML = theChat[i].namn + '<b> said ' + theChat[i].time + ' : </b>'

                let p = document.createElement('p')
                if (theChat[i].sender == myUserID) {
                    p.classList.add('sender', 'chat')
                } else {
                    p.classList.add('receiver', 'chat')
                }
                p.innerHTML = theChat[i].text
                $(".chatBox").append(said)
                $(".chatBox").append(p)
                let elem = document.querySelector('.chatBox')
                elem.scrollTop = elem.scrollHeight
            }
        })
        .fail(function() {})
}

$('#messageSendButton').click(function() {
    event.preventDefault()
    message = $("#messageInput").val()
    $.get('../PHP/sendMessages.php', {
            value1: chosenFriend,
            value2: myUserID,
            value3: message
        })
        .done(function() {
            $("#messageInput").val("")
            updateChat()
        })
        .fail(function() {})

})

$('#chatBack').click(function() {
    createFriendPage()
    showPages('friends')
})

window.setInterval(function() {
    updateChat()
}, 5000)