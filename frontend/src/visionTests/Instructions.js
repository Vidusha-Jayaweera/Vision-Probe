import React, { Component } from 'react';
import Header from '../components/header'; // Include your header component
import Footer from '../components/Footer'; // Include your footer component

class ColorBlindnessTestInstructions extends Component {
  constructor() {
    super();
    this.instructionsSpeechSynthesis = new SpeechSynthesisUtterance();
    this.state = {
      readingInstructions: false,
      currentInstructionIndex: 0,
      instructions: [
        'To navigate through the questions, you can use your voice commands (e.g., say "next" or "back"). Ensure your microphone is enabled.',
        'Say "next" to go to the next question.',
        'Say "back" to go to the previous question.',
        'Say "read question" to have the system read the question aloud.',
        'Say "read summary" to have the system read the summary.',
      ],
    };
  }

  startTest = () => {
    window.location.href = "/button_list_test";
  };

  readNextInstruction = () => {
    const { currentInstructionIndex, instructions } = this.state;
    if (currentInstructionIndex < instructions.length) {
      this.instructionsSpeechSynthesis.text = instructions[currentInstructionIndex];
      this.instructionsSpeechSynthesis.onend = () => {
        this.setState({ currentInstructionIndex: currentInstructionIndex + 1 }, () => {
          this.readNextInstruction();
        });
      };
      window.speechSynthesis.speak(this.instructionsSpeechSynthesis);
    } else {
      this.setState({ readingInstructions: false, currentInstructionIndex: 0 });
    }
  };
  
  readInstructions = () => {
    this.setState({ readingInstructions: true, currentInstructionIndex: 0 });
    this.readNextInstruction();
  };
  

  render() {
    const styles = {
      centeredDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        marginTop: '100px',
      },
      borderedShadowedDiv: {
        border: '2px solid #ccc',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        textAlign: 'left',
        maxWidth: '700px',
        height: '500px',
        backgroundColor: '#C0CBCC',
        paddingLeft: '20px',
      },
      button: {
        backgroundColor: '#3fbbc0',
        color: 'white',
        borderRadius: '30px',
        width: '150px',
        padding: '10px',
        cursor: 'pointer',
        width: '200px',
        marginTop: '20px',
      },
      instructionList: {
        paddingLeft: '20px',
      },
      instructionListItem: {
        listStyleType: 'decimal',
      },
    };

    return (
      <div>
        <Header />
        <div style={styles.centeredDiv}>
          <div style={styles.borderedShadowedDiv}>
            <center><h2>Test Instructions</h2></center>
            <p>
              <h5>To navigate through the questions, you can use your voice commands (e.g., say "next" or "back"). Ensure your microphone is enabled.</h5>
            </p>
            <div style={styles.instructionList}>
              <h4><ul>
                {this.state.instructions.map((instruction, index) => (
                  <li style={styles.instructionListItem} key={index}>
                    {instruction}
                  </li>
                ))}
              </ul></h4>
            </div>
            <center><button
              style={styles.button}
              onClick={this.startTest}
            >
              Start Test
            </button>
            <button
              style={styles.button}
              onClick={this.readInstructions}
              disabled={this.state.readingInstructions}
            >
              {this.state.readingInstructions ? 'Reading Instructions...' : 'Read Instructions'}
            </button></center>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ColorBlindnessTestInstructions;
