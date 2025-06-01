import { useState } from 'react';

export default function SplitPage() {
    const [pdfFile, setPdfFile] = useState(null);
    const [pageNumber, setPageNumber] = useState('');

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('pdf', pdfFile);
        formData.append('split_in_page', pageNumber);
        formData.append('output', 'split1.pdf');
        formData.append('output', 'split2.pdf');

        const response = await fetch('http://127.0.0.1:8000/api/pdf-handler/split/', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'split.zip';
            link.click();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl">
            <h1 className="text-5xl font-bold mb-10">Split PDF</h1>
            <div className="flex gap-8 mb-10">
                <div className="bg-white p-6 rounded-3xl border-2 border-green-400">
                    <label className="text-sm font-bold text-green-600 mb-2 block">UPLOAD</label>
                    <input type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files[0])} className="mb-4" />
                </div>
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
            <button onClick={handleSubmit} className="bg-green-500 px-4 py-2 rounded-md">Split</button>
        </div>
    );
}
