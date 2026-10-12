import type { Metadata } from "next";
import AutomationClientPage from "./AutomationClientPage";

export const metadata: Metadata = {
  title: "AI Agents & Automation Work",
  description: "Explore Aadesh Kumar's personal AI projects for video publishing, filtered job search, research, blog writing and product suggestions.",
  alternates: { canonical: "/automation" },
};

export default function AutomationPage() {
  return <AutomationClientPage />;
}
