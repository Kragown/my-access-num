"use client"
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDQ4ODI5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Optimisez votre flux de travail",
    description: "Découvrez comment améliorer votre productivité avec nos outils"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ1NjE4Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Collaboration en temps réel",
    description: "Travaillez ensemble de manière plus efficace"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0OTQ5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Analyses détaillées",
    description: "Suivez vos performances avec des données précises"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503418895522-46f9804cda40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1lZXRpbmclMjByb29tfGVufDF8fHx8MTc2NDU4NTM4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Réunions productives",
    description: "Organisez et planifiez vos réunions facilement"
  }
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(carouselItems.length); // Commencer au milieu pour la boucle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const duplicatedItems = [...carouselItems, ...carouselItems, ...carouselItems];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        if (next >= carouselItems.length * 2) {
          return carouselItems.length;
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current && window.innerWidth < 768) {
      const scrollWidth = scrollContainerRef.current.scrollWidth / carouselItems.length;
      scrollContainerRef.current.scrollTo({
        left: scrollWidth * (currentSlide % carouselItems.length),
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  useEffect(() => {
    if (carouselRef.current && window.innerWidth >= 768) {
      const handleTransitionEnd = () => {
        if (carouselRef.current) {
          if (currentSlide >= carouselItems.length * 2) {
            carouselRef.current.style.transition = 'none';
            carouselRef.current.style.transform = `translateX(-${carouselItems.length * 25}%)`;
            setCurrentSlide(carouselItems.length);
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 500ms ease-in-out';
              }
            }, 50);
          }
          else if (currentSlide < carouselItems.length) {
            carouselRef.current.style.transition = 'none';
            carouselRef.current.style.transform = `translateX(-${(carouselItems.length * 2 - 1) * 25}%)`;
            setCurrentSlide(carouselItems.length * 2 - 1);
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 500ms ease-in-out';
              }
            }, 50);
          }
        }
      };

      carouselRef.current.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        if (carouselRef.current) {
          carouselRef.current.removeEventListener('transitionend', handleTransitionEnd);
        }
      };
    }
  }, [currentSlide]);

  const scrollToSlide = (index: number) => {
    const adjustedIndex = index + carouselItems.length;
    setCurrentSlide(adjustedIndex);
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-auto">
      {/* Header - Responsive */}
      <header className="sticky top-0 z-50 bg-white shadow-sm h-[60px] md:h-[70px] flex items-center justify-between px-4 md:px-12">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D5D5D5]" aria-hidden="true"></div>
          <span className="text-slate-700 font-semibold text-sm md:text-base">Logo</span>
        </div>

        {/* Mobile: Menu button and Dashboard link */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded"
          >
            <Menu className="w-5 h-5 text-slate-600" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMenuOpen && (
          <nav 
            id="mobile-navigation-menu"
            aria-label="Navigation principale mobile" 
            className="absolute top-[60px] left-0 right-0 bg-white shadow-lg border-t border-slate-200 md:hidden z-40"
          >
            <div className="flex flex-col py-2">
              <a 
                href="#accueil" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-slate-700 text-sm hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-inset"
              >
                Accueil
              </a>
              <a 
                href="#fonctionnalites" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-slate-700 text-sm hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-inset"
              >
                Fonctionnalités
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-slate-700 text-sm hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-inset"
              >
                Contact
              </a>
            </div>
          </nav>
        )}

        {/* Desktop Navigation */}
        <nav aria-label="Navigation principale" className="hidden md:flex gap-6 lg:gap-8 items-center">
          <a href="#accueil" className="text-slate-700 text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-2 py-1">Accueil</a>
          <a href="#fonctionnalites" className="text-slate-700 text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-2 py-1">Fonctionnalités</a>
          <a href="#contact" className="text-slate-700 text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-2 py-1">Contact</a>
        </nav>
      </header>

      {/* Hero Section - Responsive */}
      <section id="accueil" className="relative min-h-[400px] md:h-[500px] bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden px-5 md:px-0 py-12 md:py-0">
        <div 
          className="absolute inset-0 opacity-10 md:opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc2NDU2MjAxNHww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 text-center max-w-3xl px-4 md:px-8">
          <h1 className="mb-3 md:mb-4 text-2xl md:text-4xl font-bold text-slate-800">
            Transformez votre façon de travailler
          </h1>
          
          <p className="text-slate-600 mb-6 md:mb-8 text-sm md:text-lg">
            Découvrez une plateforme innovante qui révolutionne la gestion de vos projets et optimise votre productivité
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
        <Link
              href="/dashboard"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm md:text-base hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Commencer
        </Link>
            <a href="#fonctionnalites" className="text-slate-700 hover:text-slate-900 text-xs md:text-sm underline focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-2 py-1">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive */}
      <section id="fonctionnalites" className="py-10 md:py-16 px-5 md:px-12 bg-white">
        <h2 className="text-center mb-6 md:mb-12 text-slate-800 text-2xl md:text-3xl font-bold">Nos fonctionnalités</h2>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            id="carousel-mobile"
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
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
                aria-controls="carousel-mobile"
                className={`w-1.5 h-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                  currentSlide === index ? 'bg-purple-500' : 'bg-slate-300'
                }`}
                onClick={() => scrollToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Desktop: Grid carousel with navigation */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div id="carousel-desktop" className="overflow-hidden" aria-live="polite" aria-atomic="true">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
              role="list"
            >
              {duplicatedItems.map((item, index) => (
                <article key={`${item.id}-${index}`} className="min-w-[25%] px-3" role="listitem">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="mb-2 text-lg font-semibold text-slate-800">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Slide précédent"
            aria-controls="carousel-desktop"
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            onClick={() => setCurrentSlide((prev) => prev - 1)}
          >
            <ChevronLeft className="w-4 h-4 text-slate-600" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Slide suivant"
            aria-controls="carousel-desktop"
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            onClick={() => setCurrentSlide((prev) => prev + 1)}
          >
            <ChevronRight className="w-4 h-4 text-slate-600" aria-hidden="true" />
          </button>

          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Indicateurs de slides">
            {carouselItems.map((_, index) => {
              const displayIndex = currentSlide % carouselItems.length;
              return (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-label={`Aller au slide ${index + 1}`}
                  aria-selected={displayIndex === index}
                  aria-controls="carousel-desktop"
                  className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    displayIndex === index ? 'bg-purple-500' : 'bg-slate-300'
                  }`}
                  onClick={() => scrollToSlide(index)}
                ></button>
              );
            })}
          </div>
        </div>

        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {currentSlide + 1} sur {carouselItems.length}
        </div>
      </section>

      {/* Contact Section - Responsive */}
      <section id="contact" className="py-10 md:py-16 px-5 md:px-12 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center mb-6 md:mb-10 text-slate-800 text-2xl md:text-3xl font-bold">Contactez-nous</h2>

          <form className="bg-white rounded-2xl shadow-lg p-5 md:p-8" aria-label="Formulaire de contact">
            <div className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="nom-landing" className="block text-sm md:text-base font-medium text-slate-700 mb-1.5 md:mb-2">
                  Nom
                </label>
                <input
                  id="nom-landing"
                  name="nom"
                  type="text"
                  required
                  className="w-full h-10 md:h-12 px-3 md:px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email-landing" className="block text-sm md:text-base font-medium text-slate-700 mb-1.5 md:mb-2">
                  Email
                </label>
                <input
                  id="email-landing"
                  name="email"
                  type="email"
                  required
                  className="w-full h-10 md:h-12 px-3 md:px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="message-landing" className="block text-sm md:text-base font-medium text-slate-700 mb-1.5 md:mb-2">
                  Message
                </label>
                <textarea
                  id="message-landing"
                  name="message"
                  rows={3}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 rounded-lg border border-slate-200 resize-none text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-10 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm md:text-base"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="bg-white border-t border-slate-100 py-6 md:py-8 px-5 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 gap-3 md:gap-0">
            <p className="text-slate-700 text-xs md:text-sm text-center md:text-left">
              © 2025 Entreprise. Tous droits réservés.
            </p>
            <nav aria-label="Liens légaux" className="flex gap-2 md:gap-3 justify-center">
              <a href="#confidentialite" className="text-slate-700 text-xs md:text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-1 md:px-2 py-1">Confidentialité</a>
              <span className="text-slate-600 text-xs md:text-sm hidden md:inline" aria-hidden="true">•</span>
              <a href="#conditions" className="text-slate-700 text-xs md:text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-1 md:px-2 py-1">Conditions</a>
              <span className="text-slate-600 text-xs md:text-sm hidden md:inline" aria-hidden="true">•</span>
              <a href="#cookies" className="text-slate-700 text-xs md:text-sm hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 rounded px-1 md:px-2 py-1">Cookies</a>
            </nav>
          </div>

          <nav aria-label="Réseaux sociaux" className="flex justify-center gap-3 md:gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}