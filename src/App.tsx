import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';
import { Provider } from'react-redux';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
        <Router>
            {/*<Provider store={store}>*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            {/*</Provider>*/}
        </Router>
    </>
  );
}

export default App;
