function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => {
    renderBooks(json)
    fifthBook(json)
  })
}

function renderBooks(json) {
  const main = document.querySelector('main')
  let number = 1

  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerText = `${number++}. ${book.name}`
    main.appendChild(h2)
  })

}

// this function identifies the fifth book and returns the title

function fifthBook(json) {
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')
  let bookName = json[4]["name"]
  h2.innerText = `5. ${bookName}`
  main.appendChild(h2)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
