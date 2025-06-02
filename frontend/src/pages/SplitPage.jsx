import { useState } from "react";
import CardUpload from "../components/CardUpload";
import { apiServices } from "../services/apiServices";

export default function SplitPage() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pageNumber, setPageNumber] = useState("");

  const handleSubmit = async () => {
    if (!pdfFile || !pageNumber) {
      alert("All fields required");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", pdfFile);
    formData.append("split_in_page", pageNumber);
    formData.append("output", "split1.pdf");
    formData.append("output", "split2.pdf");

    try {
      await apiServices.splitPdf(formData);
    } catch (error) {
      console.error("Error splitting file", error);
    }
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl">
      <h1 className="text-5xl font-bold mb-10">Split PDF</h1>
      <div className="flex gap-8 mb-10">
        <CardUpload handleFileChange={handleFileChange} />
        <div className="bg-white p-6 rounded-3xl border-2 border-green-400">
          <input
            type="number"
            placeholder="Page number"
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
            className="block mb-4 p-2 text-black rounded-md"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 px-4 py-2 rounded-md"
      >
        Split
      </button>
    </div>
  );
}
