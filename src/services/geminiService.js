import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export const getGeminiAI = () => {
  if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY is not defined");
  }
  return new GoogleGenAI({ apiKey });
};

/**
 * Exemplo de uso:
 * const ai = getGeminiAI();
 * const response = await ai.models.generateContent({
 *   model: "gemini-1.5-flash",
 *   contents: [{ parts: [{ text: "Olá" }] }]
 * });
 */
