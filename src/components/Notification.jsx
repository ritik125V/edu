import { Bell, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

function NotificationPage() {
  const notifications = [
    {
      id: 1,
      title: " Upcomming 🍆",
      message:
        "Mathur k sath 🍆💦",
      time: "Today, 8:30 AM",
      type: "highlight",
    },
    {
      id: 2,
      title: "📢 Upcoming Event",
      message:
        "Ground mai 💦🍆 .",
      time: "Yesterday, 5:00 PM",
      type: "normal",
    },
    {
      id: 3,
      title: "📝 Test Schedule Updated",
      message:
        "Physics Unit Test for Class 12 has been rescheduled to 18th Sept at 10:00 AM.",
      time: "2 days ago, 2:45 PM",
      type: "highlight",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8 text-gray-900">
      <div className="max-w-3xl mx-auto">
        {/* Top bar with Home button */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold transition"
          >
            <ArrowLeft size={20} />
            Home
          </Link>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Bell className="text-indigo-600" /> Notifications
          </h1>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((note) => (
            <div
              key={note.id}
              className={`p-5 rounded-xl shadow-md border ${
                note.type === "highlight"
                  ? "bg-red-50 border-red-300"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h2
                  className={`font-semibold text-lg ${
                    note.type === "highlight" ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  {note.title}
                </h2>
                <span className="text-xs text-gray-500">{note.time}</span>
              </div>
              <p
                className={`text-sm ${
                  note.type === "highlight"
                    ? "text-red-700 font-medium"
                    : "text-gray-600"
                }`}
              >
                {note.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;
