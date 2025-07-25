import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TossMainScreen from './pages/TossMainScreen';
import TaskBottomSheet from './pages/TaskBottomSheet';
import PaymentPage from './pages/PaymentPage';
import NotificationPage from './pages/NotificationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TossMainScreen />} />
        <Route path="/tasks" element={<TaskBottomSheet />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App