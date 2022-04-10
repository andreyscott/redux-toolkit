import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { amountAdded, update } from './features/counter';
import './App.css';

function App() {
  const value = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(amountAdded(6));
  };
  return (
    <div className="App">
  <p>Happy Sunday</p>
  <button onClick={handleClick}>
    count is: {value}
  </button>
    </div>
  );
}

export default App;
