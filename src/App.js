import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import SearchAndSortPage from './Components/SearchAndSort';
import FormPage from './Components/Form';
import SortingFeature from './Components/SortingFeature';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <h1 className="title">Board, Never Bored!</h1>
      </header>
      <main>
        <div className="search-bar">
          <SearchAndSortPage />
        </div>
        <div className="sorting-feature">
          <SortingFeature />
        </div>
        <HomePage />
        <div className="form-button">{FormPage}</div>
      </main>
    </div>
  );
}

export default App;
