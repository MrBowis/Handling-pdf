import React, { useState } from 'react';

export default function EnumeratePage() {
    const [pdfFile, setPdfFile] = useState(null);
    const [startPage, setStartPage] = useState('');
    const [startNumber, setStartNumber] = useState('');

    const handleSubmit = async () => {
        if (!pdfFile || !startPage || !startNumber) return alert('All fields required');
        const formData = new FormData();
        formData.append('pdf', pdfFile);
        formData.append('start', startPage);
        formData.append('number', startNumber);
        formData.append('output', 'enumerate.pdf');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/pdf-handler/enumerate/', {
                method: 'POST',
                body: formData,
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'enumerated.pdf';
            link.click();
        } catch (error) {
            console.error('Error processing file', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl">
            <h1 className="text-5xl font-bold mb-10">Enumerate</h1>
            <div className="bg-white p-6 rounded-3xl border-2 border-green-400 mb-6">
                <label className="text-sm font-bold text-green-600 mb-2 block">UPLOAD</label>
                <input type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files[0])} className="rounded-md" />
            </div>
            <div className="flex gap-4 mb-6">
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
            <button onClick={handleSubmit} className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600">Enumerate</button>
        </div>
    );
}
