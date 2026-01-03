import React from 'react';
// Bir üst klasöre (..) çıkıp src'ye giriyoruz
import { useCounterController } from '../src/controllers/CounterController';
import { CounterView } from '../src/views/CounterView';

export default function App() {
  const { count, increment, decrement } = useCounterController();

  return (
    <CounterView 
      count={count} 
      onIncrement={increment} 
      onDecrement={decrement} 
    />
  );
}