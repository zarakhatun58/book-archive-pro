
document.getElementById('error-message').style.display = 'none';
document.getElementById('book-details').textContent = '';


const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);

    // clear data
    searchField.value = '';

    //handle empty search request
    if (searchText === '') {
        displayError();
    }
    else {
        //hide error
        document.getElementById('error-message').style.display = 'none';
        // //clear team details
        // document.getElementById('book-details').textContent = '';
        // //clear search details
        // document.getElementById('search-result').textContent = '';

        //load data
        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        //console.log(url);
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => displaySearchResult(data.books))
            .catch(error => displayError(error()));

    }

}

const displayError = () => {
    document.getElementById('error-message').style.display = 'block';
    // document.getElementById('book-numbers').textContent = '';
    // document.getElementById('book-details').textContent = '';

}


// display search result
const displaySearchResult = books => {
    //console.log(books)

    //document.getElementById('book-numbers').textContent = '';
    const searchResult = document.getElementById('search-result');

    // clear search result
    searchResult.textContent = '';
    console.log(bookList);
    console.log(books);

    if (bookList === null) {
        displayError();
    }


    else {
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('book-numbers').innerText = `Books Found ${bookList.length}`;


        bookList.forEach(book => {
            //console.log(book);
            const ul = document.createElement('li');
            li.innerText = `name:${book.title} author_name:${book.author_name} first_publish:${book.first_publish_year}`;
            ul.appendChild(li);

        })
    }
}
const loadBookDetails = coverI => {
    const url = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBookDetails(data));

}

const displayBookDetails = (bookDetails) => {
    const book = bookDetails.books[0];
    window.scrollTo(0, 40);

    const bookShow = document.getElementById('book-details');
    bookShow.textContent = '';

    const div = document.createElement('div')
    div.classList.add();
    console.log(book.cover_i);
    div.innerHTML = `<div> <img src="${book.cover - i}"></div>`;


    bookShow.appendChild(div);
}