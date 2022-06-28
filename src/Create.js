import './App.css';
import { useState } from 'react';
import { addBook } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const { push } = useHistory();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [review, setReview] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await addBook({
      name: name,
      author: author,
      review: review
    });
    push('/booklist');
  }

  

  return (
    <div className="add-book">
      <form onSubmit={handleSubmit}>
        <label>Name
          <input onChange={e => setName(e.target.value)} value={name} required/>
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
