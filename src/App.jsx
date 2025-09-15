import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import TimeTable from './pages/TimeTable';
import StudentDashboard from './pages/StudentDashboard';
import LoginPage from './pages/LoginPage';
import TeacherDashboard from './pages/TeacherDashboard';
import IntroPage from './pages/IntroPage';
import NotificationPage from './pages/Notification';
import MarksPage from './pages/Marks';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/stu-dashboard" element={<StudentDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/teacher-dashboard" element={< TeacherDashboard/>} />
        <Route path="/" element={< IntroPage/>} />
        <Route path="/notification" element={< NotificationPage/>} />
        <Route path="/marks" element={< MarksPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
