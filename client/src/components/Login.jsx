import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('./login', {
      params: {
        password,
        username,
      },
    })
      .then((res) => {
        console.log(res);
        setUserId(res);
      });
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <div>Sign In</div>
        <input
          value={username}
          placeholder="username"
          type="username"
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
