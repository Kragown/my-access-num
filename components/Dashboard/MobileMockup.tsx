"use client"
import { Menu, Search, Plus, X } from "lucide-react";

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

export function MobileMockup() {
  return (
    <div className="relative w-[375px] h-[812px] bg-[#FAFAFA] overflow-hidden">
      <header className="absolute top-0 left-0 right-0 bg-white shadow-sm">
        <div className="h-[60px] flex items-center px-4 gap-3">
          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
          >
            <Menu className="w-5 h-5 text-slate-600" aria-hidden="true" />
          </button>
          
          <div className="w-8 h-8 rounded-lg bg-[#D5D5D5]" aria-hidden="true"></div>
          
          <div className="flex-1 relative">
            <label htmlFor="search-mobile" className="sr-only">Rechercher</label>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
            <input 
              id="search-mobile"
              type="search" 
              placeholder="Rechercher…"
              className="w-full h-9 pl-9 pr-3 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              aria-label="Rechercher des événements"
            />
          </div>
        </div>
      </header>

      <main className="absolute top-[60px] left-0 right-0 bottom-0 overflow-auto px-4 py-5">
        <h1 className="mb-5 text-xl font-bold text-slate-800">Mes évènements</h1>

        <div className="space-y-4" role="list">
          {events.map((event) => (
            <article key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden" role="listitem">
              <img 
                src={event.image} 
                alt={`Image pour ${event.title}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="mb-1 text-base font-semibold text-slate-800">{event.title}</h2>
                <p className="text-slate-600 mb-3 text-sm">{event.date}</p>
                
                <button className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
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
        className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        <Plus className="w-6 h-6" aria-hidden="true" />
      </button>

      <div className="absolute inset-0 bg-black/30 flex items-end" role="dialog" aria-modal="true" aria-labelledby="modal-title-mobile">
        <div className="bg-white rounded-t-3xl shadow-2xl w-full p-6 pb-8">
          <h2 id="modal-title-mobile" className="mb-1 text-lg font-bold text-slate-800">Ajouter un évènement</h2>
          
          <button
            type="button"
            aria-label="Fermer la modale"
            className="absolute top-5 right-5 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <form className="space-y-3 mt-5 mb-5" aria-label="Formulaire d'ajout d'événement">
            <div>
              <label htmlFor="event-name-mobile" className="sr-only">Nom de l'évènement</label>
              <input 
                id="event-name-mobile"
                type="text"
                placeholder="Nom de l'évènement"
                required
                className="w-full h-11 px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="event-date-mobile" className="sr-only">Date de l'évènement</label>
              <input 
                id="event-date-mobile"
                type="date"
                placeholder="JJ/MM/AAAA"
                required
                className="w-full h-11 px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-required="true"
              />
            </div>
          </form>

          <button
            type="submit"
            className="w-full h-11 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Créer
          </button>
        </div>
      </div>
    </div>
  );
}