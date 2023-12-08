import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './cardComponent/App';
import PostulacionPage from './formularioComponent/PostulacionPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/postulacion/:cargo" element={<PostulacionPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;