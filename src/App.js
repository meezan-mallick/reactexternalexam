import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import form from './components/form';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
