import React from 'react';
import './App.css';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <>
      <section id="center" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <TaskManager />
        </div>
      </section>
    </>
  );
}

export default App;
