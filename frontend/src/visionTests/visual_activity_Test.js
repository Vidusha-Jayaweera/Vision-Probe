import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import annyang from 'annyang';

class VisualActivityTest extends Component {
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
          text: 'Count the number of green circles in the image.',
          image: 'va1.jpg',
          answer: 2,
          audio: 'Question 1: Count the number of green circles in the image.',
        },
        {
          id: 2,
          text: 'Type the numbers that you can see in the image (e.g., "359").',
          image: 'va2.jpg',
          answer: 359,
          audio: 'Question 2: Type the numbers that you can see in the image.',
        },
        // Add more questions with answers and audio prompts
      ],
      testId: null,
      answers: [], // Store user answers in an array
      eyesightAssessment: '', // Store eye sight assessment
    };
  }

  componentDidMount() {
    if (annyang) {
      annyang.addCommands({
        'next': this.nextQuestion,
        'previous': this.previousQuestion,
        'submit *answer': this.handleAnswerByVoice,
        'read question': this.readQuestion, // Add voice command for reading the question
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

//   handleAnswerByVoice = (answer) => {
//     // Handle the answer received by voice
//     this.setState({ selectedAnswer: answer });
//     this.handleAnswer();
//   };

  handleAnswer = () => {
    const currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    const userAnswer = parseInt(this.state.selectedAnswer, 10);
    const isCorrect = !isNaN(userAnswer) && userAnswer === currentQuestion.answer;

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

      // Eye sight assessment based on the score
      let eyesightAssessment = '';
      if (score === 2/2) {
        eyesightAssessment = 'Your eyesight is excellent!';
      } else if (score === 1/2) {
        eyesightAssessment = 'Your eyesight is good, but it could be better.';
      } else if (score === 0/2) {
        eyesightAssessment = 'It is recommended to have your eyesight checked by a professional.';
      }

      this.setState({ eyesightAssessment });
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
    const summary = `You answered ${this.state.correctAnswers} out of ${this.state.questions.length} questions. ${this.state.eyesightAssessment}`;
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

  nextTest =()=>{
    window.location.href ='/AboutColorblindness';
  }

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
        maxWidth: '800px',
        margin: '0 auto',
        height: '600px',
        marginTop: '150px',
        backgroundColor: '#C0CBCC',
      },
    };

    return (
      <>
        <Header />
        <div style={styles.centeredDiv}>
          <div className="borderedShadowedDiv" style={styles.borderedShadowedDiv}>
            {this.state.currentQuestionIndex < this.state.questions.length ? (
              <>
                <h2>{currentQuestion.text}</h2>
                <img
                  src={currentQuestion.image}
                  alt="Visual Activity Test"
                  style={{ width: '450px', height: '350px', marginLeft: '100px', marginRight: '30px' }}
                />
                <button
                  onClick={this.readQuestion}
                  style={{
                    backgroundColor: '#3fbbc0',
                    color: 'white',
                    borderRadius: '30px',
                    width: '150px',
                  }}
                >
                  Read Question
                </button>
                <div>
                  <label>
                   <b> Your Answer: </b>
                    <input
                      type="text"
                      value={this.state.selectedAnswer}
                      onChange={(e) => this.setState({ selectedAnswer: e.target.value })}
                      style={{ marginTop: '20px' , width:'250px' , height:'100px'}}
                    />
                  </label>
                </div>
                <br />
                <button
                  onClick={this.handleAnswer}
                  style={{
                    backgroundColor: '#3fbbc0',
                    marginLeft: '10px',
                    color: 'white',
                    borderRadius: '30px',
                    width: '150px',
                  }}
                >
                  Submit Answer
                </button>
                <br />
                {/* <button
                  onClick={this.revealAnswer}
                  style={{
                    backgroundColor: '#f0f0f0',
                    marginTop: '20px',
                    borderRadius: '30px',
                    width: '150px',
                  }}
                >
                  Show Answer
                </button> */}
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
                  <p>Eyesight Assessment: {this.state.eyesightAssessment}</p>
                </h2>
                <button
                  onClick={this.nextTest}
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
        <Footer />
      </>
    );
  }
}

export default VisualActivityTest;
