function loadComments(newsId) {
    fetch(urls.hostUrl + '/news/' + newsId + '/comments')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let formattedData = ''
            data.forEach((comment) => {
                console.log(data);
                formattedData += `
                        <div class="comment">
                            <div class="comment-text">
                                ${comment.content}
                            </div>
                            <div class="comment-creation">by ${comment.username} on ${comment.Created_date} </div>
                            <a class="btn btn-more" id=${comment._id}
                             onClick="redirectToSingleComment(this.id)"> View full </a>
                        </div>
                        `
            })
            document.getElementById('allComments').innerHTML = formattedData
        })
        .catch(err => document.getElementById('allComments').innerHTML = err)
}

function redirectToSingleComment(commentId) {
    const url = new URL(window.location.href);
    var newsId = url.searchParams.get("newsId");
    window.location.href = 'view_comment.html?newsId=' + newsId + '&commentId=' + commentId;
}


function fetchSingleNews() {
    const url = new URL(window.location.href);
    var param = url.searchParams.get("newsId");
    fetch(urls.hostUrl + '/news/' + param)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('newsContent').innerHTML = `<p> ${data.content} </p>`;
            document.getElementById('newsShortDescription').innerHTML = `<h3> ${data.short_description} </h3>`;
            document.getElementById('newsTitle').innerHTML = `<h1 class="news-title"> ${data.name} </h1>`;
        })
        .catch(err => document.getElementById('newsTitle').innerHTML = err)
    loadComments(param);
}


function addComment() {
    const url = new URL(window.location.href);
    var param = url.searchParams.get("newsId");
    var commentContent = document.getElementById('comment');
    var commentName = document.getElementById('name');
    const init = {
        method: 'POST',
        body: JSON.stringify({
            username: commentName.value,
            content: commentContent.value
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    fetch(urls.hostUrl + '/news/' + param + '/comment', init)
        .then(res => res.json())
        .then(data => {
            commentContent.value = '';
            commentName.value = '';
            loadComments(param);
        })
}

function deleteNews() {
    const url = new URL(window.location.href);
    var param = url.searchParams.get("newsId");
    const init = {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    fetch(urls.hostUrl + '/news/' + param, init)
        .then(res => res.json())
        .then(data => {
            redirect();
        })
}

function redirect() {
    window.location.href = 'index.html';
}
