import { GoogleGenAI } from "@google/genai";

// Initialize Gemini with process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSocialStrategy = async (niche: string, goal: string, platform: string): Promise<string> => {
  try {
    // UPDATED PROMPT: Requesting Light Theme Styling (bg-white, text-slate-900, etc.)
    const prompt = `
      You are an expert Social Media Manager named MichTech.
      Create a mini 3-post content strategy for a client in the "${niche}" industry.
      Their main goal is: "${goal}".
      The primary platform is: "${platform}".

      Format the output as a clean HTML string (no markdown backticks, just the inner HTML) using Tailwind CSS classes for styling.
      Structure it as 3 distinct "cards".
      For each post include:
      1. Headline
      2. Content Concept
      3. Visual Idea

      Make it punchy, professional, and ready to impress on a light-themed website.
      Use <div class="bg-white p-6 rounded-xl mb-4 border border-slate-200 shadow-sm hover:shadow-md transition-all"> as the container for each post.
      Use <h3 class="text-xl font-bold text-indigo-600 mb-2"> for headlines.
      Use <p class="text-slate-600 mb-1"> for content.
      Do not include <html> or <body> tags, just the div elements.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "No strategy generated. Try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! The creative engines are overloaded. Please try again later.";
  }
};