import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  display: flex;
  width: 50%;
  height: 25%;
  justify-content: space-around;
  overflow: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const Title = styled.span`
  font-size: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 70%;
`;

const Input = styled.input`
  background: rgba(147, 188, 185, 0.3);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 5px;
  font-family: Comfortaa;
  font-style: normal;
  font-weight: normal;
  color: #000000;
`;

const Submit = styled.input`
  background: #93BCB9;
  border: 1px solid #93BCB9;
  border-radius: 30px;
  padding: 5px;
  font-family: Comfortaa;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  cursor: pointer;
  width: 100%;
`;

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
    <Container>
      <TitleContainer>
        <Title>eloquize</Title>
        <br />
        <span>behaviorial interview prep made easy</span>
      </TitleContainer>
      <Form onSubmit={handleSubmit}>
        <span>Log In</span>
        <Input
          className="form-input"
          value={username}
          placeholder="username"
          type="username"
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        />
        <Input
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
          <Submit
            type="submit"
            value="submit"
          />
        </Link>
      </Form>
    </Container>
  );
}
