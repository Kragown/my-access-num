import { DashboardMockup } from '@/components/Dashboard/DashboardMockup'
import React from 'react'
import Link from 'next/link'

function Dashboard() {
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

      <main className="max-w-[1800px] mx-auto">
        <header className="mb-6 md:mb-8 text-center">
          <h1 className="text-slate-800 mb-2 text-xl md:text-2xl">{`Dashboard – Gestion d'événements`}</h1>
          <p className="text-slate-500 text-sm md:text-base">Dashboard accessible et responsive</p>
        </header>
        
        <div className="shadow-2xl rounded-lg md:rounded-2xl overflow-hidden bg-white">
          <DashboardMockup />
        </div>
      </main>
    </div>
  )
}

export default Dashboard