import { useState } from 'react';
import { signUp, signIn } from './services/fetch-utils';


export default function AuthPage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [error, setError] = useState('');
  

  async function handleSignUpSubmit(e) {
    e.preventDefault();
    try {
      const user = await signUp(signUpEmail, signUpPassword);
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }
  
  async function handleSignInSubmit(e) {
    e.preventDefault();
    try {
      const user = await signIn(signInEmail, signInPassword);
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }


  return (

    <div>
      <h1>{error}</h1>
      <p>Sign Up:</p>
      <form onSubmit={handleSignUpSubmit}>
        <label> Email:
          <input onChange={e => setSignUpEmail(e.target.value)} value={signUpEmail} type="email"/>
        </label>
        <label> Password:
          <input onChange={e => setSignUpPassword(e.target.value)} value={signUpPassword} type="password"/>
        </label>
        <button>Submit</button>
      </form>
      
      <p>Sign In:</p>
      <form onSubmit={handleSignInSubmit}>
        <label> Email:
          <input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type="email"/>
        </label>
        <label> Password:
          <input onChange={e => setSignInPassword(e.target.value)} value={signInPassword} type="password"/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
