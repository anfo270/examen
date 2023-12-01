import React, { useState } from 'react';

export const Calculator = () => {
  const [input, setInput] = useState<string>('');

  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const handleSquare = () => {
    setInput((prevInput) => (parseFloat(prevInput) ** 2).toString());
  };

  const handleTrigonometric = (func: string) => {
    setInput((prevInput) => {
      const radians = parseFloat(prevInput);
      switch (func) {
        case 'sin':
          return Math.sin(radians).toString();
        case 'cos':
          return Math.cos(radians).toString();
        case 'tan':
          return Math.tan(radians).toString();
        default:
          return prevInput;
      }
    });
  };

  return (
    <div className="container mt-5 " style={{ justifyContent:"center",alignContent:"center"}}>  
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={input}
          readOnly
        />
      </div>
      <div style={
        {display:"flex", justifyContent:'space-around',flexWrap:"wrap",alignContent:"center", width:300}
      }>
        <div style={{margin:10, width:300,justifyContent:"space-between"}}>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('1')}>1</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('2')}>2</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('3')}>3</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('4')}>4</button>
          </div>
        <div style={{margin:10, width:300,justifyContent:"space-between"}}>

          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('5')}>5</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('6')}>6</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('7')}>7</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('8')}>8</button>
          </div>
        <div style={{margin:10, width:300,justifyContent:"space-between"}}>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('9')}>9</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={handleSquare}>x²</button>
          
  
  
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('/')}>/</button>
          
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('-')}>-</button>
          </div>
        <div style={{margin:10, width:300,justifyContent:"space-between"}}>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleTrigonometric('sin')}>sin</button>
          <button className="btn btn-outline-secondary btn-lg"  style={{margin:5}} onClick={() => handleTrigonometric('cos')}>cos</button>
          
  
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleTrigonometric('tan')}>tan</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('*')}>*</button>
          </div>
        <div style={{margin:10, width:300,justifyContent:"space-between"}}>
          
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('0')}>0</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('.')}>.</button>
          
  
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={handleCalculate}>=</button>
          <button className="btn btn-outline-secondary btn-lg" style={{margin:5}} onClick={() => handleClick('+')}>+</button>

          <button className="btn btn-danger btn-lg" style={{margin:5}} onClick={handleClear}>C</button>
      </div>
      </div>
    </div>
  );
};
