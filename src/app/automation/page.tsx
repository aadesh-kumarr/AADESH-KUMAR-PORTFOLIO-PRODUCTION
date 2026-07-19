import type { Metadata } from "next";
import AutomationClientPage from "./AutomationClientPage";

// High-impact SEO metadata targeting CTOs, Founders, and Ops Leads
export const metadata: Metadata = {
  title: "Self-Hosted n8n & VPS Workflow Architecture | Aadesh Kumar",
  description:
    "Stop paying per-step execution fees. Leverage custom B2B visual workflow pipelines built on self-hosted n8n and flat-rate VPS servers (Hetzner/AWS) with fail-safe reliability.",
  keywords: [
    "n8n automation",
    "Zapier alternative",
    "Make alternative",
    "self-hosted n8n",
    "Hetzner VPS automation",
    "B2B workflow builder",
    "Express.js webhooks",
    "AI Agent orchestration",
    "cost reduction audit",
    "DLQ architecture"
  ].join(", "),
  openGraph: {
    title: "Self-Hosted n8n & VPS Workflow Architecture",
    description:
      "Stop paying per-step execution fees. Run millions of task integrations on flat-rate cloud hosting.",
    type: "website",
    url: "https://aadeshkumar-portfolio.vercel.app/automation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Hosted n8n & VPS Workflow Architecture",
    description:
      "Decouple your integration overhead from task volume. Build visual pipelines on flat-rate VPS.",
  },
};

export default function AutomationPage() {
  return <AutomationClientPage />;
}
