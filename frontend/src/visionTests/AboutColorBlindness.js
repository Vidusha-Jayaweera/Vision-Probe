import React, { useEffect } from 'react';
import annyang from 'annyang';

function LandingPage() {
  useEffect(() => {
    if (annyang) {
      annyang.addCommands({
        'start test': startTest,
      });
      annyang.start();
    }

    return () => {
      if (annyang) {
        annyang.removeCommands();
        annyang.abort();
      }
    };
  }, []);

  const startTest = () => {
    // Use window.location.href to navigate to the test page
    window.location.href = '/testcolor';
  };

  return (
    <div className="centered-div">
      <div className="shadowed-div">
        <h1>Color Blindness Information</h1>
        <p>Learn about color blindness and its impact.</p>
        <button onClick={startTest}>Start Test</button>
      </div>
    </div>
  );
}

export default LandingPage;