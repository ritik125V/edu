import { useState } from "react";
import { CheckCircle, PlayCircle, X, Menu } from "lucide-react";

import { useNavigate } from "react-router";

function TeacherDashboard() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAttendancePopup, setShowAttendancePopup] = useState(false);


  const [classes, setClasses] = useState([
    { id: 1, subject: "Mathematics", time: "9:00 AM - 9:45 AM", taken: true, className: "Class 10(A)", unit: "Unit 2", topic: "Algebra" },
    { id: 2, subject: "Physics", time: "10:00 AM - 10:45 AM", taken: false, className: "Class 9(B)", unit: "Unit 3", topic: "Laws of Motion" },
    { id: 3, subject: "Chemistry", time: "11:00 AM - 11:45 AM", taken: false, className: "Class 11(C)", unit: "Unit 1", topic: "Organic Chemistry" },
    { id: 4, subject: "Computer Science", time: "1:00 PM - 1:45 PM", taken: false, className: "Class 12(A)", unit: "Unit 5", topic: "Data Structures" },
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Sharma", present: true },
    { id: 2, name: "Ishita Verma", present: true },
    { id: 3, name: "Rohan Gupta", present: false },
    { id: 4, name: "Kavya Nair", present: true },
    { id: 5, name: "Devansh Singh", present: true },
    { id: 6, name: "Meera Patel", present: true },
    { id: 7, name: "Yash Raj", present: false },
    { id: 8, name: "Ananya Mishra", present: true },
    { id: 9, name: "Krishna Das", present: true },
    { id: 10, name: "Sanya Kapoor", present: true },
    { id: 11, name: "Aditya Joshi", present: true },
    { id: 12, name: "Ritika Mehta", present: false },
  ]);

  const markClassTaken = (id) => {
    setClasses((prev) =>
      prev.map((cls) => (cls.id === id ? { ...cls, taken: true } : cls))
    );
  };

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((stu) =>
        stu.id === id ? { ...stu, present: !stu.present } : stu
      )
    );
  };



  const teacherDetails = {
    name: "Prof. Anil Kumar",
    id: "TCH202501",
    department: "Science",
    email: "anil.kumar@school.edu",
    phone: "+91 9876543210",
    subjects: ["Maths", "Physics"],
    totalLectures: 220,
    lecturesThisMonth: 18,
  };

  const activeClass = classes.find((cls) => cls.taken);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-6 flex-col shadow-xl">
          <h2 className="text-2xl font-extrabold tracking-wide mb-10">EduSync</h2>
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <button className="text-left hover:text-yellow-300 transition" onClick={() => navigate("/")}>Home</button>
            <button className="text-left hover:text-yellow-300 transition" onClick={() => setShowAttendancePopup(true)}>Attendance</button>
            <button className="text-left hover:text-yellow-300 transition" onClick={() => navigate("/free-period")}>Test</button>
            <button className="text-left hover:text-yellow-300 transition">Quiz</button>
            <button className="text-left hover:text-yellow-300 transition">Settings</button>
          </nav>
        </div>

        {/* Main Section */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <div className="flex justify-between items-center p-4 border-b text-black shadow-sm">
            <h1 className="text-lg sm:text-xl font-bold">Welcome, {teacherDetails.name}</h1>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600 text-white flex flex-col gap-4 p-4 shadow-lg">
              <button className="text-left hover:text-yellow-300 transition" onClick={() => navigate("/")}>Home</button>
              <button className="text-left hover:text-yellow-300 transition" onClick={() => setShowAttendancePopup(true)}>Attendance</button>
              <button className="text-left hover:text-yellow-300 transition" onClick={() => navigate("/free-period")}>Test</button>
              <button className="text-left hover:text-yellow-300 transition">Quiz</button>
              <button className="text-left hover:text-yellow-300 transition">Settings</button>
            </div>
          )}

          {/* Classes & Teacher Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <div className="lg:col-span-1 bg-white/80 backdrop-blur-lg border rounded-2xl p-5 shadow-lg">
              <h2 className="font-bold text-lg mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Today’s Classes
              </h2>
              <div className="space-y-4">
                {classes.map((cls) => (
                  <div key={cls.id} className="flex flex-col gap-1 bg-gray-50 rounded-xl p-3 shadow-sm hover:bg-gray-100 transition">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{cls.subject} - {cls.className}</p>
                        <p className="text-xs text-gray-500">{cls.time}</p>
                        <p className="text-xs text-gray-500">{cls.unit}: {cls.topic}</p>
                      </div>
                      {cls.taken ? (
                        <span className="flex items-center gap-1 text-green-600 font-semibold">
                          <CheckCircle size={18} /> Taken
                        </span>
                      ) : (
                        <button onClick={() => markClassTaken(cls.id)} className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg text-sm transition">
                          <PlayCircle size={18} /> Start
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-white/80 backdrop-blur-lg border rounded-2xl p-5 shadow-lg">
              <h2 className="font-bold text-lg mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Teacher Details
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <li><span className="font-semibold">Name:</span> {teacherDetails.name}</li>
                <li><span className="font-semibold">ID:</span> {teacherDetails.id}</li>
                <li><span className="font-semibold">Department:</span> {teacherDetails.department}</li>
                <li><span className="font-semibold">Email:</span> {teacherDetails.email}</li>
                <li><span className="font-semibold">Phone:</span> {teacherDetails.phone}</li>
                <li><span className="font-semibold">Subjects:</span> {teacherDetails.subjects.join(", ")}</li>
                <li><span className="font-semibold">Total Lectures:</span> {teacherDetails.totalLectures}</li>
                <li><span className="font-semibold">Lectures This Month:</span> {teacherDetails.lecturesThisMonth}</li>
              </ul>
            </div>
          </div>

          {/* Active Class */}
          {activeClass && (
            <div className="p-6">
              <div className="bg-white border rounded-2xl shadow-lg p-6">
                <h2 className="font-bold text-lg text-indigo-700 mb-3">{activeClass.subject} - {activeClass.className}</h2>
                <p className="text-sm text-gray-600 mb-4"><span className="font-semibold">{activeClass.unit}:</span> {activeClass.topic}</p>
                <h3 className="font-semibold mb-2">Student List</h3>
                <div className="space-y-2">
                  {students.map((stu) => (
                    <div key={stu.id} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm">
                      <span>{stu.name}</span>
                      <button onClick={() => toggleAttendance(stu.id)} className={`px-3 py-1 rounded-lg text-sm font-medium ${stu.present ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-red-100 text-red-700 hover:bg-red-200"}`}>
                        {stu.present ? "Present" : "Absent"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}


        </div>
      </div>


    </div>
  );
}

export default TeacherDashboard;
