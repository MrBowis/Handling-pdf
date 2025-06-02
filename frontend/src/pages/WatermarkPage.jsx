import { useState } from 'react';

export default function WatermarkPage() {
    const [pdfFile, setPdfFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handleSubmit = async () => {
        if (!pdfFile || !imageFile) return alert('Select both files');
        const formData = new FormData();
        formData.append('pdf', pdfFile);
        formData.append('watermark', imageFile);
        formData.append('output', 'watermarked.pdf');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/pdf-handler/watermark/', {
                method: 'POST',
                body: formData,
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'watermarked.pdf';
            link.click();
        } catch (error) {
            console.error('Error uploading files', error);
        }
    };

    const handlePdfFile = ()=>{
        setPdfFile(e.target.files[0])
    }

    const handleImageFile = ()=>{
        setImageFile(e.target.files[0])
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl">
            <h1 className="text-5xl font-bold mb-10">Watermark</h1>
            <div className="flex gap-8 mb-10">
                <div className="bg-white p-6 rounded-3xl border-2 border-green-400">
                    <label className="text-sm font-bold text-green-600 mb-2 block">UPLOAD</label>
                    <input type="file" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files[0])} className="rounded-md" />
                </div>
                <div className="bg-white p-6 rounded-3xl border-2 border-green-400">
                    <label className="text-sm font-bold text-green-600 mb-2 block">UPLOAD</label>
                    <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="rounded-md" />
                </div>
            </div>
            <button onClick={handleSubmit} className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600">Add Watermark</button>
        </div>
    );
}