import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

// api
const { api, region } = process.env.NODE_ENV === 'production' ? { api: process.env.AZURE_SPEECH_API_KEY, region: process.env.AZURE_SPEECH_REGION } : require('../utils/speech.js');

const speechConfig = sdk.SpeechConfig.fromSubscription(api, region);

const Container = styled.div`
  position: absolute;
  left: 25%;
  top: 20%;
  height: 60%;
  width: 50%;
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
  min-height: 15%;
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
  height: 30%;
`;

const DictionSection = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35%;
`;

const DictionBox = styled.textarea`
  font-family: Comfortaa;
  font-style: normal;
  font-weight: normal;
  border-radius: 30px;
  width: 80%;
  max-width: 100%;
  height: 100%;
  padding: 20px;
`;

const SectionHeader = styled.span`
  font-size: 20px;
  margin: 20px 0;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 20%;
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
            <SectionHeader>POWER WORDS:</SectionHeader>
            {question.keys.map((word, i) => <span key={i}>{word}</span>)}
          </WordsSection>
          <DictionSection>
            <SectionHeader>My recorded answer:</SectionHeader>
            <DictionBox
              value={speech}
              onChange={handleChange}
            />
          </DictionSection>
          <ButtonSection>
            <StyledButton
              isRecording={isRecording}
              onClick={!isRecording ? () => fromMic() : () => stopMic()}
            >
              {isRecording ? 'stop' : 'record'}
            </StyledButton>
            <StyledButton
              onClick={() => changeSpeech('')}
            >
              reset
            </StyledButton>
            <StyledButton>submit</StyledButton>
          </ButtonSection>
        </Card>
      </Container>
    </div>
  );
}
