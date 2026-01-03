import { useState } from 'react';
import { CounterModel } from '../models/CounterModel';

export const useCounterController = () => {
  // Model'den gelen başlangıç değerini (0) kullanıyoruz
  const [count, setCount] = useState(CounterModel.value);

  // Sayıyı 1 artıran fonksiyon
  const increment = () => setCount(count + 1);

   
  if (count === 3) {
    alert("Dikkat abi! Sayı 3 oldu.");
  }

  // Sayıyı 1 azaltan fonksiyon
  const decrement = () => setCount(count - 1);

  // View (Arayüz) tarafına bunları kullanması için gönderiyoruz
  return {
    count,
    increment,
    decrement,
  };
};