import type { Metadata } from "next";
import AutomationClientPage from "./AutomationClientPage";

export const metadata: Metadata = {
  title: "AI Agents & Automation Work",
  description: "Selected AI agent and n8n automation work by Aadesh Kumar across ticketing, astrology, commerce and independent publishing projects.",
  alternates: { canonical: "/automation" },
};

export default function AutomationPage() {
  return <AutomationClientPage />;
}
