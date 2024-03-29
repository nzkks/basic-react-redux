import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
