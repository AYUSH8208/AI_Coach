import { serve } from "inngest/next";

import { client } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: client,
  functions: [generateIndustryInsights],
});