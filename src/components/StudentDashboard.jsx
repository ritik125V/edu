import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Menu } from "lucide-react";

function StudentDashboard() {
  const navigate = useNavigate();
  const [darkMode] = useState(false); // keeping but not altering
  const [showAlert, setShowAlert] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const marksData = [
    { subject: "LUND PHILOSOPHY", test: "Unit-1 Edging", marks: 68 },
    { subject: "💦🍆", test: "Unit-1 banggang", marks: 55 },
    { subject: "CLASS STAY WTH TAYLOR SWIFT", test: "TAYLOR ji k sth time spent ", marks: 72 },
    { subject: "MIRZAPUR BACKLOG", test: "Unit-1 youdha", marks: 91 },
  ];

  const studentDetails = {
    name: "CHUPA SHARMAxx",
    enrollmentNo: "STU2025001",
    class: "A Grade",
    section: "",
    parentName: "Rajesh Verma",
    parentContact: "+91 9876543210",
    attended: 120,
    total: 140,
  };

  const timetable = [
    { period: "First Round", subject: "ZAMIN", teacher: "jonny bhai" },
    { period: "Second  Round", subject: "BED", teacher: "MIA Ji" },
    { period: "Third Round", subject: "SOFA", teacher: "SUNNY LI. Ji" },
    { period: "Fourth Round ", subject: "CYCLE", teacher: "LANA (guest)" },
  ];

  const attendancePercentage = (
    (studentDetails.attended / studentDetails.total) * 100
  ).toFixed(1);

  return (
    <div
      className={`min-h-screen flex ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-gradient-to-br from-slate-100 via-gray-50 to-gray-200 text-gray-900"
      }`}
    >
      {/* Sidebar (Desktop) */}
      <div className="hidden md:flex w-64 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-6 flex-col shadow-2xl backdrop-blur-md">
        <h2 className="text-2xl font-extrabold tracking-wide mb-10">EduSync</h2>
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <button
            className="text-left hover:text-yellow-300 transition"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="text-left hover:text-yellow-300 transition"
            onClick={() => navigate("/free-period")}
          >
            LUND Period
          </button>
          <button
            className="text-left hover:text-yellow-300 transition"
            onClick={() => navigate("/marks")}
          >
            TMKC
          </button>
          <button className="text-left hover:text-yellow-300 transition">
            MKC
          </button>
          <button className="text-left hover:text-yellow-300 transition">
            CHILLI CHAAP
          </button>
        </nav>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col relative">
        {/* Navbar */}
        <div className="flex justify-between items-center p-4 border-b 
          text-black shadow-sm"
        >
          <h1 className="text-lg font-bold sm:text-xl  tracking-wide">
            Welcome, <span className="font-bold">{studentDetails.name}</span>
          </h1>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-14 right-4 bg-gradient-to-b from-indigo-700 to-purple-700 text-white rounded-xl shadow-lg w-48 z-50 md:hidden animate-fade-in">
            <nav className="flex flex-col p-3 gap-2 text-sm">
              <button
                className="text-left hover:text-yellow-300 transition"
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <button
                className="text-left hover:text-yellow-300 transition"
                onClick={() => navigate("/free-period")}
              >
                Free Period
              </button>
              <button
                className="text-left hover:text-yellow-300 transition"
                onClick={() => navigate("/marks")}
              >
                Marks
              </button>
              <button className="text-left hover:text-yellow-300 transition">
                Timetable
              </button>
              <button className="text-left hover:text-yellow-300 transition">
                Settings
              </button>
            </nav>
          </div>
        )}

        {/* Floating Alert */}
        {showAlert && (
          <div className="absolute top-6 right-6 bg-yellow-300/90 text-yellow-950 px-5 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-slide-in backdrop-blur-md">
            ⚠️ Timetable contains changes
            <button
              className="hover:text-red-600"
              onClick={() => setShowAlert(false)}
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Marks */}
          <div className="bg-white/70 backdrop-blur-xl border rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="font-bold text-lg mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Marks Card
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {marksData.map((row, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center rounded-xl p-3 shadow-sm bg-white/70 hover:bg-white/90 transition-all duration-300"
                >
                  <div>
                    <h3 className="font-semibold">{row.subject}</h3>
                    <p className="text-xs text-gray-500">{row.test}</p>
                  </div>
                  <p
                    className={`text-lg font-extrabold ${
                      row.marks < 70 ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    {row.marks}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Info */}
          <div className="bg-white/70 backdrop-blur-xl border rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="font-bold text-lg mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Student Details
            </h2>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold">Name:</span> {studentDetails.name}</li>
              <li><span className="font-semibold">Enrollment:</span> {studentDetails.enrollmentNo}</li>
              <li><span className="font-semibold">Class & Section:</span> {studentDetails.class} - {studentDetails.section}</li>
              <li><span className="font-semibold">Parent:</span> {studentDetails.parentName}</li>
              <li><span className="font-semibold">Contact:</span> {studentDetails.parentContact}</li>
              <li><span className="font-semibold">Classes:</span> {studentDetails.attended}/{studentDetails.total}</li>
              <li>
                <span className="font-semibold">Attendance %:</span>{" "}
                <span
                  className={`${
                    attendancePercentage < 70
                      ? "text-red-500 font-bold"
                      : "text-green-600 font-bold"
                  }`}
                >
                  {attendancePercentage}%
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timetable */}
        <div className="p-6 flex-1">
          <div className="bg-white/70 backdrop-blur-xl border rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="font-bold text-lg mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Updated Timetable
            </h2>
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-700">
                  <th className="p-3 border">Period</th>
                  <th className="p-3 border">Subject</th>
                  <th className="p-3 border">Teacher</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((row, idx) => (
                  <tr key={idx} className="text-center hover:bg-gray-50 transition">
                    <td className="p-3 border font-medium">{row.period}</td>
                    <td className="p-3 border">{row.subject}</td>
                    <td
                      className={`p-3 border font-semibold ${
                        row.teacher.includes("Substitute")
                          ? "text-blue-600"
                          : row.teacher.includes("Sports")
                          ? "text-orange-600"
                          : "text-green-600"
                      }`}
                    >
                      {row.teacher}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
