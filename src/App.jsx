import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import IntroPage from './components/IntroPage';
import TimeTable from './components/TimeTable';
import LoginPage from './components/LoginPage';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import FreePeriod from './components/FreePeriod';
import Marks from './components/Marks';
import AdminPanel from './components/Admin';
import NotificationPage from './components/Notification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/timetable" element={<TimeTable/>} />
        <Route path="/stu-dashboard" element={<StudentDashboard/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/free-period" element={<FreePeriod/>} />
        <Route path="/marks" element={<Marks/>} />
        <Route path="/teacher-dashboard" element={< TeacherDashboard/>} />
        <Route path="/" element={< IntroPage/>} />
        <Route path="/admin" element={< AdminPanel/>} />

        <Route path="/notification" element={< NotificationPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App