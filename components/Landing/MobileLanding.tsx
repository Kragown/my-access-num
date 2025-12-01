"use client"
import { Menu, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDQ4ODI5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Optimisez votre flux de travail",
    description: "Découvrez comment améliorer votre productivité"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ1NjE4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Collaboration en temps réel",
    description: "Travaillez ensemble efficacement"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0OTQ5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Analyses détaillées",
    description: "Suivez vos performances"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503418895522-46f9804cda40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1lZXRpbmclMjByb29tfGVufDF8fHx8MTc2NDU4NTM4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Réunions productives",
    description: "Organisez vos réunions facilement"
  }
];

export function MobileLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth / carouselItems.length;
      scrollContainerRef.current.scrollTo({
        left: scrollWidth * currentSlide,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <div className="w-[375px] h-[812px] bg-white overflow-auto">
      <header className="sticky top-0 z-50 bg-white shadow-sm h-[60px] flex items-center justify-between px-4">
        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
        >
          <Menu className="w-5 h-5 text-slate-600" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#D5D5D5]" aria-hidden="true"></div>
          <span className="text-slate-700 font-semibold text-sm">Logo</span>
        </div>

        <div className="w-10" aria-hidden="true"></div>
      </header>

      <section id="accueil" className="relative bg-gradient-to-br from-purple-50 to-pink-50 px-5 py-12">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc2NDU2MjAxNHww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="mb-3 text-2xl font-bold text-slate-800">Transformez votre façon de travailler</h1>
          
          <p className="text-slate-600 mb-6 text-sm">
            Une plateforme innovante qui révolutionne la gestion de vos projets
          </p>

          <div className="flex flex-col gap-3 items-center">
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Commencer
            </button>
            
            <a href="#fonctionnalites" className="text-slate-700 hover:text-slate-900 text-xs underline focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-2 py-1">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section id="fonctionnalites" className="py-10 bg-white">
        <h2 className="text-center mb-6 px-5 text-slate-800 text-2xl font-bold">Nos fonctionnalités</h2>

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 px-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="list"
          aria-label="Carrousel de fonctionnalités"
          aria-live="polite"
        >
          {carouselItems.map((item) => (
            <article key={item.id} className="min-w-[280px] snap-center" role="listitem">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-1.5 text-sm font-semibold text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 text-xs">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-5" role="tablist" aria-label="Indicateurs de slides">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-label={`Aller au slide ${index + 1}`}
              aria-selected={currentSlide === index}
              className={`w-1.5 h-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                currentSlide === index ? 'bg-purple-500' : 'bg-slate-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {currentSlide + 1} sur {carouselItems.length}
        </div>
      </section>

      <section id="contact" className="py-10 px-5 bg-gradient-to-br from-slate-50 to-slate-100">
        <h2 className="text-center mb-6 text-slate-800 text-2xl font-bold">Contactez-nous</h2>

        <form className="bg-white rounded-2xl shadow-lg p-5" aria-label="Formulaire de contact">
          <div className="space-y-3">
            <div>
              <label htmlFor="nom-mobile" className="sr-only">Nom</label>
              <input
                id="nom-mobile"
                name="nom"
                type="text"
                placeholder="Nom"
                required
                className="w-full h-10 px-3 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email-mobile" className="sr-only">Email</label>
              <input
                id="email-mobile"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full h-10 px-3 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="message-mobile" className="sr-only">Message</label>
              <textarea
                id="message-mobile"
                name="message"
                placeholder="Message"
                rows={3}
                required
                className="w-full px-3 py-2 bg-slate-50 rounded-lg border border-slate-200 resize-none text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-required="true"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Envoyer
            </button>
          </div>
        </form>
      </section>

      <footer className="bg-white border-t border-slate-100 py-6 px-5">
        <div className="text-center mb-4">
          <p className="text-slate-600 text-xs mb-3">© 2025 Entreprise. Tous droits réservés.</p>
          
          <nav aria-label="Liens légaux" className="flex gap-2 justify-center">
            <a href="#confidentialite" className="text-slate-600 text-[10px] hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-1">Confidentialité</a>
            <span className="text-slate-600 text-[10px]" aria-hidden="true">•</span>
            <a href="#conditions" className="text-slate-600 text-[10px] hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-1">Conditions</a>
            <span className="text-slate-600 text-[10px]" aria-hidden="true">•</span>
            <a href="#cookies" className="text-slate-600 text-[10px] hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-1">Cookies</a>
          </nav>
        </div>

        <nav aria-label="Réseaux sociaux" className="flex justify-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <Facebook className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <Twitter className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <Instagram className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <Linkedin className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
          </a>
        </nav>
      </footer>
    </div>
  );
}