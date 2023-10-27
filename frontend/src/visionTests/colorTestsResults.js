import React, { Component } from 'react';

class ColorBlindnessTestResults extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    // Fetch the data and update the state
    fetch('http://localhost:5000/results/add') // Adjust the URL to your API endpoint
      .then((response) => response.json())
      .then((data) => {
        this.setState({ results: data }); // Update the state with the fetched results
      })
      .catch((error) => {
        console.error('Error fetching results:', error);
      });
  }

  render() {
    const { results } = this.state;

    return (
      <div>
        <h1>Results of the First Test</h1>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{`Question ID: ${result.questionId}, Answer: ${result.answer}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ColorBlindnessTestResults;
