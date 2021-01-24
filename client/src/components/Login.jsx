import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
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
      <Link to="/questions"><input type="submit" value="submit" /></Link>

    </form>
  );
}
