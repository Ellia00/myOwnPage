import { useState } from 'react'
import Header from './components/Header'
import Me from './sections/Me'
import Education from './sections/Education'
import ExProject from './sections/ExProject'
import Contact from './sections/Contact'


function App() {

  return (
    <>
      <div>
        <Header />
        <Me />
        <Education />
        <ExProject />
        <Contact />

      </div>
    </>
  )
}

export default App
