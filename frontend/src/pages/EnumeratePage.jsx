import React, { useState } from "react";
import CardUpload from "../components/CardUpload";
import { apiServices } from "../services/apiServices";

export default function EnumeratePage() {
  const [pdfFile, setPdfFile] = useState(null);
  const [startPage, setStartPage] = useState("");
  const [startNumber, setStartNumber] = useState("");

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!pdfFile || !startPage || !startNumber) {
      alert("All fields required");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", pdfFile);
    formData.append("start", startPage);
    formData.append("number", startNumber);
    formData.append("output", "enumerate.pdf");

    try {
      await apiServices.enumeratePdf(formData);
    } catch (error) {
      console.error("Error processing file", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl">
      <h1 className="text-5xl font-bold mb-10">Enumerate</h1>
      <CardUpload handleFileChange={handleFileChange} />
      <div className="flex gap-4 mb-6 mt-5">
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <label className="block text-center mb-2">Start page</label>
          <input
            type="number"
            value={startPage}
            onChange={(e) => setStartPage(e.target.value)}
            className="w-32 text-center px-2 py-1 rounded-xl border"
          />
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <label className="block text-center mb-2">Start number</label>
          <input
            type="number"
            value={startNumber}
            onChange={(e) => setStartNumber(e.target.value)}
            className="w-32 text-center px-2 py-1 rounded-xl border"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600"
      >
        Enumerate
      </button>
    </div>
  );
}
