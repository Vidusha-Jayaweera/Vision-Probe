import React, { Component } from 'react';
import annyang from 'annyang';

class ColorBlindnessTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      selectedAnswer: '',
      correctAnswers: 0,
      instructionsVisible: true,
      showAnswer: false,
      questions: [
        {
          id: 1,
          text: 'What number do you see in the image?',
          image: 'ct1.png',
          answer: 74,
          audio: 'Question 1: What number do you see in the image?',
        },
        {
          id: 2,
          text: 'What number do you see in the image?',
          image: 'ct2.png',
          answer: 29,
          audio: 'Question 2: What number do you see in the image?',
        },
        // Add more questions with answers and audio prompts
      ],
      testId: null,
      answers: [], // Store user answers in an array
      colorBlindnessAssessment: '', // Store color blindness assessment
      eyesightPrediction: '', // Store eyesight prediction
    };
  }

  componentDidMount() {
    if (annyang) {
      annyang.addCommands({
        'next': this.nextQuestion,
        'previous': this.previousQuestion,
        'submit *answer': this.handleAnswerByVoice,
        'read question': this.readQuestion,
        'read summary': this.readSummary,
      });
      annyang.start();
    }
  }

  componentWillUnmount() {
    if (annyang) {
      annyang.removeCommands();
      annyang.abort();
    }
  }

  generateTemporaryTestId() {
    // Generate a random test ID
    return `Test-${Math.floor(Math.random() * 100000)}`;
  }

  showInstructions = () => {
    this.setState({ instructionsVisible: true });
  };

  hideInstructions = () => {
    this.setState({ instructionsVisible: false });
  };

  startTest = () => {
    this.hideInstructions();
  };

  handleAnswerByVoice = (answer) => {
    // Handle the answer received by voice
    this.setState({ selectedAnswer: answer });
    this.handleAnswer();
  };

  handleAnswer = () => {
    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    const userAnswer = this.state.selectedAnswer.trim();
    const isCorrect = userAnswer.toLowerCase() === currentQuestion.answer.toString();
  
    // Store user's answer in the answers array
    this.setState((prevState) => ({
      answers: [...prevState.answers, isCorrect],
    }));
  
    // Increment correctAnswers if the answer is correct
    if (isCorrect) {
      this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1,
      }));
    }
  
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      selectedAnswer: '',
      showAnswer: false,
    }));
  
    // Generate a temporary test ID and store the summary in local storage
    if (this.state.currentQuestionIndex === this.state.questions.length - 1) {
      const testId = this.generateTemporaryTestId();
      this.setState({ testId });
  
      const score = this.state.correctAnswers;
  
      // Calculate color blindness assessment based on the score
      let colorBlindnessAssessment = '';
      if (score === (2/2)) {
        colorBlindnessAssessment = 'You have normal color vision.';
      } else if (score === (1/2))  {
        colorBlindnessAssessment = 'You may have color vision deficiency.';
      }
  
      this.setState({ colorBlindnessAssessment });
  
      // Calculate eyesight prediction based on the number of correct answers
      let eyesightPrediction = '';
      if (score === (2/2)) {
        eyesightPrediction = 'Your eyesight appears to be excellent!';
      } else if (score === (1/2)) {
        eyesightPrediction = 'Your eyesight appears to be good, but you may consider a professional eye exam.';
      } else {
        eyesightPrediction = 'Your eyesight may require professional attention. Please consult an eye specialist.';
      }
  
      this.setState({ eyesightPrediction });
    }
  };
  

  revealAnswer = () => {
    this.setState({ showAnswer: true });
  };

  readQuestion = () => {
    // Read the current question aloud using the browser's speech synthesis
    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(currentQuestion.audio);
    speechSynthesis.speak(utterance);
  };

  readSummary = () => {
    // Read the summary aloud using the browser's speech synthesis
    const summary = `You answered ${this.state.correctAnswers} out of ${this.state.questions.length} questions. ${this.state.colorBlindnessAssessment}. ${this.state.eyesightPrediction}`;
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(summary);
    speechSynthesis.speak(utterance);
  };

  nextQuestion = () => {
    if (this.state.currentQuestionIndex < this.state.questions.length - 1) {
      this.setState({ currentQuestionIndex: this.state.currentQuestionIndex + 1 });
    }
  };

  previousQuestion = () => {
    if (this.state.currentQuestionIndex > 0) {
      this.setState({ currentQuestionIndex: this.state.currentQuestionIndex - 1 });
    }
  };

  render() {
    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    const styles = {
      centeredDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      },
      borderedShadowedDiv: {
        border: '2px solid #ccc',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        textAlign: 'center',
        maxWidth: '80%',
        margin: '0 auto',
        height: '600px',
        marginTop: '50px',
        backgroundColor: '#C0CBCC',
      },
    };

    return (
      <>
        <div style={styles.centeredDiv}>
          <div className="borderedShadowedDiv" style={styles.borderedShadowedDiv}>
            {this.state.currentQuestionIndex < this.state.questions.length ? (
              <>
                <h2>{currentQuestion.text}</h2>
                <img
                  src={currentQuestion.image}
                  alt="Color Blindness Test"
                  style={{ width: '300px', height: '300px', marginLeft: '50px', marginRight: '40px' }}
                />
                <div>
                  <label>
                    <input
                      type="text"
                      value={this.state.selectedAnswer}
                      onChange={(e) => this.setState({ selectedAnswer: e.target.value })}
                      style={{ marginTop: '20px', borderRadius: '45px', height: '40px', width: '250px', marginRight: '5px' }}
                    />
                  </label>
                </div>
                <br />
                <button
                  onClick={this.handleAnswer}
                  style={{
                    backgroundColor: '#3fbbc0',
                    color: 'white',
                    borderRadius: '30px',
                    width: '250px',
                    height: '40px',
                    margin: '10px 0',
                  }}
                >
                  Submit Answer
                </button>
                <br />
                <button
                  onClick={this.readQuestion}
                  style={{
                    backgroundColor: '#3fbbc0',
                    color: 'white',
                    borderRadius: '30px',
                    width: '250px',
                    height: '40px',
                    margin: '10px 0',
                  }}
                >
                  Read Question
                </button>
                <button
                  onClick={this.revealAnswer}
                  style={{
                    backgroundColor: '#3fbbc0',
                    color: 'white',
                    borderRadius: '30px',
                    width: '250px',
                    height: '40px',
                    margin: '10px 0',
                  }}
                >
                  Show Answer
                </button>
                {this.state.showAnswer && (
                  <div>
                    <p>Correct Answer: {currentQuestion.answer}</p>
                  </div>
                )}
              </>
            ) : (
              <div>
                <h1>Test Completed</h1>
                <h2>
                  <p>Correct Answers: {this.state.correctAnswers}</p>
                  <p>Total Questions: {this.state.questions.length}</p>
                  <p>Test ID: {this.state.testId}</p>
                  <p>Color Blindness Assessment: {this.state.colorBlindnessAssessment}</p>
                  <p>Eyesight Prediction: {this.state.eyesightPrediction}</p>
                </h2>
                <button
                  onClick={this.nextQuestion}
                  style={{
                    backgroundColor: '#3fbbc0',
                    marginTop: '20px',
                    borderRadius: '30px',
                    width: '250px',
                  }}
                >
                  Next Test
                </button>
                <button
                  onClick={this.readSummary}
                  style={{
                    backgroundColor: '#3fbbc0',
                    marginTop: '20px',
                    borderRadius: '30px',
                    width: '150px',
                  }}
                >
                  Read Summary
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default ColorBlindnessTest;
