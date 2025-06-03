export const helpHttp = () => {
  const customFetch = async (endpoint, options = {}, expectBlob = false) => {
    const defaultHeaders = {
      Accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    // Solo agregar Content-Type si no es FormData (por ejemplo, para subir archivos)
    if (options.body && !(options.body instanceof FormData)) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(options.body);
    }

    setTimeout(() => controller.abort(), 10000);
    try {
      const res = await fetch(endpoint, options);
      if (!res.ok) {
        throw {
          err: true,
          status: res.status || "00",
          statusText: res.statusText || "Ocurrió un error",
        };
      }

      // Si se espera archivo, devolver blob
      return expectBlob ? await res.blob() : await res.json();
    } catch (err) {
      return {
        err: true,
        status: err.status || "00",
        statusText: err.statusText || err.message || "No se pudo conectar con el servidor",
      };
    }
  };

  // Método especial para blob que se descarga
  const download = async (url, options = {}, filename = "archivo.pdf") => {
    const blob = await customFetch(url, options, true);
    if (blob.err) return blob;

    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    link.click();
    link.remove();
  };

  return {
    get: (url, options = {}) => customFetch(url, options),
    post: (url, options = {}) => customFetch(url, { ...options, method: "POST" }),
    put: (url, options = {}) => customFetch(url, { ...options, method: "PUT" }),
    del: (url, options = {}) => customFetch(url, { ...options, method: "DELETE" }),
    download, 
  };
};
