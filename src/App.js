import Navbar from "./components/Navbar.js";
import TextForm from "./components/textForm.js";
import About from "./components/About.js";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const Mode = (clr) => {
      showAlert("Mode changed", "success");
      if(clr ==='Black'){
        document.body.style.backgroundColor = clr;
        document.body.style.color = 'white'
      }
      else document.body.style.backgroundColor = clr;
  };
  return (
    <>
        <Router>
          <Navbar title="TextOperator" Mode={Mode} />
          <Alert alert={alert} />
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  text="Enter the text to perform operations"
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
