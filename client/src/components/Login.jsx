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
    <div className="center">
      <div className="center-left">
        <span className="eloquize">eloquize</span>
        <br />
        <span>behaviorial interview prep made easy</span>
      </div>
        <form className="center-right" onSubmit={handleSubmit}>
          <span>Log In</span>
          <input
            className="form-input"
            value={username}
            placeholder="username"
            type="username"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          />
          <input
            className="form-input"
            value={password}
            placeholder="password"
            type="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          <Link to="/questions">
            <input
              className="submit"
              type="submit"
              value="submit"
            />
          </Link>
        </form>
    </div>
  );
}
