import React, { createContext, useContext, useState, useEffect } from 'react';
import annyang from 'annyang';

const VoiceRecognitionContext = createContext();

export function useVoiceRecognition() {
  return useContext(VoiceRecognitionContext);
}

export function VoiceRecognitionProvider({ children }) {
  const [listening, setListening] = useState(false);
  const [microphoneAccessRequested, setMicrophoneAccessRequested] = useState(false);

  const startListening = () => {
    setListening(true);

    // Request microphone access if not already requested
    if (!microphoneAccessRequested) {
      setMicrophoneAccessRequested(true);
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(() => {
          annyang.start();
          // Use SpeechSynthesisUtterance to set the desired text and voice
          const text = "Hey welcome to vision probe. The voice navigation system started.";
          const femaleVoice = window.speechSynthesis.getVoices().find((voice) => voice.name === 'Your Female Voice Name');
          const msg = new SpeechSynthesisUtterance(text);
          if (femaleVoice) {
            msg.voice = femaleVoice;
          }
          window.speechSynthesis.speak(msg);
        })
        .catch((error) => {
          console.error('Microphone access error:', error);
          // Handle the error, e.g., by informing the user
        });
    } else {
      annyang.start();
    }
  };

  const stopListening = () => {
    setListening(false);
    annyang.abort();
  };

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  useEffect(() => {
    // Initialize annyang
    annyang.start();

    // Define voice commands and actions
    const commands = {
      'start voice navigation': startListening,
      'stop voice navigation': stopListening,
      'go to home': () => {
        window.location.href = 'http://localhost:3000/home';
      },
      'go to Login': () => {
        window.location.href = 'http://localhost:3000/Login';
      },
      'go to registration': () => {
        window.location.href = 'http://localhost:3000/registration';
      },
      // Add more voice commands and actions as needed
      'go to new doctor': () => {
        window.location.href = 'http://localhost:3000/add_doctor';
      },
      'go to view doctor page': () => {
        window.location.href = 'http://localhost:3000/view_doctor';
      },
    };

    // Add commands to annyang
    annyang.addCommands(commands);

    // Handle errors and cleanup
    annyang.addCallback('error', (error) => {
      console.error('Voice recognition error:', error);
    });

    return () => {
      // Clean up when component unmounts
      annyang.removeCallback('error');
      annyang.removeCommands();
      annyang.abort();
    };
  }, []);

  const contextValue = {
    listening,
    toggleListening,
  };

  return (
    <VoiceRecognitionContext.Provider value={contextValue}>
      {children}
    </VoiceRecognitionContext.Provider>
  );
}
