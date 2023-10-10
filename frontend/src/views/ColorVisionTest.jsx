import { useEffect, useState } from "react";
import "../styles/colorVisionTest.css";
import colorVisionImage from "../assets/visionTests/colorVision/color-vision-front.png";
import popupImage from "../assets/visionTests/colorVision/popup-image.png"
import testImage1 from "../assets/visionTests/colorVision/IshiharaPlate1.png"
import testImage2 from "../assets/visionTests/colorVision/IshiharaPlate2.png"
import testImage3 from "../assets/visionTests/colorVision/IshiharaPlate3.png"
import testImage4 from "../assets/visionTests/colorVision/IshiharaPlate4.png"
import testImage5 from "../assets/visionTests/colorVision/IshiharaPlate5.png"
import testImage6 from "../assets/visionTests/colorVision/IshiharaPlate6.png"
import testImage7 from "../assets/visionTests/colorVision/IshiharaPlate7.png"
import testImage8 from "../assets/visionTests/colorVision/IshiharaPlate8.png"
import testImage9 from "../assets/visionTests/colorVision/IshiharaPlate9.png"
import testImage10 from "../assets/visionTests/colorVision/IshiharaPlate10.png"
import testImage11 from "../assets/visionTests/colorVision/IshiharaPlate11.png"
import testImage12 from "../assets/visionTests/colorVision/IshiharaPlate12.png"
import testImage13 from "../assets/visionTests/colorVision/IshiharaPlate13.png"
import testImage14 from "../assets/visionTests/colorVision/IshiharaPlate14.png"
import testImage15 from "../assets/visionTests/colorVision/IshiharaPlate15.png"
import testImage16 from "../assets/visionTests/colorVision/IshiharaPlate16.png"


const questionData = [
    {
        answerOptions: ["12", "1", "17", "15"],
        correctAnswer: "12",
        imageURL: testImage1
    },
    {
        answerOptions: ["3", "5", "8", "2"],
        correctAnswer: "8",
        imageURL: testImage2
    },
    {
        answerOptions: ["29", "70", "79", "21"],
        correctAnswer: "29",
        imageURL: testImage3
    },
    {
        answerOptions: ["10", "3", "5", "2"],
        correctAnswer: "5",
        imageURL: testImage4
    },
    {
        answerOptions: ["8", "12", "17", "15"],
        correctAnswer: "15",
        imageURL: testImage5
    },
    {
        answerOptions: ["10", "74", "21", "71"],
        correctAnswer: "74",
        imageURL: testImage6
    },
    {
        answerOptions: ["8", "Nothing", "6", "0"],
        correctAnswer: "6",
        imageURL: testImage7
    },
    {
        answerOptions: ["Nothing", "45", "12", "23"],
        correctAnswer: "45",
        imageURL: testImage8
    },
    {
        answerOptions: ["2", "5", "Nothing", "15"],
        correctAnswer: "5",
        imageURL: testImage9
    },
    {
        answerOptions: ["Nothing", "1", "7", "2"],
        correctAnswer: "7",
        imageURL: testImage10
    },
    {
        answerOptions: ["16", "6", "10", "Nothing"],
        correctAnswer: "16",
        imageURL: testImage11
    },
    {
        answerOptions: ["Nothing", "13", "78", "73"],
        correctAnswer: "73",
        imageURL: testImage12
    },
    {
        answerOptions: ["2", "6", "26", "15"],
        correctAnswer: "26",
        imageURL: testImage13
    },
    {
        answerOptions: ["42", "1", "2", "4"],
        correctAnswer: "42",
        imageURL: testImage14
    },
    {
        answerOptions: ["12", "5", "17", "Nothing"],
        correctAnswer: "Nothing",
        imageURL: testImage15
    },
    {
        answerOptions: ["45", "1", "Nothing", "15"],
        correctAnswer: "Nothing",
        imageURL: testImage16
    }
  ];

const ColorVisionTest = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showTest, setShowTest] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [currentImage, setCurrentImage] = useState({colorVisionImage})
    const [showModal, setShowModal] = useState(false);

    const takeTest = () => {
        setShowModal(true);
      };
    

    const startTest = () => {
    
        // Initialize the test
        setCurrentQuestion(0);
        setScore(0);
        setCurrentImage(questionData[0].imageURL);
        setShowTest(true);
        setShowScore(false);
        setShowModal(false);
      };

      const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === questionData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
      
        if (currentQuestion < questionData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setCurrentImage(questionData[currentQuestion + 1].imageURL);
        } else {
            // The test is completed
            // You can display the final score or any other relevant information here
            setShowTest(false);
            setShowScore(true);
        }
      };

      const handleNextClick = () => {
        if (currentQuestion < questionData.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setCurrentImage(questionData[currentQuestion + 1].imageURL);
        }
      };
    
      // Define a function to handle the "Previous" button click
      const handlePreviousClick = () => {
        if (currentQuestion > 0) {
          setCurrentQuestion(currentQuestion - 1);
          setCurrentImage(questionData[currentQuestion - 1].imageURL);
        }
      };

    return (
        <>  
            <div className="container flex-col">
                <div className="flex justify-center items-center header-bg shadow-md font-semibold text-white w-screen h-56 bg-gradient-to-r from-blue-500 to-green-500">
                    <h1 className="text-5xl">Color Vision Test</h1>
                </div>
            </div>
            
            <section className="color-vision-test" id="color-vision-test">
                <div className="container px-5">
                    <div className="inner-wrap flex gap-10">
                        <div className="col flex-none">
                            {showTest && (
                                <img src={currentImage} alt="color-vision" style={{ width: "370px", height: "370px" }}/>
                            )}
                        </div>
                        <div className="col">
                            <div className="content-wrapper text-center">
                                {showTest && !showScore ? (  
                                    <div>
                                        <p className="text-xl">
                                            What do you see ? <br></br><br></br>
                                        {questionData[currentQuestion].question}
                                        </p>
                                        <div className="answer-options">
                                        {questionData[currentQuestion].answerOptions.map((option) => (
                                            <button className="test-btn" key={option} onClick={() => handleAnswerClick(option)}>
                                            {option}
                                            </button>
                                        ))}
                                        </div>
                                        <br></br><br></br>
                                        <div>
                                            {/* "Previous" button */}
                                            {currentQuestion > 0 && (
                                                <button className="test-btn" onClick={handlePreviousClick}>
                                                Previous
                                                </button>
                                            )}
                                            {/* "Next" button */}
                                            {currentQuestion < questionData.length - 1 && (
                                                <button className="test-btn" onClick={handleNextClick}>
                                                Next
                                                </button>
                                            )}
                                            {/* "Finish Test" button */}
                                            {currentQuestion === questionData.length - 1 && (
                                                <button className="test-btn" onClick={() => setShowScore(true)}>
                                                Finish Test
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ) : !showScore ? (
                                    <div>
                                        <p className="text-xl">If you think you have&nbsp;color blindness, you can take this quick color blind test to learn more about your color vision.&nbsp;At the end of the test, you will be asked for your email address to view your results.</p>
                                        <br></br><br></br>
                                        <button className="test-btn" onClick={takeTest}>Take Test</button>
                                    </div>
                                    ) : (
                                        <>
                                        <div>
                                            <p className="text-xl">If you think you have&nbsp;color blindness, you can take this quick color blind test to learn more about your color vision.&nbsp;At the end of the test, you will be asked for your email address to view your results.</p>
                                            <br></br><br></br>
                                            <button className="test-btn" onClick={takeTest}>Take Test</button>
                                        </div>
                                        <div>
                                            <br></br><br></br>
                                            <p className="text-xl">
                                            Test Completed! Your Score: {score} / {questionData.length}
                                            </p>
                                        </div>
                                        </>
                                    )} 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showModal && (
                <div className="modal">
                    <div className="modal-content inner-wrap flex gap-10">
                        <div className="col-two">
                            <img src={popupImage} alt="popup-image" style={{ width: "450px", height: "450px" }}/>
                        </div>
                        <div className="col-two">
                            <h1 className="text-3xl font-bold text-cyan-600 text-left">Test Instructions</h1>
                            <br></br>
                            <p className="text-xl text-justify">
                                Test one eye at a time<br></br><br></br>

                                If you wear glasses or contact lenses, wear them for the test<br></br><br></br>

                                Hold the screen about 40cm or 15 inches away<br></br><br></br>

                                You will see an image composed of small colored dots.<br></br><br></br>

                                Look for a number hidden within the image. The number will be a single digit from 0 to 45.<br></br><br></br>

                                Select the appropriate button to indicate what you see in the image.<br></br><br></br>
                            </p>
                            <button className="test-btn mt-4" onClick={startTest}>
                                Start Test
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
       
    )

}

export default ColorVisionTest;