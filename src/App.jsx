
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/countries';

const countriesFetch = fetch('https://openapi.programming-hero.com/api/all')
                       .then(res => res.json());

function App() {
 

  return (
    <>
      
      <h1>In the All Countries</h1>

      <Suspense fallback={<p>Bro I am Loading....</p>}>
        <Countries countriesFetch = {countriesFetch}></Countries>
      </Suspense>
      
      
    </>
  )
}

export default App
