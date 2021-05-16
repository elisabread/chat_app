allPages = ['login', 'register', 'chat', 'friends']

function showPages(page) {
    for (let i = 0; i < allPages.length; i++) {
        //$('input').val("")
        $('.' + allPages[i] + 'Page').css({
            display: "none"
        })
    }
    $('.' + page + 'Page').css({
        display: "grid"
    })
}

showPages('login')