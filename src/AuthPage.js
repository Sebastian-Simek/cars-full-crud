import { useState } from 'react';


export default function AuthPage() {
  return (
    

    <div>
      <div> Sign Up:
        <form>
          <label> Email:
            <input/>
          </label>
          <label> Password:
            <input/>
          </label>
          <button>Submit</button>
        </form>
      </div>
      <br/>
      <div> Sign In:
        <form>
          <label> Email:
            <input/>
          </label>
          <label> Password:
            <input/>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
