// SecurityPage.jsx
import { useState } from "react";

export default function SecurityPage() {
    const [pdf, setPdf] = useState(null);
    const [password, setPassword] = useState("");
    const [lock, setLock] = useState(true);

    const handleSubmit = async () => {
        const formData = new FormData();
        const lockAction = lock ? "secure/block/" : "secure/unblock/";
        const name = lock ? "locked.pdf" : "unlocked.pdf";
        formData.append("pdf", pdf);
        formData.append("password", password);

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/pdf-handler/${lockAction}`, {
                method: 'POST',
                body: formData,
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = name;
            link.click();
        } catch (error) {
            console.error('Error uploading files', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl">
            <h1 className="text-5xl font-bold mb-10">Security</h1>
            <div className="flex gap-8 mb-10">
                <div className="bg-white p-6 rounded-3xl border-2 border-green-400">
                    <label className="text-sm font-bold text-green-600 mb-2 block">UPLOAD</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => setPdf(e.target.files[0])}
                        className="text-sm"
                    />
                </div>

                <div className="bg-white p-6 rounded-3xl border-2 border-green-400">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-48 mb-4 px-4 py-2 rounded-full border border-gray-300 text-center"
                    />
                    <div className="flex items-center justify-center gap-4">
                        <label className="font-medium">{lock ? "Encrypt" : "Decrypt"}</label>
                        <input
                            type="checkbox"
                            checked={lock}
                            onChange={() => setLock((prev) => !prev)}
                            className="scale-150 accent-green-500"
                        />
                    </div>
                </div>
            </div>

            <button
                className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600"
                onClick={handleSubmit}
            >
                {lock ? "Encrypt PDF" : "Decrypt PDF"}
            </button>
        </div>
    );
}
