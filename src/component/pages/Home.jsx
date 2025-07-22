import React, { use, useEffect, useState } from 'react'
import { deleteBooks, getBooks } from '../api';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Home() {
  const [books, setBooks] = useState([]);
   
  const navigate = useNavigate();
  useEffect(() => {
    getBooks()
      .then(setBooks)
  }, [])
  async function removeBook(id) {
  try {
    await deleteBooks(id);
    toast.success("Book deleted successfully");
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 1 second
  
    navigate("/");
    window.location.reload();
  }
  catch (error) {
    toast.error("Failed to delete book");
  }}
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
            <th>actions</th>

          </tr>
        </thead>
        <tbody>
        {books.map((book)=>(
          <tr key={book._id}>
            <td>{book._id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pages}</td>
            
            <td>
              <Link to={`/contact/${book._id}`}>Edit</Link> 
              <button onClick={()=>removeBook(book._id)}>delete</button></td>
          </tr>

        ))}
        </tbody>
      </table>
    </div>

  )

}