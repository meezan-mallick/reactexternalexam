import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar';
import form from './components/form';
import table from './components/table';

function App() {
  return (
    <div className="App">
    <ToastContainer />
    <BrowserRouter>
    <Navbar />
        <Switch>
          <Route path="/" exact component={form} />
          <Route path="/show" exact component={table} />
        </Switch>
      </BrowserRouter>
  </div>
  );
}

export default App;
