import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const sdk = require('microsoft-cognitiveservices-speech-sdk');
//api
const { api, region } = require('../utils/speech.js');

const speechConfig = sdk.SpeechConfig.fromSubscription(api, region);

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

const WordsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
`;

const PowerWords = styled.span`
  font-size: 20px;
  margin: 20px 0;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 30%;
`;

const StyledButton = styled.button`
  background: ${props => props.isRecording ? '#EA95B0' : '#F2D8E1'};
  border: 1px solid #000000;
  border-radius: 30px;
  cursor: pointer;
  padding: 5px 40px;
  font-family: Comfortaa;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #000000;
  margin: 0 10px;
  height: 50%;
`;

export default function Speech({ question }) {
  const [speech, changeSpeech] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleChange = (e) => {
    changeSpeech(e.target.value);
  };

  const fromMic = () => {
    setIsRecording(true);

    const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    console.log('Speak into your microphone.');

    //start recognizing audio
    recognizer.recognizeOnceAsync((result) => {
      changeSpeech(result.text);
      console.log(`RECOGNIZED: Text=${result.text}`);
    });
  };

  const stopMic = () => {
    setIsRecording(false);

    const recognizer = new sdk.SpeechRecognizer(speechConfig);

    recognizer.sessionStopped = (s, e) => {
      console.log("\n    Session stopped event.");
      recognizer.stopContinuousRecognitionAsync();
    };
  };

  console.log(speech);

  return (
    <div>
      <NavBar />
      <Container>
        <Card>
          <QuestionTitle>{question.question}</QuestionTitle>
          <WordsSection>
            <PowerWords>POWER WORDS:</PowerWords>
            {question.keys.map((word, i) => <span key={i}>{word}</span>)}
          </WordsSection>
          <ButtonSection>
            <StyledButton
              isRecording={isRecording}
              onClick={!isRecording ? () => fromMic() : () => stopMic()}
            >
              {isRecording ? 'stop' : 'record'}
            </StyledButton>
            <StyledButton>reset</StyledButton>
            <StyledButton>submit</StyledButton>
          </ButtonSection>
        </Card>
      </Container>
    </div>
  );
}