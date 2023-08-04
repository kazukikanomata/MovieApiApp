import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row } from './Row';
import { request } from 'http';

function App() {
  return (
    <div className="App">
      <Row title='NETFLIX ORIGUINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
       />
    </div>
  );
}

export default App;