import { useState } from 'react';
import './App.css'
import Cards from './Components/Cards';

function App() {
  const [card, setCards] = useState();

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
     <p className='text-xl font-medium font-mono'>Components with Motion</p>
     <Cards/>
    </div>
  )
}

export default App
