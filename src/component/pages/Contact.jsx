import React, { useEffect, useState } from 'react';
import { updateBook, getBook } from '../api';
import { useNavigate, useParams } from 'react-router-dom';


export default function Contact() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  const navigate = useNavigate();
  const {id} =useParams() // 🔥 correctly retrieves the book ID from the URL

  useEffect(() => {
    async function fetchBook(bookid) {
      if (bookid) {
        const book = await getBook(bookid);
        setTitle(book.title);
        setAuthor(book.author);
        setPages(book.pages);
      }
    }
    fetchBook(id);
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    await updateBook(id, {
      title,
      pages: Number(pages),
      author
    });
    setTitle('');
    setPages('');
    setAuthor('');
    navigate('/');
  }

  return (
    <div>
      <h1>Registration Update Form</h1>
      <form onSubmit={handleSubmit}>
        Add Title <br />
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        /><br /><br />
        <input
          type="number"
          placeholder="pages"
          value={pages}
          onChange={e => setPages(e.target.value)}
        /><br /><br />
        <input
          type="text"
          placeholder="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        /><br /><br />
        <button type="submit">Edit Book</button>
      </form>
    </div>
  );
}
