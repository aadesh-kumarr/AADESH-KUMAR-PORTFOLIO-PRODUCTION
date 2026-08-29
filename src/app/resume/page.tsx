"use client";

import React, { useEffect, useRef, useState } from "react";
import { Download, AlertCircle } from "lucide-react";

const RESUME_PATH = "/Aadesh_Kumar_Resume_2026.pdf";

const ResumePage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

        const pdf = await pdfjsLib.getDocument(RESUME_PATH).promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        // Render at device pixel ratio so the text stays sharp.
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const baseViewport = page.getViewport({ scale: 1 });
        const targetWidth = Math.min(canvas.parentElement?.clientWidth ?? 900, 900);
        const scale = targetWidth / baseViewport.width;
        const viewport = page.getViewport({ scale: scale * dpr });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${viewport.width / dpr}px`;
        canvas.style.height = `${viewport.height / dpr}px`;

        await page.render({ canvasContext: context, viewport }).promise;
        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 px-5 pb-20 pt-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Résumé</h1>
            <p className="mt-1 text-sm text-neutral-500">
              Aadesh Kumar — AI Automation Engineer &amp; Full-Stack Developer
            </p>
          </div>
          <a
            href={RESUME_PATH}
            download
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black transition-transform hover:scale-[1.03]"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
          {status === "loading" && (
            <div className="py-24 text-center text-sm text-neutral-500">Loading résumé…</div>
          )}

          {status === "error" && (
            <div className="flex flex-col items-center gap-3 py-20 text-center">
              <AlertCircle className="h-8 w-8 text-amber-400" />
              <p className="text-sm text-neutral-400">
                The preview could not be rendered in this browser.
              </p>
              <a href={RESUME_PATH} download className="text-sm font-semibold text-amber-400 underline">
                Download the PDF instead
              </a>
            </div>
          )}

          <div className="flex justify-center">
            <canvas ref={canvasRef} className={status === "ready" ? "rounded-lg" : "hidden"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
