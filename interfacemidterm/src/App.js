

import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import Home from './views/Home';
function App() {
  return (
    <Routes>
      <Route path='/'    element={<Navigate to="/Home"/>}/> 
      <Route path="/Home" element={<Home />}></Route>

      
    </Routes>
    
  );
}

export default App;
