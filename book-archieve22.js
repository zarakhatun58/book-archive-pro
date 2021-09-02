document.getElementById('error-message').style.display = 'none';
document.getElementById('spinner').style.display = 'none';

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);

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

        const url = `https://openlibrary.org/search.json?q=${searchText}`;

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

const displaySearchResult = (books) => {

    const booksSlice = books.docs.slice(0, 30);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    booksSlice.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card">
            <img src='https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg'' class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <hr/>
            <h6>Author : ${book.author_name[0]}</h6>
            <p>Publisher : ${book.publisher[0]}</p>
            <p>First Publish Year : ${book.first_publish_year}</p>
            </div>
        </div>`;
        searchResult.appendChild(div);
        console.log(book);
    });
    const numFound = document.getElementById('found');
    numFound.innerText = books.numFound;
    const displayBook = document.getElementById('book-count');
    displayBook.innerText = booksSlice.length;
    const notFound = document.getElementById('error-message');

    if (booksSlice.length === 0) {
        notFound.style.display = 'block';
    }
    else {
        notFound.style.display = 'none';
    }

}