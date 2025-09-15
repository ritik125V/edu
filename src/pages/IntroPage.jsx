import { Link } from "react-router";

function IntroPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
        🎓 Welcome to EduSmart
      </h1>
      <p className="text-lg md:text-xl text-white/90 mb-10 text-center max-w-xl">
        A smart platform for schools & colleges to manage attendance, monitor student progress, and streamline academics.
      </p>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/stu-dashboard"
          className="px-6 py-3 bg-white text-indigo-700 rounded-xl shadow-lg hover:bg-gray-100 font-semibold text-center transition"
        >
          Student Dashboard
        </Link>

        <Link
          to="/teacher-dashboard"
          className="px-6 py-3 bg-white text-indigo-700 rounded-xl shadow-lg hover:bg-gray-100 font-semibold text-center transition"
        >
          Teacher Dashboard
        </Link>

        <Link
          to="/timetable"
          className="px-6 py-3 bg-white text-indigo-700 rounded-xl shadow-lg hover:bg-gray-100 font-semibold text-center transition"
        >
          Timetable
        </Link>

        <Link
          to="/login"
          className="px-6 py-3 bg-white text-indigo-700 rounded-xl shadow-lg hover:bg-gray-100 font-semibold text-center transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default IntroPage;
