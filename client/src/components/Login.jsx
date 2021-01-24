import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div className="center-right">
      <form onSubmit={handleSubmit}>
        <div className="title">Sign In</div>
        <input
          value={username}
          placeholder="username"
          type="username"
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <br />
        <Link to="/questions"><input type="submit" value="submit" /></Link>
      </form>
    </div>
  );
}
