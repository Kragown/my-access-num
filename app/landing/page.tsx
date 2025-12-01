import { DesktopLanding } from "@/components/Landing/DesktopLanding";
import { MobileLanding } from "@/components/Landing/MobileLanding";
import Link from "next/link";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <nav aria-label="Navigation de retour">
        <Link
          href="/"
          className="inline-block px-5 py-2 bg-white border border-slate-300 
                     rounded-full shadow-sm text-slate-700 
                     hover:shadow-md hover:-translate-y-[2px] transition-all
                     focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          ← Retour à l'accueil
        </Link>
      </nav>

      <main className="max-w-[1900px] mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-slate-800 mb-2">Landing Page – Accessible</h1>
        </header>
        
        <div className="flex gap-8 items-start justify-center flex-wrap">
          <section aria-label="Version desktop" className="flex flex-col items-center">
            <h2 className="mb-3 text-slate-600 text-lg">Desktop (1440×900)</h2>
            <div className="shadow-2xl rounded-lg overflow-hidden bg-white">
              <DesktopLanding />
            </div>
          </section>

          <section aria-label="Version mobile" className="flex flex-col items-center">
            <h2 className="mb-3 text-slate-600 text-lg">Mobile (375×812)</h2>
            <div className="shadow-2xl rounded-2xl overflow-hidden bg-white">
              <MobileLanding />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}