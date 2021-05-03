function fetchSingleComment() {
    const url = new URL(window.location.href);
    var newsId = url.searchParams.get("newsId");
    var commentId = url.searchParams.get("commentId");
    console.log(newsId + " " + commentId);
    fetch(urls.hostUrl + '/news/' + newsId + '/comments/' + commentId)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('commentText').innerHTML = `${data.content}`;
            document.getElementById('commentCreation').innerHTML = `by ${data.username} on ${data.Created_date}`;
        })
        .catch(err => document.getElementById('commentText').innerHTML = err)
}
