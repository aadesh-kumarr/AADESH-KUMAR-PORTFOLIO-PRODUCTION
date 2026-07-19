"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  ArrowRight, 
  Database, 
  Cpu, 
  Layers, 
  Plus, 
  Minus,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

import { BackgroundBeams } from "@/components/ui/background-beams";

// Calculator data tiers
const TIERS = [
  { volume: "10,000", zapier: 49, vps: 15, specs: "Hetzner CPX11 (2 vCPU, 2GB RAM)" },
  { volume: "50,000", zapier: 199, vps: 15, specs: "Hetzner CPX11 (2 vCPU, 2GB RAM)" },
  { volume: "100,000", zapier: 399, vps: 15, specs: "Hetzner CPX21 (3 vCPU, 4GB RAM)" },
  { volume: "250,000", zapier: 699, vps: 15, specs: "Hetzner CPX21 (3 vCPU, 4GB RAM)" },
  { volume: "500,000", zapier: 1299, vps: 20, specs: "Hetzner CPX21 (3 vCPU, 4GB RAM)" },
  { volume: "1,000,000", zapier: 2499, vps: 25, specs: "Hetzner CPX31 (4 vCPU, 8GB RAM)" },
  { volume: "2,500,000+", zapier: 5499, vps: 35, specs: "Hetzner CPX31 (4 vCPU, 8GB RAM)" },
];

export default function AutomationClientPage() {
  const [sliderIndex, setSliderIndex] = useState(3); // Default at 250k
  const activeTier = TIERS[sliderIndex];
  
  const monthlySavings = activeTier.zapier - activeTier.vps;
  const annualSavings = monthlySavings * 12;

  // Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans antialiased relative overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <BackgroundBeams />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="text-center py-12 md:py-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-400/20 animate-pulse" />
            Zero-Tax Automation Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight sm:leading-none"
          >
            Stop Paying the <span className="text-amber-400 font-black relative inline-block">&ldquo;Zapier Tax.&rdquo;</span> <br className="hidden md:inline" />
            Scale Workflows on Flat-Rate VPS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-neutral-400 text-lg sm:text-xl max-w-3xl font-medium leading-relaxed"
          >
            I design and deploy visual, production-grade workflows that run on your own self-hosted infrastructure. Decouple your business operations from expensive, per-step execution plans.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="mailto:aadeshk306@gmail.com?subject=Cost-Reduction%20Audit%20Request"
              className="px-8 py-4 bg-amber-400 text-black font-extrabold rounded-xl shadow-lg hover:bg-amber-300 hover:shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group text-base uppercase tracking-wider"
            >
              Book a Cost-Reduction Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#calculator"
              className="px-6 py-4 text-neutral-300 hover:text-white font-semibold transition-colors duration-200 text-base"
            >
              Calculate Your Savings ↓
            </a>
          </motion.div>
        </section>

        {/* ================= CALCULATOR SECTION ================= */}
        <section id="calculator" className="py-16 border-t border-neutral-900 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              The &ldquo;Zapier Tax&rdquo; Calculator
            </h2>
            <p className="text-neutral-500 mt-3 max-w-xl mx-auto">
              Visualizing the structural cost curve: self-hosted n8n scales flat, while Zapier scales exponentially.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Interactive Slider & Info */}
            <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-neutral-400 font-bold uppercase text-xs tracking-wider">
                    Monthly Executions
                  </span>
                  <span className="text-amber-400 text-2xl font-black">
                    {activeTier.volume} steps
                  </span>
                </div>

                {/* Range Slider */}
                <div className="relative mb-10 mt-4">
                  <input
                    type="range"
                    min="0"
                    max={TIERS.length - 1}
                    value={sliderIndex}
                    onChange={(e) => setSliderIndex(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-bold px-1 mt-2">
                    <span>10k</span>
                    <span>100k</span>
                    <span>500k</span>
                    <span>2.5M+</span>
                  </div>
                </div>

                {/* Formula Callout */}
                <div className="p-4 bg-black/40 border border-neutral-800 rounded-2xl mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-semibold">Tiered billing cost equation</p>
                      <p className="text-sm text-neutral-200 font-mono mt-0.5">
                        C = N &times; P
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2.5 leading-relaxed">
                    Where <span className="font-mono">$C$</span> is total cost, <span className="font-mono">$N$</span> is steps executed, and <span className="font-mono">$P$</span> scales dynamically. Traditional SaaS platforms charge a premium on execution volume, compounding your overhead.
                  </p>
                </div>
              </div>

              {/* Infrastructure Spec Callout */}
              <div className="border-t border-neutral-800/80 pt-6">
                <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">VPS Infrastructure Specification</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-semibold text-neutral-300">{activeTier.specs}</span>
                  <span className="text-xs font-black text-amber-400/90 uppercase tracking-widest px-2.5 py-0.5 bg-amber-400/10 rounded border border-amber-400/20">
                    2026 Flat Rate
                  </span>
                </div>
              </div>
            </div>

            {/* Cost Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Zapier Card */}
              <div className="bg-neutral-900/30 border border-neutral-800/60 rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <AlertTriangle className="w-24 h-24 text-red-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-400">Zapier / Make Cost</span>
                  <span className="text-xs text-red-400/90 font-bold uppercase px-2 py-0.5 bg-red-500/10 border border-red-500/20 rounded">
                    Tiered Tax
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-neutral-300">$</span>
                  <span className="text-5xl font-black text-white">{activeTier.zapier}</span>
                  <span className="text-neutral-500 text-sm">/mo</span>
                </div>
              </div>

              {/* Self-Hosted Card */}
              <div className="bg-amber-400/5 border border-amber-400/20 rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Cpu className="w-24 h-24 text-amber-400" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-amber-400">Self-Hosted n8n VPS</span>
                  <span className="text-xs text-amber-400 font-bold uppercase px-2 py-0.5 bg-amber-400/10 border border-amber-400/20 rounded">
                    Flat Rate
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-amber-400">$</span>
                  <span className="text-5xl font-black text-amber-400">{activeTier.vps}</span>
                  <span className="text-amber-400/70 text-sm">/mo</span>
                </div>
              </div>

              {/* Net Savings Card */}
              <div className="bg-gradient-to-br from-stone-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Calculated Net Savings</span>
                  <div className="mt-2 text-4xl font-extrabold text-white">
                    ${monthlySavings.toLocaleString()} <span className="text-sm text-neutral-500 font-medium">/ month</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-850 flex items-center justify-between">
                  <span className="text-sm text-neutral-400 font-medium">Annualized Runway Saved</span>
                  <span className="text-xl font-black text-emerald-400">
                    +${annualSavings.toLocaleString()}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Static Table Fallback (Markdown Table Style in HTML) */}
          <div className="mt-16 overflow-x-auto rounded-2xl border border-neutral-900">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-900/50 border-b border-neutral-800 text-xs text-neutral-400 uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Monthly Volume ($N$)</th>
                  <th className="py-4 px-6 font-bold">Zapier/Make Tier ($C$)</th>
                  <th className="py-4 px-6 font-bold">Self-Hosted n8n (Hetzner CPX21)</th>
                  <th className="py-4 px-6 font-bold">Net Monthly Savings</th>
                  <th className="py-4 px-6 font-bold text-right">Projected Annual Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900/80 text-sm">
                {TIERS.filter((_, idx) => idx % 2 === 1 || idx === 0 || idx === 5).map((tier, idx) => {
                  const mSavings = tier.zapier - tier.vps;
                  const aSavings = mSavings * 12;
                  return (
                    <tr key={idx} className="hover:bg-white/5 transition-colors duration-150">
                      <td className="py-4 px-6 font-semibold text-neutral-200">{tier.volume} steps</td>
                      <td className="py-4 px-6 text-neutral-400">${tier.zapier} / mo</td>
                      <td className="py-4 px-6 text-amber-400/90 font-medium">${tier.vps} / mo</td>
                      <td className="py-4 px-6 text-emerald-400 font-semibold">${mSavings} / mo</td>
                      <td className="py-4 px-6 text-right font-bold text-white">${aSavings.toLocaleString()} / yr</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= TECHNICAL CAPABILITIES ================= */}
        <section className="py-16 border-t border-neutral-900">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Core Technical Capabilities
            </h2>
            <p className="text-neutral-500 mt-3 max-w-xl mx-auto">
              I build enterprise-grade automation systems with custom code backends, direct integrations, and state-of-the-art AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400/20 group-hover:scale-105 transition-all duration-300">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  Native Node Integrations
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mt-4">
                  Bypass unstable middle-layers. I link your CRM, relational databases, and billing systems directly utilizing n8n&apos;s robust native node protocols.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-neutral-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    HubSpot & Salesforce bidirectional sync
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Direct Postgres, MySQL, & Redis operations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Identity & secure OAuth2 token refreshes
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400/20 group-hover:scale-105 transition-all duration-300">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  Custom REST APIs & Webhooks
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mt-4">
                  For complex preprocessing or custom business rules, I build custom routing layers using Node.js/Express.js that ingest high-throughput payloads cleanly.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-neutral-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Express.js webhook routing & validation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    MongoDB Atlas centralized execution logs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Rate limiters & task queues for API protection
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400/20 group-hover:scale-105 transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  AI Agent Orchestration
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mt-4">
                  Embed intelligence into your workflows. I design complex agent pipelines using n8n’s advanced LangChain, Pinecone vector store, and LLM nodes.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-neutral-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Autonomous RAG retrieval workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Semantic customer intent routing (LLM-based)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    Pinecone semantic indexing pipelines
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ================= RISK MITIGATION FAQ ================= */}
        <section className="py-16 border-t border-neutral-900">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Risk Mitigation & Architecture FAQ
            </h2>
            <p className="text-neutral-500 mt-3 max-w-xl mx-auto">
              Addressing operational security, compliance, and enterprise reliability on self-hosted instances.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            
            {/* FAQ 1 */}
            <div className="bg-neutral-900/35 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-200">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full py-5 px-6 flex justify-between items-center font-bold text-left hover:bg-neutral-900/60 transition-colors"
              >
                <span className="text-base sm:text-lg text-neutral-200">
                  Data Residency & Compliance (GDPR / HIPAA)
                </span>
                {openFaq === 0 ? <Minus className="w-5 h-5 text-amber-400" /> : <Plus className="w-5 h-5 text-neutral-500" />}
              </button>
              
              <AnimatePresence initial={false}>
                {openFaq === 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-neutral-900/60 text-sm text-neutral-400 leading-relaxed space-y-3">
                      <p>
                        When routing customer names, emails, billing details, or clinical records through standard B2B SaaS builders like Zapier, that data is processed and stored temporarily on third-party servers. This represents a security vulnerability and triggers strict GDPR/HIPAA compliance auditing.
                      </p>
                      <p>
                        By setting up self-hosted n8n instances on your own dedicated Virtual Private Server (such as AWS VPC or a German-zoned Hetzner instance), **your data never touches third-party processors**. 
                      </p>
                      <p className="font-semibold text-amber-400/90">
                        Total data sovereignty is maintained: your customer data stays inside databases you own, behind firewalls you control.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 2 */}
            <div className="bg-neutral-900/35 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-200">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full py-5 px-6 flex justify-between items-center font-bold text-left hover:bg-neutral-900/60 transition-colors"
              >
                <span className="text-base sm:text-lg text-neutral-200">
                  Production-Grade Error Handling & DLQs
                </span>
                {openFaq === 1 ? <Minus className="w-5 h-5 text-amber-400" /> : <Plus className="w-5 h-5 text-neutral-500" />}
              </button>
              
              <AnimatePresence initial={false}>
                {openFaq === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-neutral-900/60 text-sm text-neutral-400 leading-relaxed space-y-4">
                      <p>
                        Relying on custom integration scripts or self-hosting has a reputation for being brittle if not built with proper error-recovery mechanisms. I build a defensive integration architecture that prevents lost messages:
                      </p>

                      {/* Visual Flow diagram */}
                      <div className="bg-black/60 border border-neutral-800 p-4 rounded-xl my-4 text-xs font-mono">
                        <p className="text-amber-400 font-bold mb-3 uppercase tracking-wider text-[10px]">Webhook Triage Flowchart</p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                          
                          <div className="flex flex-col items-center p-2.5 bg-neutral-900 border border-neutral-800 rounded w-full sm:w-1/4">
                            <span className="text-neutral-400 uppercase text-[9px] font-bold">1. Ingest</span>
                            <span className="text-white mt-1">Webhook Call</span>
                          </div>
                          
                          <div className="text-neutral-600 font-sans hidden sm:block">→</div>
                          
                          <div className="flex flex-col items-center p-2.5 bg-neutral-900 border border-neutral-800 rounded w-full sm:w-1/4">
                            <span className="text-neutral-400 uppercase text-[9px] font-bold">2. Log</span>
                            <span className="text-white mt-1">Mongo Atlas Log</span>
                          </div>
                          
                          <div className="text-neutral-600 font-sans hidden sm:block">→</div>
                          
                          <div className="flex flex-col items-center p-2.5 bg-neutral-900 border border-neutral-800 rounded w-full sm:w-1/4">
                            <span className="text-neutral-400 uppercase text-[9px] font-bold">3. Execute</span>
                            <span className="text-amber-400 mt-1">n8n Instance</span>
                          </div>

                        </div>

                        {/* Error Handling Branch */}
                        <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row justify-between items-center gap-4">
                          <div className="flex items-center gap-2 text-emerald-400">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Success: Clean Response</span>
                          </div>
                          <div className="flex items-center gap-2 text-red-400">
                            <AlertTriangle className="w-4 h-4 animate-pulse" />
                            <span>Failure: Route to DLQ & Slack Alert</span>
                          </div>
                        </div>
                      </div>

                      <ul className="list-disc pl-5 space-y-2.5">
                        <li>
                          **Dead-Letter Queues (DLQ):** Every failing webhook run caches the raw input parameters directly in a MongoDB collection before exiting, making data loss impossible.
                        </li>
                        <li>
                          **Active Alert Handlers:** n8n error hooks catch uncaught node failures and dispatch formatted payload reports directly to a dedicated Slack/Discord monitoring channel.
                        </li>
                        <li>
                          **Exponential Backoff Retries:** Intermittent API downtimes are handled by configured exponential backoff loops (e.g. retrying up to 5 times over 30 minutes).
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="mt-20 bg-gradient-to-br from-neutral-900/60 to-stone-900/30 border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_60%)]" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Cut Integration Overhead?
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Let&apos;s evaluate your active workflow volume and estimate your exact cloud hosting infrastructure requirements.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:aadeshk306@gmail.com?subject=Cost-Reduction%20Audit%20Request"
              className="px-8 py-4 bg-amber-400 text-black font-extrabold rounded-xl shadow-lg hover:bg-amber-300 hover:shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 text-base uppercase tracking-wider"
            >
              Request a Cost-Reduction Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
