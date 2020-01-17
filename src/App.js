import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { testAction } from './actions/action'

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => { dispatch(testAction); console.log("Dispatch se odigrao") }}>Test</button>
    </div>
  );
}

export default App;
