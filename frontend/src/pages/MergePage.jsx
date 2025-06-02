import React, { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { apiServices } from "../services/apiServices";
import CardUpload from "../components/CardUpload";

export default function MergePage() {
  const [pdfFiles, setPdfFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPdfFiles((prev) => [...prev, ...files]);
  };

  const handleOrderChange = (index, direction) => {
    const newFiles = [...pdfFiles];
    if (direction === "up" && index > 0) {
      [newFiles[index], newFiles[index - 1]] = [
        newFiles[index - 1],
        newFiles[index],
      ];
    } else if (direction === "down" && index < newFiles.length - 1) {
      [newFiles[index], newFiles[index + 1]] = [
        newFiles[index + 1],
        newFiles[index],
      ];
    }
    setPdfFiles(newFiles);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    pdfFiles.forEach((file) => formData.append("pdf", file));
    formData.append("output", "merged.pdf");
    try {
      await apiServices.mergePdf(formData);
    } catch (error) {
      console.error("Error merging PDFs", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl">
      <h1 className="text-5xl font-bold mb-10">Merge PDFs</h1>
      <div className="flex gap-8 mb-10">
        <CardUpload handleFileChange={handleFileChange} />
        <div className="bg-white p-6 rounded-3xl border-2 border-green-400">
          <table className="w-full text-black bg-white rounded-md mb-4">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">PDF</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pdfFiles.map((file, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{file.name}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleOrderChange(index, "up")}
                      className="mr-2"
                    >
                      ⬆️
                    </button>
                    <button onClick={() => handleOrderChange(index, "down")}>
                      ⬇️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600"
      >
        Merge
      </button>
    </div>
  );
}
