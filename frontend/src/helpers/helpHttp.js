export const helpHttp = () => {
  const customFetch = (endpoint, options = {}) => {
    const defaultHeaders = {
      Accept: "application/json", 
    }

    const controller = new AbortController()
    options.signal = controller.signal
    options.method = options.method || "GET"
    options.headers = options.headers ? { ...defaultHeaders, ...options.headers } : defaultHeaders

    if (options.body) {
      options.headers["Content-Type"] = "application/json"
      options.body = JSON.stringify(options.body)
    }

    // Cancelar la petición si tarda más de 10s
    setTimeout(() => controller.abort(), 10000)

    // Petición con manejo de errores controlado
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            }),
      )
      .catch((err) => ({
        err: true,
        status: err.status || "00",
        statusText: err.statusText || err.message || "No se pudo conectar con el servidor",
      }))
  }

  return {
    get: (url, options = {}) => customFetch(url, options),
    post: (url, options = {}) => customFetch(url, { ...options, method: "POST" }),
    put: (url, options = {}) => customFetch(url, { ...options, method: "PUT" }),
    del: (url, options = {}) => customFetch(url, { ...options, method: "DELETE" }),
  }
}
