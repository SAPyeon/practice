const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    //console.log("submit")
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm, isFunny: 'pppp' } } // params는 여러 값을 가지고 있는 객체로 헤더나 매개변수 등을 다양하게 입력하여 값을 불러올 수 있음
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    //console.log(res.data[0].show.image.medium);
    const img = document.querySelectorAll('img');
    if (img) {
        for (im of img) {
            im.remove();
        }
    }
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        //console.log(result)
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
}

