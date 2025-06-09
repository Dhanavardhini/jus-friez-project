import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './sections/Home';

const routes = [
  { path: '/', element: <Home /> },
 
];
function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

