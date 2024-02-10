import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/navbar';
import Alert from './components/alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  let toggleFun = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.background = 'white';
      showAlert('light mode enable', 'success');
      document.title = "TextUtils - Light mode";
      setInterval(() => {
        document.title = "TextUtils is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils now";
      }, 1500);
    }
    else {
      setMode('dark');
      document.body.style.background = 'grey';
      showAlert('dark mode enable', 'primary');
      document.title = "TextUtils - Dark mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggle={toggleFun} aboutTitle="it is a page" />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm title="Ram ko khojo" mode={mode} showAlert={showAlert} />}>
          </Route>
          <Route exact path='/about' element={<About />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
