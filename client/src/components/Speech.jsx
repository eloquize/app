import React, { useState } from 'react';
import NavBar from './NavBar';

const sdk = require('microsoft-cognitiveservices-speech-sdk');
//api
const { api, region } = require('../utils/speech.js');

const speechConfig = sdk.SpeechConfig.fromSubscription(api, region);

export default function Speech() {
  const [speech, changeSpeech] = useState('');

  const handleChange = (e) => {
    changeSpeech(e.target.value);
  };

  const fromMic = () => {
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
      <div>
        <button type="button" onClick={() => { fromMic(); }}>start recording</button>
        <button type="button" onClick={() => { stopMic(); }}>stop recording</button>
        <form>
          <label>
            Diction:
            <textarea value={speech} onChange={handleChange} />
          </label>
        </form>
      </div>
    </div>
  );
}
