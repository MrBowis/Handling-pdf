export const handleSubmitLock = async ({ pdf, password, lock, api }) => {
  if (!pdf || !password) {
    return "All fields required";
  }

  const formData = new FormData();
  formData.append("pdf", pdf);
  formData.append("password", password);

  try {
    await api.lockPdf(formData, lock);
    return "Success";
  } catch (error) {
    console.error("Error uploading files", error);
    return "Error";
  }
};
