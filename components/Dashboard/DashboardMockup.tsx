"use client"
import { Home, Calendar, BarChart3, Settings, Search, Plus, X, Menu } from "lucide-react";

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

export function DashboardMockup() {
  return (
    <div className="relative w-full min-h-screen md:h-[900px] bg-[#FAFAFA] overflow-hidden">
      {/* Header - Responsive */}
      <header className="absolute top-0 left-0 right-0 h-[60px] md:h-[70px] bg-white shadow-sm flex items-center px-4 md:px-6 gap-3 md:gap-6">
        {/* Menu button - Mobile only */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded md:hidden"
        >
          <Menu className="w-5 h-5 text-slate-600" aria-hidden="true" />
        </button>

        {/* Logo */}
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D5D5D5]" aria-hidden="true"></div>
        
        {/* Search bar */}
        <div className="flex-1 max-w-md relative">
          <label htmlFor="search-dashboard" className="sr-only">Rechercher</label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
          <input 
            id="search-dashboard"
            type="search" 
            placeholder="Rechercher…"
            className="w-full h-9 md:h-10 pl-9 md:pl-10 pr-3 md:pr-4 bg-slate-50 rounded-lg border border-slate-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            aria-label="Rechercher des événements"
          />
        </div>
      </header>

      {/* Sidebar Navigation - Desktop only */}
      <nav 
        aria-label="Navigation principale" 
        className="hidden md:flex absolute top-[70px] left-0 bottom-0 w-[70px] bg-[#F5F5F5] border-r border-slate-200"
      >
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

      {/* Main Content - Responsive */}
      <main className="absolute top-[60px] md:top-[70px] left-0 md:left-[70px] right-0 bottom-0 overflow-auto px-4 md:p-8 py-5 md:py-8">
        <h1 className="mb-5 md:mb-6 text-xl md:text-2xl font-bold text-slate-800">Mes évènements</h1>

        {/* Events Grid - Responsive */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" 
          role="list"
        >
          {events.map((event) => (
            <article 
              key={event.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden" 
              role="listitem"
            >
              <img 
                src={event.image} 
                alt={`Image pour ${event.title}`}
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="p-4 md:p-5">
                <h2 className="mb-1 md:mb-2 text-base md:text-lg font-semibold text-slate-800">{event.title}</h2>
                <p className="text-slate-600 mb-3 md:mb-4 text-sm md:text-base">{event.date}</p>
                
                <button className="inline-block px-4 md:px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm md:text-base hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Voir
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Floating Action Button - Responsive */}
      <button
        type="button"
        aria-label="Ajouter un événement"
        className="absolute bottom-6 md:bottom-8 right-6 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        <Plus className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
      </button>

      {/* Modal - Responsive */}
      <div 
        className="absolute inset-0 bg-black/20 md:bg-black/20 flex items-end md:items-center justify-center" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title-dashboard"
      >
        {/* Mobile: bottom sheet style, Desktop: centered modal */}
        <div className="bg-white rounded-t-3xl md:rounded-2xl shadow-2xl w-full md:w-[480px] p-6 md:p-8 pb-8 md:pb-8 relative max-h-[90vh] md:max-h-none overflow-y-auto">
          <h2 id="modal-title-dashboard" className="mb-1 md:mb-6 text-lg md:text-xl font-bold text-slate-800">
            Ajouter un évènement
          </h2>
          
          <button
            type="button"
            aria-label="Fermer la modale"
            className="absolute top-5 md:top-6 right-5 md:right-6 w-6 h-6 flex items-center justify-center text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
          >
            <X className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
          </button>

          <form className="space-y-3 md:space-y-4 mt-5 md:mt-0 mb-5 md:mb-6" aria-label="Formulaire d'ajout d'événement">
            <div>
              <label htmlFor="event-name-dashboard" className="sr-only">Nom de l'évènement</label>
              <input 
                id="event-name-dashboard"
                type="text"
                placeholder="Nom de l'évènement"
                required
                className="w-full h-11 md:h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="event-date-dashboard" className="sr-only">Date de l'évènement</label>
              <input 
                id="event-date-dashboard"
                type="date"
                placeholder="JJ/MM/AAAA"
                required
                className="w-full h-11 md:h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-required="true"
              />
            </div>
          </form>

          <button
            type="submit"
            className="w-full h-11 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm md:text-base"
          >
            Créer
          </button>
        </div>
      </div>
    </div>
  );
}

