import { useState } from "react";
import {
  Users,
  Calendar,
  School,
  ClipboardList,
  ChevronDown,
  ChevronUp,
  Menu,
} from "lucide-react";
import { useNavigate } from "react-router";

function AdminPanel() {
  const today = new Date().toLocaleDateString();
  const navigate = useNavigate();

  const [teachers] = useState([
    { id: 1, name: "Prof. Anil Kumar", subject: "Maths", present: true },
    { id: 2, name: "Dr. Neha Sharma", subject: "Science", present: false },
    { id: 3, name: "Mr. Rajesh Gupta", subject: "English", present: true },
    { id: 4, name: "Ms. Priya Mehta", subject: "History", present: false },
  ]);

  const [classes, setClasses] = useState([
    {
      id: "10-A",
      students: [
        { name: "Aarav Sharma", present: true, performance: "Good" },
        { name: "Ishita Verma", present: false, performance: "Needs Improvement in Maths" },
        { name: "Rohan Gupta", present: true, performance: "Average in Science" },
      ],
    },
    {
      id: "10-B",
      students: [
        { name: "Kavya Nair", present: true, performance: "Excellent" },
        { name: "Devansh Singh", present: true, performance: "Average in English" },
        { name: "Meera Patel", present: false, performance: "Weak in History" },
      ],
    },
    {
      id: "11-C",
      students: [
        { name: "Yash Raj", present: true, performance: "Good" },
        { name: "Ananya Mishra", present: true, performance: "Strong in Science" },
        { name: "Krishna Das", present: false, performance: "Poor in Maths" },
      ],
    },
  ]);

  const [openClass, setOpenClass] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalStudents = classes.reduce((acc, cls) => acc + cls.students.length, 0);
  const presentStudents = classes.reduce(
    (acc, cls) => acc + cls.students.filter((s) => s.present).length,
    0
  );
  const absentStudents = totalStudents - presentStudents;

  const timetable = [
    { time: "9:00 AM - 9:45 AM", subject: "Mathematics", teacher: "Prof. Anil Kumar" },
    { time: "10:00 AM - 10:45 AM", subject: "Science", teacher: "Dr. Neha Sharma" },
    { time: "11:00 AM - 11:45 AM", subject: "English", teacher: "Mr. Rajesh Gupta" },
    { time: "1:00 PM - 1:45 PM", subject: "History", teacher: "Ms. Priya Mehta" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      <div className="flex flex-1">
        {/* Sidebar (Desktop) */}
        <div className="hidden md:flex w-64 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-6 flex-col shadow-xl">
          <h2 className="text-2xl font-extrabold tracking-wide mb-10">EduSync</h2>
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <button className="text-left hover:text-yellow-300 transition" onClick={() => navigate("/")}>Home</button>
            <button className="text-left hover:text-yellow-300 transition">Teachers</button>
            <button className="text-left hover:text-yellow-300 transition">Students</button>
            <button className="text-left hover:text-yellow-300 transition">Settings</button>
          </nav>
        </div>

        {/* Main Section */}
        <div className="flex-1 flex flex-col relative">
          {/* Navbar */}
          <div className="flex justify-between items-center p-4 border-b 
            text-black shadow-sm"
          >
            <h1 className="text-xl font-bold flex items-center gap-2">
              <School /> Admin Panel
            </h1>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-14 right-4 bg-gradient-to-b from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg w-48 z-50 md:hidden">
              <nav className="flex flex-col p-3 gap-2 text-sm">
                <button className="text-left hover:text-yellow-300 transition" onClick={() => navigate("/")}>Home</button>
                <button className="text-left hover:text-yellow-300 transition">Teachers</button>
                <button className="text-left hover:text-yellow-300 transition">Students</button>
                <button className="text-left hover:text-yellow-300 transition">Settings</button>
              </nav>
            </div>
          )}

          {/* Dashboard Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Teacher List */}
            <div className="bg-white/80 backdrop-blur-lg border rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-indigo-700 mb-2">Teacher Attendance</h2>
              <p className="text-xs text-gray-500 mb-4">📅 {today}</p>
              <ul className="space-y-2">
                {teachers.map((t) => (
                  <li
                    key={t.id}
                    className={`flex justify-between items-center p-2 rounded-lg shadow-sm ${
                      t.present ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    <span>
                      {t.name} ({t.subject})
                    </span>
                    <span
                      className={`font-semibold ${
                        t.present ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {t.present ? "Present" : "Absent"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Summary */}
            <div className="bg-white/80 backdrop-blur-lg border rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-indigo-700 mb-2">Student Summary</h2>
              <p className="text-xs text-gray-500 mb-4">📅 {today}</p>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-green-600">Present Students: {presentStudents}</p>
                <p className="font-semibold text-red-600">Absent Students: {absentStudents}</p>
                <p className="font-semibold text-indigo-600">Total Students: {totalStudents}</p>
              </div>
            </div>

            {/* Timetable */}
            <div className="lg:col-span-2 bg-white/80 backdrop-blur-lg border rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-indigo-700 mb-2">Default Timetable (10-A)</h2>
              <p className="text-xs text-gray-500 mb-4">📅 {today}</p>
              <table className="w-full text-sm border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Time</th>
                    <th className="p-2 border">Subject</th>
                    <th className="p-2 border">Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable.map((slot, idx) => {
                    const teacherObj = teachers.find((t) => t.name === slot.teacher);
                    return (
                      <tr key={idx} className={teacherObj?.present ? "" : "bg-red-50"}>
                        <td className="p-2 border">{slot.time}</td>
                        <td className="p-2 border">{slot.subject}</td>
                        <td className="p-2 border">
                          {slot.teacher}{" "}
                          {!teacherObj?.present && (
                            <span className="text-red-600 font-semibold">(Absent)</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button
                onClick={() => (window.location.href = "/timetable")}
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold transition"
              >
                Fix Timetable
              </button>
            </div>

            {/* Classes Dropdown */}
            <div className="lg:col-span-2 bg-white/80 backdrop-blur-lg border rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-bold text-indigo-700 mb-2">Classes Overview</h2>
              <p className="text-xs text-gray-500 mb-4">📅 {today}</p>
              {classes.map((cls) => (
                <div key={cls.id} className="mb-4">
                  <button
                    onClick={() => setOpenClass(openClass === cls.id ? null : cls.id)}
                    className="flex justify-between items-center w-full bg-gray-100 px-4 py-2 rounded-lg font-semibold"
                  >
                    Class {cls.id}
                    {openClass === cls.id ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {openClass === cls.id && (
                    <div className="mt-2 space-y-2">
                      {cls.students.map((stu, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm"
                        >
                          <span>{stu.name}</span>
                          <span
                            className={`text-sm font-semibold ${
                              stu.present ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {stu.present ? "Present" : "Absent"}
                          </span>
                          <span className="text-xs text-gray-500">{stu.performance}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
