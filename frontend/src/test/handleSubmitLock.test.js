import { handleSubmitLock } from "../utils/handleSubmitLock";

describe("handleSubmitLock", () => {
  const mockApi = {
    lockPdf: jest.fn(() => Promise.resolve("ok")),
  };

  it("muestra error si faltan campos", async () => {
    const result = await handleSubmitLock({
      pdf: null,
      password: null,
      lock: true,
      api: mockApi,
    });
    expect(result).toBe("All fields required");
    expect(mockApi.lockPdf).not.toHaveBeenCalled();
  });

  it("llama a lockPdf correctamente", async () => {
    const fakeFile = new File(["fake"], "test.pdf", {
      type: "application/pdf",
    });
    const result = await handleSubmitLock({
      pdf: fakeFile,
      password: "1234",
      lock: false,
      api: mockApi,
    });

    expect(mockApi.lockPdf).toHaveBeenCalledTimes(1);
    expect(result).toBe("Success");
  });

  it("maneja errores correctamente", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {}); 

    const mockErrorApi = {
      lockPdf: jest.fn(() => Promise.reject("error")),
    };

    const fakeFile = new File(["fake"], "test.pdf", {
      type: "application/pdf",
    });

    const result = await handleSubmitLock({
      pdf: fakeFile,
      password: "1234",
      lock: true,
      api: mockErrorApi,
    });

    expect(result).toBe("Error");

    console.error.mockRestore(); 
  });
});
