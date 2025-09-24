import { useState, useRef, useEffect } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { X } from "lucide-react";

export default function AttendancePopup({ students, setStudents, onClose }) {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [scannedStudent, setScannedStudent] = useState(null);
  const scannedRef = useRef(false);

  const handleScan = (result) => {
    if (!result || scannedRef.current) return;

    scannedRef.current = true;
    const scanned = result.trim();

    setStudents((prev) => {
      const updated = prev.map((stu) =>
        stu.id === parseInt(scanned, 10) || stu.enrollment === scanned
          ? { ...stu, present: true }
          : stu
      );

      const foundStudent = updated.find(
        (stu) =>
          stu.id === parseInt(scanned, 10) || stu.enrollment === scanned
      );
      setScannedStudent(foundStudent || null);

      return updated;
    });

    setTimeout(() => { scannedRef.current = false; }, 1000);
  };

  const handleNFC = async () => {
    if (!("NDEFReader" in window)) {
      alert("⚠️ NFC not supported on this device/browser.");
      return;
    }

    try {
      const reader = new NDEFReader();
      await reader.scan();

      reader.onreading = (event) => {
        for (const record of event.message.records) {
          const decoder = new TextDecoder();
          const scanned = decoder.decode(record.data).trim();

          setStudents((prev) => {
            const updated = prev.map((stu) =>
              stu.id === parseInt(scanned, 10) || stu.enrollment === scanned
                ? { ...stu, present: true }
                : stu
            );
            const foundStudent = updated.find(
              (stu) =>
                stu.id === parseInt(scanned, 10) || stu.enrollment === scanned
            );
            setScannedStudent(foundStudent || null);
            return updated;
          });
        }
      };
    } catch (error) {
      console.error("❌ NFC scan failed:", error);
      alert("NFC scan failed. Make sure NFC is enabled.");
    }
  };

  useEffect(() => {
    return () => { scannedRef.current = false; };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-[500px] relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={() => { onClose(); setScannerOpen(false); setScannedStudent(null); }}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-indigo-700">Take Attendance</h2>

        <div className="flex flex-col items-center gap-2">
          {!scannerOpen ? (
            <button
              onClick={() => setScannerOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-1 rounded-lg font-semibold transition"
            >
              Open QR Scanner
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Scanner
                onDecode={handleScan}
                onError={(error) => console.error("Scanner Error:", error)}
                constraints={{ facingMode: "environment" }}
                style={{ width: "250px" }}
              />
              <button
                onClick={() => setScannerOpen(false)}
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg"
              >
                Close Scanner
              </button>
            </div>
          )}

          <p className="font-semibold mt-4">OR</p>

          <button
            onClick={handleNFC}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-1 rounded-lg font-semibold transition"
          >
            Scan NFC Tag
          </button>

          {scannedStudent && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg w-full text-center">
              <h3 className="font-bold text-lg text-green-700 mb-2">Student Found!</h3>
              <p><span className="font-semibold">Name:</span> {scannedStudent.name}</p>
              <p><span className="font-semibold">Enrollment:</span> {scannedStudent.enrollment}</p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span className={scannedStudent.present ? "text-green-600" : "text-red-600"}>
                  {scannedStudent.present ? "Present" : "Absent"}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
