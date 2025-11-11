// Click handler for search button
const captureSearchValue = () => {
  const searchInput = document
    .querySelector("#search-bar")
    .value.trim()
    .toLowerCase();
  return searchInput;
};

// Filter books based on search input
const filterBooks = (searchString, books) => {
  const lowerSearchString = searchString.toLowerCase();

  return books.filter((book) => {
    const flattenedValues = flattenObjectValuesIntoArray([book]).flat();
    return flattenedValues.some(
      (value) => String(value).toLowerCase() === lowerSearchString
    );
  });
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (filteredBooks) => {
  return filteredBooks.map((book) => structureBookAsHtml(book));
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  const searchString = captureSearchValue();
  const filteredBooks = filterBooks(searchString, books);
  const bookHtmlElements = structureBooksAsHtml(filteredBooks);

  const resultsContainer = document.getElementById("bookList"); // Contenedor donde se muestran los resultados
  resultsContainer.innerHTML = ""; // Limpia el contenedor
  bookHtmlElements.forEach((element) => resultsContainer.appendChild(element));
};

// Grab search button from the DOM
const searchBtn = document.querySelector("#search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => {
  searchBtnClickHandler(books);
});

const searchInput = document.querySelector("#search-bar");

searchInput.addEventListener("focus", () => {
  searchInput.dataset.placeholder = searchInput.placeholder; // Guarda el placeholder
  searchInput.placeholder = " "; // Borra el placeholder
});

// Cuando el input pierde foco
searchInput.addEventListener("blur", () => {
  searchInput.placeholder = searchInput.dataset.placeholder; // Restaura el placeholder
});

// Seleccionar el botón y añadir el evento de clic
const toggleButton = document.getElementById("dark-mode-toggle");

// Cambiar entre modo claro y oscuro
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Cambiar texto del botón
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Modo Claro";
  } else {
    toggleButton.textContent = "Modo Oscuro";
  }
});


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