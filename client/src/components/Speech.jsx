import React from 'react';

const sdk = require('microsoft-cognitiveservices-speech-sdk');
const { api, region } = require('../utils/speech.js');

const speechConfig = sdk.SpeechConfig.fromSubscription(api, region);

export default function Speech() {
  const fromMic = () => {
    const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    console.log('Speak into your microphone.');
    recognizer.recognizeOnceAsync((result) => {
      console.log(`RECOGNIZED: Text=${result.text}`);
    });
  };

  return (
    <div>
      <button type="button" onClick={() => { fromMic(); }}>mic on</button>
    </div>
  );
}
