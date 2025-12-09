async function getWebtoonsinfo() {
    const url = 'https://webtoon.p.rapidapi.com/originals/titles/list?language=en';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7ee866c6c7mshc15e78226469908p191827jsn720f62cd5523',
            'x-rapidapi-host': 'webtoon.p.rapidapi.com'
        }
    };

    try {
        //getting data from api
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        return data.message.result.titleList.titles

    } catch (error) {
        console.error(error);
    }

};
// getWebtoonsinfo();
async function searcher() {
    const titles = await getWebtoonsinfo();

    const searchBtn = document.getElementById('searchbtn');
    const searchInput = document.getElementById('searchContent');

    searchBtn.addEventListener('click', () => {
        const query =searchInput.value.trim().toLowerCase();

        if (!query){
            alert('Please enter a title to search');
            return;
        }

        //find matching title
        const match =titles.find(item => 
            item.title.toLowerCase().includes(query)
        );

        if (!match){
            alert('No matching title found');
            return;
        }

        document.getElementById('title').textContent = 'Loading....'
        displayResult(match);
    })
}


function displayResult(webtoon){
    document.getElementById('title').textContent = webtoon.title;
    document.getElementById('description').textContent = webtoon.synopsis;
    // document.getElementById('author').textContent = webtoon.titleAuthorList.authorName?.join(", ");
    document.getElementById('genres').textContent = webtoon.subGenre?.join(", ");

    const img = document.getElementById('thumbnail');
    img.src = "images/noimgavailable.jpg";
    img.style.display = "block";
}

searcher();



