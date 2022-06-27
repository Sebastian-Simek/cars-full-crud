import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import AuthPage from './AuthPage';
import BookList from './BookList';
import Create from './Create';
import EditBook from './EditBook';
import { client } from './services/client';
import { logOut } from './services/fetch-utils';

export default function App() {
  const [user, setUser] = useState(client.auth.user());


  async function handleLogOut(){
    await logOut();
    setUser('');
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create">Add new Book</Link>
            </li>
            <li>
              <Link to="/booklist">Your Books</Link>
            </li>
            <li>
              <Link to="/editbook">Update your Books</Link>
            </li>
            <div>
              {user && 
              <button onClick={handleLogOut}>Logout</button>}
            </div>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            {
              !user ? <AuthPage setUser={setUser}/>
                : <Redirect to="/booklist" />
            }
            
          </Route>
          <Route exact path="/booklist">
            <BookList />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/editbook">
            <EditBook />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}