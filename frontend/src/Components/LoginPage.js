import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username === 'Admin' && password === 'Admin1') {
      history.push('/homepage');
    } else {
      alert('Incorrect username or password');
    }
  }

  return (
      <div className='login'>
         <div className="header">
      <h1>Login</h1>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className='input-wrapper2' >
        <div>
          <input 
          placeholder="Username"
          className='inputlogin' 
          type="text" 
          name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        </div>
        <div className='input-wrapper2' >
          <div>
          <input 
          placeholder="Password"
          className='inputlogin'
          type="password" 
          name="password" 
          value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        </div>
        <div>
        <button class="btn btn-primary btn-block btn-large" type="submit">Do I want to work today?</button>
        </div>
      </form>
      </div>
  );
}

export default LoginPage;