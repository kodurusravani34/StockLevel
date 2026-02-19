import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: 'stocklevel',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! } }
})