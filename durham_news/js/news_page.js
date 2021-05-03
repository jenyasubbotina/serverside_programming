function redirectToSingleNews(btnId) {
    window.location.href = 'news_information.html?newsId=' + btnId;
}

function startTimer () {
    setTimeout(fetchAllNews, 1000);
}

function fetchAllNews() {
    fetch(urls.hostUrl + '/news')
        .then(res => res.json())
        .then(data => {
            let formattedData = ''
            data.forEach((news) => {
                formattedData += `
                        <div class="card card-news">
                            <div class="card-body news-body">
                                <h3 class="card-title news-title">${news.short_description} </h3>
                                <p class="card-text news-text">${news.content}</p>
                                <a href="#" class="btn btn-more" id=${news._id} onClick="redirectToSingleNews(this.id)"> More </a>
                            </div>
                        </div>
                    `
            })
            console.log(formattedData)
            document.getElementById('APIResponse').innerHTML = formattedData
        })
        .catch(err => document.getElementById('APIResponse').innerHTML = err)
}
