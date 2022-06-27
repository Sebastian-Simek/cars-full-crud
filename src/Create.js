import './App.css';
import { useState } from 'react';
import { addBook } from './services/fetch-utils';

export default function Create() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [review, setReview] = useState('');

  async function handleSubmit() {
    const book = await addBook({
      name: name,
      author: author,
      review: review
    });
  }

  

  return (
    <div className="add-book">
      <form onSubmit={handleSubmit}>
        <label>Name
          <input onChange={e => setName(e.target.value)} value={name}/>
        </label>
        <label>Author
          <input onChange={e => setAuthor(e.target.value)} value={author}/>
        </label>
        <label>Review
          <textarea onChange={e => setReview(e.target.value)} value={review}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
