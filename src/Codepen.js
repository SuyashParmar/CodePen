import React from 'react';
import App from './Components/App';
import {Routes, Route} from 'react-router-dom';


export default function Codepen() {
  return (
    <Routes>
      <Route path='/' element={<App />}/>
    </Routes>
  )
}
