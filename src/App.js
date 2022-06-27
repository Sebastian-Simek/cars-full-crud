import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthPage from './AuthPage';
import BookList from './BookList';
import Create from './Create';
import EditBook from './EditBook';

export default function App() {
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
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <AuthPage />
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