/*
    ./client/components/App.jsx
*/
import React from 'react';
import { BrowserRouter, Route , Switch, Router} from 'react-router-dom';
import SearchPage from './Components/Search';
import ConfigData from './Config/Config';
 class App extends React.Component {
  constructor() {
      super();

  }
  render() {

    return (
		  <BrowserRouter >
              <Route path={ConfigData.getURL(ConfigData.url)} component={SearchPage}/>
          </BrowserRouter>
      );
  }
}
export default App