let allUsers = []
let searchedID
let already = 0
let friendOrNot = []

function createUserDivs(allUsers) {
    $('.searchResults').html("")
    for (i = 0; i < allUsers.length; i++) {
        let div = document.createElement('div')
        div.className = 'contentDiv'
        div.innerHTML = allUsers[i].namn

        let button = document.createElement('button')
        button.classList.add('addFriendButton')
        button.innerHTML = '+'

        let username = allUsers[i].namn
        let userID = allUsers[i].ID
        button.onclick = function() {
            $.get('../PHP/addFriend.php', {
                    value1: myUserID,
                    value2: userID,
                })
                .done(function() {
                    button.classList.add('remove')
                    button.innerHTML = '-'
                    button.onclick = function() {
                        $.get('../PHP/removeRequest.php', {
                                value1: myUserID,
                                value2: userID,
                            })
                            .done(function() {
                                button.onclick = function() {
                                    console.log('har du bestämt dig än?')
                                }
                            })
                    }
                })
                .fail(function() {})
        }

        $('.searchResults').append(div)
        if (already == 0) {
            div.append(button)
        }
    }
}

$("#searchButton").click((event) => {
    event.preventDefault()
    let input = $("#searchInput").val()
    already = 0
    $.get("../PHP/getSearch.php", {
            theInput: input
        })
        .done(function(data) {
            let users = JSON.parse(data)
            allUsers = users
            searchedID = allUsers[0].ID
            next()
        })
})

function next() {
    $.get("../PHP/getSearchedFriend.php", {
            value1: myUserID,
            value2: searchedID
        })
        .done(function(data) {
            let friendOrNot = JSON.parse(data)
            if (friendOrNot.length == 0) {
                createUserDivs(allUsers)
            } else if (friendOrNot[0].accepted == 1) {
                already = 1
                createUserDivs(allUsers)
            } else if (friendOrNot[0].accepted == 3) {
                already = 1
                createUserDivs(allUsers)
            } else {
                createUserDivs(allUsers)
            }
        })
}