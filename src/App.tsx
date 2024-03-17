import React from 'react';
import AppRouter from './AppRouter';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
