// Click handler for search button
const captureSearchValue = () => {
    const searchInput = document.getElementById('search-bar');
    const searchValue = searchInput.value;

  return searchValue;

};

// Filter books based on search input
const filterBooks = (searchString, bookList) => {

};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = () => {

};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {
    document.getElementById('bookList').innerHTML = captureSearchValue();

}

// Grab search button from the DOM


// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });



/*


test cases
DONE - The captureSearchValue function captures the search bar input value and returns it.

The filterBooks() function takes in a search string and a list of books as parameters and returns all of the books that contain an exact match of the search input as an array of objects. Objects in this array should be formatted as books with title, author, and tags properties, similar to the original books array. It should use the flattenObjectValuesIntoArray() function to search all fields within a book object easily.
    Expected the `filterBooks` function to return an array.

The structureBooksAsHtml() function takes a list of books as a parameter, iterates over the list, formats them as HTML using the structureBookAsHtml() helper function, and returns an array of formatted book elements.
    Expected the `structureBookAsHtml` function to return an array.


The searchBtnClickHandler() function is triggered when a user clicks the search button. It takes in a list of books as a parameter and integrates the individual functions that make up the app to render a list of books to the DOM that matches the search input when the search button is clicked.

    searchBtn is not defined


*/ 