

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    // clear data
    searchField.value = '';

    //load data
    const loadBooks = () => {
        fetch()
            .then(res => res.json())
            .then(data => console.log(data))
    }
}
loadBooks();