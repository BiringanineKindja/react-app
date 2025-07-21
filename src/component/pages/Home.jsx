import React, { use, useEffect, useState } from 'react'
import { deleteBooks, getBooks } from '../api';
import { Link } from 'react-router-dom';
export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then(setBooks)
  }, [])
  async function removeBook(id) {
    await deleteBooks(id)
    
  }
  return (
    <div>
      <Link to={'/about'}> go to create a book</Link>
      <h1>myb list of books</h1>

      <table border={1}>
        <thead>

          <tr>
            <th>book id</th>
            <th>book tilte </th>
            <th> book auther</th>
            <th>no pages</th>
          </tr>
        </thead>
        <tbody>
        {books.map((book)=>(
          <tr key={book._id}>
            <td>{book._id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pages}</td>
            
            <td><button onClick={()=>removeBook(book._id)}>delete</button></td>
          </tr>

        ))}
        </tbody>
      </table>
    </div>

  )
}
