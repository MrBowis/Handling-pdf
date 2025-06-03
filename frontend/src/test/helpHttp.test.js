import { apiServices } from '../services/apiServices';

// Mock del método download de helpHttp
jest.mock('../helpers/helpHttp', () => {
  return {
    helpHttp: () => ({
      download: jest.fn(() => Promise.resolve('archivo simulado')), 
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      del: jest.fn(),
    }),
  };
});

describe('apiServices', () => {
  const formData = new FormData();

  test('mergePdf llama a download con los parámetros correctos', async () => {
    const result = await apiServices.mergePdf(formData);

    expect(result).toBe('archivo simulado'); 
  });

  test('enumeratePdf llama a download con los parámetros correctos', async () => {
    const result = await apiServices.enumeratePdf(formData);

    expect(result).toBe('archivo simulado');
  });

  test('splitPdf llama a download con los parámetros correctos', async () => {
    const result = await apiServices.splitPdf(formData);

    expect(result).toBe('archivo simulado');
  });

  test('lockPdf llama a download con archivo locked.pdf', async () => {
    const result = await apiServices.lockPdf(formData, true);

    expect(result).toBe('archivo simulado');
  });

  test('lockPdf llama a download con archivo unlocked.pdf', async () => {
    const result = await apiServices.lockPdf(formData, false);

    expect(result).toBe('archivo simulado');
  });
});
