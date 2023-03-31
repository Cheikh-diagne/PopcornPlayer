import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoPage from './components/pages/NoPage';

const test = () => {
  return (
    <div>Test</div>
  )
}

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={test()} />
          <Route path="/home" element={test()} />
          <Route path="/login" element={test()} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </Router>
  );
}

export default App