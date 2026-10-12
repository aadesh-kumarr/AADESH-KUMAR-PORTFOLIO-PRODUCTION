import { Download, ExternalLink } from "lucide-react";

const RESUME_PATH = "/Aadesh_Kumar_Full_Stack_Developer.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-5 pb-20 pt-28 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">For hiring teams</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Résumé</h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          My full-stack résumé covers product engineering, backend development, technical SEO and AI automation work.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-bold text-neutral-200">
            Open PDF <ExternalLink className="h-4 w-4" />
          </a>
          <a href={RESUME_PATH} download className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black">
            <Download className="h-4 w-4" /> Download PDF
          </a>
        </div>
        <iframe
          src={RESUME_PATH}
          title="Aadesh Kumar full-stack developer résumé preview"
          className="mt-8 h-[75vh] min-h-[600px] w-full rounded-2xl border border-neutral-800 bg-white"
        />
      </div>
    </main>
  );
}
