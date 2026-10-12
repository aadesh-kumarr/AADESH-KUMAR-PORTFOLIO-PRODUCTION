import { Download, ExternalLink } from "lucide-react";

const RESUME_PATH = "/Aadesh_Kumar_Full_Stack_Developer.pdf";

export default function ResumePage() {
  return (
    <main className="page-shell">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-[#29333e] pb-10">
          <div className="max-w-2xl">
            <p className="eyebrow">For hiring teams</p>
            <h1 className="page-title mt-4 text-white">Résumé.</h1>
            <p className="lead mt-5">My full-stack résumé also covers backend engineering, technical SEO and AI automation work.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="button-secondary">
              Open PDF <ExternalLink className="h-4 w-4" />
            </a>
            <a href={RESUME_PATH} download className="button-primary">
              Download PDF <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="panel mt-10 overflow-hidden p-2 sm:p-4">
          <iframe src={RESUME_PATH} title="Aadesh Kumar full-stack developer résumé preview" className="h-[75vh] min-h-[620px] w-full rounded-lg bg-white" />
        </div>
      </div>
    </main>
  );
}
