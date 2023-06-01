import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

function App() {
  const [result, setResult] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [start, setStart] = useState(10);
  const [amount, setAmount] = useState(5);

  const [modalStyle, setModalStyle] = useState({
    content: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      maxWidth: '400px',
      width: '100%',
    },
  });


  const handleOperation = async (operation) => {
    try {
      const response = await axios.get(`http://localhost:7076/api/Calculator/${operation}`, {
        params: {
          start,
          amount,
        },
      });
      setResult(response.data);
      setIsOpen(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStyleChange = (event) => {
    const { name, value } = event.target;
    setModalStyle((prevStyle) => ({
      content: {
        ...prevStyle.content,
        [name]: value,
      },
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'start') {
      setStart(parseInt(value, 10));
    } else if (name === 'amount') {
      setAmount(parseInt(value, 10));
    }
  };

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <div>
        <label>
          Start:
          <input type="number" name="start" value={start} onChange={handleInputChange} />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" value={amount} onChange={handleInputChange} />
        </label>
      </div>
      <button onClick={() => handleOperation('add')}>Add</button>
      <button onClick={() => handleOperation('subtract')}>Subtract</button>
      <div>
        <h3>Modal Style</h3>
        <label>
          Background Color:
          <input type="color" name="backgroundColor" value={modalStyle.content.backgroundColor} onChange={handleStyleChange} />
        </label>
        <label>
          Padding:
          <input type="text" name="padding" value={modalStyle.content.padding} onChange={handleStyleChange} />
        </label>
        <label>
          Border Radius:
          <input type="text" name="borderRadius" value={modalStyle.content.borderRadius} onChange={handleStyleChange} />
        </label>
        <label>
          Box Shadow:
          <input type="text" name="boxShadow" value={modalStyle.content.boxShadow} onChange={handleStyleChange} />
        </label>
        <label>
          Max Width:
          <input type="text" name="maxWidth" value={modalStyle.content.maxWidth} onChange={handleStyleChange} />
        </label>
        <label>
          Width:
          <input type="text" name="width" value={modalStyle.content.width} onChange={handleStyleChange} />
        </label>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyle}>
        <h2>Calculator Result</h2>
        <p>Result: {result}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
