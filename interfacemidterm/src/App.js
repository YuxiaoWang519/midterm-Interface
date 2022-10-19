

import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import Home from './views/Home';
import Detail from "./views/Detail"
function App() {
  return (
    <Routes>
      <Route exact path='/'    element={<Navigate to="/Home"/>}/> 
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Detail" element={<Detail />}></Route>

      
    </Routes>

  );
}

export default App;
