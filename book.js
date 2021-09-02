document.getElementById('error-message').style.display = 'none';
document.getElementById('spinner').style.display = 'none';


const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    // clear data
    searchField.value = '';

    //load data


    if (searchText === '') {

        displayError();

    } else {

        //hide error
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('spinner').style.display = 'none';

        document.getElementById('search-result').textContent = '';

        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        //console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data))


    }

}

const displayError = () => {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('book-numbers').textContent = '';
}



const displaySearchResult = books => {
    //console.log(books)
    const searchResult = document.getElementById('search-result');
    document.getElementById('book-numbers').textContent = '';
    searchResult.textContent = '';
    const bookList = books.docs;

    if (bookList === null) {
        displayError()
    }

    else {

        document.getElementById('error-message').style.display = 'none';
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('book-numbers').innerText = `Book Found ${bookList.length}`;


        bookList.forEach(book => {
            const div = document.createElement('div')

            div.classList.add('card', 'text-warning', 'bg-dark', 'text-center');
            //console.log(book);
            div.innerText = `no result found`
            bookShow.appendChild(div);

            bookList.forEach(book => {
                console.log(booklist);

                const url = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
                console.log(url);
                const div = document.createElement('div');

                div.classList.add('col');
                div.innerHTML = `<div class="col">
            <div class="card h-100">
                <img src="${url
                    }" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Book:${book.title} </h5>
                    <h6 class="">Author Name:${book.author_name} </h6>
                    <p class="card-text">First publish date: ${book.first_publish_year}</p>
                </div>
            </div>
        </div>`;

                searchResult.appendChild(div);

            })
        }
















