import { helpHttp } from "../helpers/helpHttp";

const BASE_URL = "http://127.0.0.1:8000";
const api = helpHttp();

export const apiServices = {
  mergePdf: async (formData) => {
    const endpoint = `${BASE_URL}/api/pdf-handler/merge/`;
    return await api.download(endpoint, { method: "POST", body: formData }, "merged.pdf");
  },

  enumeratePdf: async (formData) => {
    const endpoint = `${BASE_URL}/api/pdf-handler/enumerate/`;
    return await api.download(endpoint, { method: "POST", body: formData }, "enumerated.pdf");
  },

  splitPdf: async (formData) => {
    const endpoint = `${BASE_URL}/api/pdf-handler/split/`;
    return await api.download(endpoint, { method: "POST", body: formData }, "split.zip");
  },

  lockPdf: async (formData, lock = true) => {
    const action = lock ? "secure/block/" : "secure/unblock/";
    const filename = lock ? "locked.pdf" : "unlocked.pdf";
    const endpoint = `${BASE_URL}/api/pdf-handler/${action}`;
    return await api.download(endpoint, { method: "POST", body: formData }, filename);
  },
};
