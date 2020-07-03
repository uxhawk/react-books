import React from 'react';
import Navbar from './components/Navbar';
// import Jumbotron from './components/Jumbotron';
import SearchForm from './components/SearchForm';
import { StoreProvider } from './utils/GlobalState';

function App() {
  return (
    <>
    <StoreProvider> 
      <Navbar />
      <SearchForm />
    </StoreProvider>
    </>
    
  );
}

export default App;
