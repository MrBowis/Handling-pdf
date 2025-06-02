const CardUpload = ({handleFileChange}) => {
  return (
    <div className="bg-white p-6 rounded-3xl border-2 border-green-400">
      <label className="text-sm font-bold text-green-600 mb-2 block">
        UPLOAD
      </label>
      <input
        type="file"
        accept="application/pdf"
        multiple
        onChange={handleFileChange}
        className="mb-4"
      />
    </div>
  );
};

export default CardUpload;
