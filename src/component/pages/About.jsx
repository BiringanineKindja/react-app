import React, { useState } from 'react'
import { addBooks } from '../api';

export default function About() {
  const[title,setTitle]=useState("")
  const[author,setAuthor]=useState("")
  const[pages,setPages]=useState("")

  async function handleSubmit(e) {
    e.preventDefault();
    await addBooks({title,pages:Number(pages),author}) 
    setAuthor("")
    setPages("")
    setTitle("")
    alert("form submit succesfully")
  }
  return (
    <div>
      <h1>Book registration</h1>
      <form onSubmit={handleSubmit}>
        add title <br />
        <input type="text"placeholder='title'value={title} onChange={e=>setTitle(e.target.value)} /><br /><br/>
        <input type="number"placeholder='pages'value={pages} onChange={e=>setPages(e.target.value)} /><br /><br/>
        <input type="text"placeholder='author'value={author} onChange={e=>setAuthor(e.target.value)} /><br /><br/>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}
