function addNews() {
    const url = new URL(window.location.href);
    var newsTitle = document.getElementById('add-title');
    var newsDescription = document.getElementById('add-description');
    var newsContent = document.getElementById('add-text');
    const init = {
        method: 'POST',
        body: JSON.stringify({
            name: newsTitle.value,
            content: newsContent.value,
            short_description: newsDescription.value
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }

    fetch(urls.hostUrl + '/news/', init)
        .then(res => res.json())
        .then(data => {
            newsTitle.value = '';
            newsContent.value = '';
            newsDescription.value = '';
            redirectBackToMain();
            alert('News added!');
        })

    function redirectBackToMain() {
        window.history.back();
    }
}
