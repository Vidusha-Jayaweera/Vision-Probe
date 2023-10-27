import React from 'react';
import { useVoiceRecognition } from './voice';

function MyComponent() {
  const { listening, toggleListening } = useVoiceRecognition();

  return (
    <div>
      {listening ? (
        <p>Listening... Say "Stop voice navigation" to stop.</p>
      ) : (
        <p>Say "Start voice navigation" to begin.</p>
      )}
      {/* <button onClick={toggleListening} style={{backgroundColor:''}}>
        {listening ? 'Stop Listening' : 'Start Listening'}
      </button>
      Your component content */}
    </div>
  );
}

export default MyComponent;
