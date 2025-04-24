import { useState } from 'react';
import './App.css'
import Dialog from './Components/Dialog';

function App() {

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
     <p className='text-xl font-medium font-mono'>Hello Dialog</p>
     <Dialog/>
    </div>
  )
}

export default App
