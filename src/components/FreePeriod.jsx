import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Loader2, BookOpen, Sparkles } from "lucide-react";

// Initialize AI client
const ai = new GoogleGenerativeAI("AIzaSyCIYFt_S2WTFGZ9ppml9y4KJH3ZEeoMdTM");

export default function FreePeriod() {
  const [subject, setSubject] = useState("Maths");
  const [classLevel, setClassLevel] = useState("6");
  const [loading, setLoading] = useState(false);
  const [assignment, setAssignment] = useState("");

  const generateAssignment = async () => {
    setLoading(true);
    setAssignment("");
    setAssignment("https://www.instagram.com/reel/C6LjSpxBBC0/")

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">
            📘 Free Period Assignment Generator
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          {/* Subject Selection */}
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2">
              Choose Type:
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Maths">Hardcore</option>
              <option value="Science">Mazedaar</option>
              <option value="English">Soft</option>
              <option value="History">Lightning speed</option>
            </select>
          </div>

          {/* Class Level */}
          <div className="mb-6">
            <label className="block font-semibold text-gray-700 mb-2">
              choose inches:
            </label>
            <input
              type="number"
              value={classLevel}
              onChange={(e) => setClassLevel(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            onClick={generateAssignment}
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg flex justify-center items-center gap-2 transition"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" /> Generate Assignment
              </>
            )}
          </button>
        </div>

        {/* Output */}
        {assignment && (
          <div>
            <a href={assignment}  target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition ">
              Download Assignment
            </a>
          </div>
        )}
      </div>
    </div>
  );
}