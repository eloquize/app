import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Container = styled.div`
  position: absolute;
  left: 30%;
  top: 30%;
  height: 50%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.span`
  font-size: 30px;
  height: 10%;
`;

const Card = styled.div`
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 30px;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const QuestionTitle = styled.span`
  background: #F3CAD8;
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  min-height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 0;
  border-bottom: 2px solid #000000;
  font-size: 20px;
`;

const Section = styled.div`
  display: flex;
  padding: 20px;
  height: 30%;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 30%;
`;

const SectionTitle = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;

const WordsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background: ${props => props.option === 'nextQuestion' ? '#F2D8E1' : '#EA95B0'};
  border: 1px solid #000000;
  border-radius: 30px;
  cursor: pointer;
  padding: 5px 20px;
  width: 40%;
  height: 100%;
  font-family: Comfortaa;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #000000;
  margin: 0 10px;
`;

export default function Questions({ questions, setCurrentQuestion }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuestion = () => {
    let index;
    if (currentIndex === questions.length - 1) {
      index = 0;
    } else {
      index = currentIndex + 1;
    }

    setCurrentIndex(index);
    setCurrentQuestion(questions[index]);
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentIndex]);
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <Header>current behaviorial questions:</Header>
        <br />
        <Card>
          <QuestionTitle>{questions[currentIndex].question}</QuestionTitle>
          <Section>
            <SectionTitle>My power words:</SectionTitle>
            <WordsContainer>
              {questions[currentIndex].keys.map((word, i) => <span key={i}>{word}</span>)}
            </WordsContainer>
          </Section>
          <Section>
            <SectionTitle>Times practiced:</SectionTitle>
            <span>{questions[currentIndex].times}</span>
          </Section>
          <ButtonSection>
            <StyledButton
              option="nextQuestion"
              type="button"
              onClick={() => nextQuestion()}
            >
              next question
            </StyledButton>
            <StyledButton type="button">
              <Link to="/speech">
                practice now
              </Link>
            </StyledButton>
          </ButtonSection>
        </Card>
      </Container>
    </div>
  );
};
