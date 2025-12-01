import { LandingPage } from "@/components/Landing/LandingPage";
import Link from "next/link";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
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
        <header className="mb-6 md:mb-8 text-center">
          <h1 className="text-slate-800 mb-2 text-xl md:text-2xl">Landing Page – Accessible et Responsive</h1>
        </header>
        
        <div className="shadow-2xl rounded-lg md:rounded-2xl overflow-hidden bg-white">
          <LandingPage />
        </div>
      </main>
    </div>
  );
}