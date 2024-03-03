import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import ContentA from './components/ContentA'; 
import ContentB from './components/ContentB'; 
import { Button } from './components/SharedComponents';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContentA />
      <Button onClick={() => console.log('Button clicked in ContentA')}>Click me in ContentA</Button>
      <ContentB />
      <Button onClick={() => console.log('Button clicked in ContentB')}>Click me in ContentB</Button>
      <Footer />
    </div>
  );
}

export default App;
