import React, { useState, useEffect } from 'react';
import annyang from 'annyang';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Send formData to the server for submission
  };

  useEffect(() => {
    // Initialize annyang
    if (annyang) {
      annyang.addCommands({
        ' *name': (name) => {
          handleChange('name', name);
        },
        ' *email': (email) => {
          handleChange('email', email);
        },
        'submit the form': handleSubmit,
      });

      annyang.start();
    }

    return () => {
      if (annyang) {
        annyang.removeCommands();
      }
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
