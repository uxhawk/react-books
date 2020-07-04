import React from 'react';
import { StoreProvider } from './utils/GlobalState';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search';
import SavedBooks from './pages/SavedBooks';

function App() {
  return (
    <Router>
      <>
        <StoreProvider> 
          <Switch>
            <Route exact path={['/', '/search']} component={Search} />
            <Route exact path='/saved' component={SavedBooks} />
          </Switch>
        </StoreProvider>
      </>
    </Router>

    
    
  );
}

export default App;

