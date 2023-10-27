import React from 'react';

class ButtonList extends React.Component {
  render() {
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
        maxWidth: '500px',
        height: '500px',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: '#3fbbc0',
        color: 'white',
        borderRadius: '30px',
        width: '300px',
        padding: '10px',
        cursor: 'pointer',
        marginBottom: '10px',
        marginTop: '40px',
      },
    };

    // CSS for the body element or a container div
    const pageStyles = {
      background: 'linear-gradient(to bottom, #a6c0fe, #f68084)', // Set your desired background color here
      margin: '0', // Ensure there's no margin
      height: '100vh', // Fill the entire viewport height
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    startTest1 = () => {
        window.location.href = "/AboutColorblindness";
      };

    startTest2 = () => {
        window.location.href = "/button_list_test";
    };
    startTest3 = () => {
        window.location.href = "/button_list_test";
      };

    startTest4 = () => {
        window.location.href = "/button_list_test";
      };

    return (
      <div style={pageStyles}>
        <div style={styles.borderedShadowedDiv}>
          <button style={styles.button} onClick={this.startTest1}>Colour Blindness Test</button>
          <button style={styles.button} onClick={this.startTest2}>Visual Activity Test</button>
          <button style={styles.button} onClick={this.startTest3}>Astigmatism Test</button>
          <button style={styles.button} onClick={this.startTest4}>Test 4</button>
        </div>
      </div>
    );
  }
}

export default ButtonList;
