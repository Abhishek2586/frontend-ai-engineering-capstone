import { useState } from 'react'
import './App.css'
import SettingsForm from './components/SettingsForm'

function App() {
  return (
    <>
      <section id="center">
        <h1>Precise Settings App</h1>
        <SettingsForm />
      </section>
    </>
  )
}

export default App
