import { Inngest } from "inngest";

// Create a client to send and receive events


export const inngest = new Inngest({ id: "AI",name:"AI_Carrer_Coach",
    credentials: {
        gemini: {
          apiKey: process.env.GEMINI_API_KEY,
        },
      },
 });
