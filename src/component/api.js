const APIURL = 'http://localhost:4000';

// Fetch all books
export async function getBooks() {
  const response = await fetch(`${APIURL}/books`);
  console.log(response);
  return response.json();
}

// Fetch a single book by ID
export async function getBook(id) {
  const response = await fetch(`${APIURL}/books/${id}`);
  console.log(response);
  return response.json();
}

// Add a new book
export async function addBooks(book) {
  const response = await fetch(`${APIURL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });
  console.log(response);
  return response.json();
}

// Update an existing book by ID
export async function updateBook(id, book) {
  const response = await fetch(`${APIURL}/books/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });
  console.log(response);
  return response.json();
}

// Delete a book by ID
export async function deleteBooks(id) {
  const response = await fetch(`${APIURL}/books/${id}`, {
    method: "DELETE"
  });
  console.log(response);
  return response.json();
}
