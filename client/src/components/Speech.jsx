import React, { useState } from 'react';

const sdk = require('microsoft-cognitiveservices-speech-sdk');
const { api, region } = require('../utils/speech.js');

const speechConfig = sdk.SpeechConfig.fromSubscription(api, region);

export default function Speech() {
  const [typed, changeTyped] = useState('');

  const handleChange = (e) => {
    changeTyped(e.target.value);
  };

  const fromMic = () => {
    const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    console.log('Speak into your microphone.');
    recognizer.recognizeOnceAsync((result) => {
      changeTyped(result.text);
      console.log(`RECOGNIZED: Text=${result.text}`);
    });
  };

  console.log(typed);

  return (
    <div>
      <button type="button" onClick={() => { fromMic(); }}>mic on</button>
      <form>
          <label>Diction:
          <textarea value={typed} onChange={handleChange} />
          </label>
      </form>
    </div>
  );
}
