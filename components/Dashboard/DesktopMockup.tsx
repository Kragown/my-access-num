"use client"
import { Home, Calendar, BarChart3, Settings, Search, Plus, X } from "lucide-react";

const events = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NTc0NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concert",
    date: "15 Décembre 2025"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMG11c2ljfGVufDF8fHx8MTc2NDU4NDU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concert",
    date: "22 Décembre 2025"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NjQ1ODQ1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Concert",
    date: "30 Décembre 2025"
  }
];

export function DesktopMockup() {
  return (
    <div className="relative w-[1440px] h-[900px] bg-[#FAFAFA] overflow-hidden">
      <header className="absolute top-0 left-0 right-0 h-[70px] bg-white shadow-sm flex items-center px-6 gap-6">
        <div className="w-10 h-10 rounded-lg bg-[#D5D5D5]" aria-hidden="true"></div>
        
        <div className="flex-1 max-w-md relative">
          <label htmlFor="search-desktop" className="sr-only">Rechercher</label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
          <input 
            id="search-desktop"
            type="search" 
            placeholder="Rechercher…"
            className="w-full h-10 pl-10 pr-4 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            aria-label="Rechercher des événements"
          />
        </div>
      </header>

      
      <nav aria-label="Navigation principale" className="absolute top-[70px] left-0 bottom-0 w-[70px] bg-[#F5F5F5] border-r border-slate-200">
        <div className="flex flex-col gap-2 p-3 pt-6">
          <button
            type="button"
            aria-label="Accueil"
            aria-current="page"
            className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Calendrier"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-600 hover:bg-white cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Statistiques"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-600 hover:bg-white cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <BarChart3 className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Paramètres"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-600 hover:bg-white cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <Settings className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <main className="absolute top-[70px] left-[70px] right-0 bottom-0 p-8 overflow-auto">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Mes évènements</h1>

        <div className="grid grid-cols-3 gap-6" role="list">
          {events.map((event) => (
            <article key={event.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden" role="listitem">
              <img 
                src={event.image} 
                alt={`Image pour ${event.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="mb-2 text-lg font-semibold text-slate-800">{event.title}</h2>
                <p className="text-slate-600 mb-4">{event.date}</p>
                
                <button className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Voir
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

     
      <button
        type="button"
        aria-label="Ajouter un événement"
        className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        <Plus className="w-6 h-6" aria-hidden="true" />
      </button>

     
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="bg-white rounded-2xl shadow-2xl w-[480px] p-8 relative">
          <h2 id="modal-title" className="mb-6 text-xl font-bold text-slate-800">Ajouter un évènement</h2>
          
          <button
            type="button"
            aria-label="Fermer la modale"
            className="absolute top-6 right-6 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>

          <form className="space-y-4 mb-6" aria-label="Formulaire d'ajout d'événement">
            <div>
              <label htmlFor="event-name" className="sr-only">Nom de l'évènement</label>
              <input 
                id="event-name"
                type="text"
                placeholder="Nom de l'évènement"
                required
                className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="event-date" className="sr-only">Date de l'évènement</label>
              <input 
                id="event-date"
                type="date"
                placeholder="JJ/MM/AAAA"
                required
                className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-required="true"
              />
            </div>
          </form>

          <button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-md transition-shadow flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Créer
          </button>
        </div>
      </div>
    </div>
  );
}