console.log("NABER GÖKHAN ABİ, KOD ÇALIŞIYOR!");
import { useCounterController } from './src/controllers/CounterController';
import { CounterView } from './src/views/CounterView';

export default function App() {
  // 1. Beyni (Controller) çağırıyoruz ve içindeki malzemeleri alıyoruz
  const { count, increment, decrement } = useCounterController();

  // 2. Görünümü (View) çağırıyoruz ve beyni ona bağlıyoruz
  return (
    <CounterView 
      count={count} 
      onIncrement={increment} 
      onDecrement={decrement} 
    />
  );
}