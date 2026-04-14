
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import AuthorityBar from './components/AuthorityBar';
import BentoDifferentials from './components/BentoDifferentials';
import Destinations from './components/Destinations';
import BeginnerCourse from './components/BeginnerCourse';
import CalendarSection from './components/CalendarSection';
import Testimonials from './components/Testimonials';
import ShopSection from './components/ShopSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CoursePage from './components/CoursePage';
import DestinationsPage from './components/DestinationsPage';
import DestinationDetailPage from './components/DestinationDetailPage';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export type View = 'home' | 'course' | 'destinations' | 'shop' | 'about' | string;

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (view === 'home') {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        // Skip general animation for sections that will have specific child animations if desired,
        // but here we'll just keep it and add more specific ones for the header elements.
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Specific animations for "Por que escolher a Ação e Tração?" section header
      const diffHeader = document.querySelector('#diferenciais .text-center');
      if (diffHeader) {
        const title = diffHeader.querySelector('h2');
        const paragraph = diffHeader.querySelector('p');

        if (title) {
          gsap.fromTo(title,
            { opacity: 0, y: 40, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: title,
                start: 'top 90%',
              }
            }
          );
        }

        if (paragraph) {
          gsap.fromTo(paragraph,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              delay: 0.2,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: paragraph,
                start: 'top 90%',
              }
            }
          );
        }
      }
    }

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [view]);

  const renderContent = () => {
    if (view === 'course') return <CoursePage />;
    if (view === 'shop') return <ProductsPage />;
    if (view === 'about') return <AboutPage />;
    if (view === 'destinations') return <DestinationsPage onSelect={(id) => setView(`dest-${id}`)} />;
    if (view.startsWith('dest-')) {
      const destId = view.replace('dest-', '');
      return <DestinationDetailPage destinationId={destId} />;
    }

    return (
      <>
        <Hero setView={setView} />
        <AuthorityBar />
        
        <section id="diferenciais" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Por que escolher a <span className="text-gradient">Ação e Tração?</span></h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Experiências únicas que unem a adrenalina do off-road com o conforto e segurança que sua família merece.</p>
          </div>
          <BentoDifferentials />
        </section>

        <section id="destinos" className="py-24 bg-darkLighter">
          <Destinations onExplore={() => setView('destinations')} />
        </section>

        <section id="curso" className="py-24">
          <BeginnerCourse onMoreInfo={() => setView('course')} />
        </section>

        <section id="agenda" className="py-24 bg-darkLighter">
          <CalendarSection />
        </section>

        <section id="depoimentos" className="py-24">
          <Testimonials />
        </section>

        <section id="loja" className="py-24 bg-darkLighter">
          <ShopSection onExplore={() => setView('shop')} />
        </section>

        <section id="faq" className="py-24">
          <FAQSection />
        </section>
      </>
    );
  };

  return (
    <div ref={containerRef} className="bg-dark text-white font-sans selection:bg-accent selection:text-dark min-h-screen">
      <Header setView={setView} currentView={view} />
      <main>
        {renderContent()}
      </main>
      <Footer setView={setView} />
    </div>
  );
};

export default App;
