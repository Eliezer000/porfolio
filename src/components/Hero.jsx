import React, { useState, useEffect } from 'react';
import Typical from 'react-typical';
import { Code, ShoppingCart, PenTool, MessageSquare, Mail, Instagram, Search, ArrowRight } from 'lucide-react';

const ImprovedPortfolio = () => {
  const [language, setLanguage] = useState('es');
  const [isAnimating, setIsAnimating] = useState(true);

  const translations = {
    es: {
      developer: "Desarrollador Web",
      schedule: "Agendar ahora",
      services: "Servicios",
      projects: "Proyectos Destacados",
      contact: "Contacto",
      viewProject: "Ver proyecto",
      offers: [
        {
          title: "Soluciones Web",
          description: "Desarrollo sitios y aplicaciones web rápidos, atractivos y optimizados que impulsan tu negocio en línea.",
        },
        {
          title: "E-commerce",
          description: "Creo tiendas online que aumentan tus ventas y mejoran la experiencia de compra de tus clientes.",
        },
        {
          title: "Diseño UI/UX",
          description: "Diseño interfaces intuitivas y atractivas que cautivan a tus usuarios y mejoran la retención.",
        },
        {
          title: "Optimización SEO",
          description: "Mejoro la visibilidad de tu sitio en buscadores para atraer más tráfico orgánico cualificado.",
        }
      ],
    },
    en: {
      developer: "Web Developer",
      schedule: "Schedule now",
      services: "Services",
      projects: "Featured Projects",
      contact: "Contact",
      viewProject: "View project",
      offers: [
        {
          title: "Web Solutions",
          description: "I develop fast, attractive, and optimized websites and web applications that boost your online business.",
        },
        {
          title: "E-commerce",
          description: "I create online stores that increase your sales and improve your customers' shopping experience.",
        },
        {
          title: "UI/UX Design",
          description: "I design intuitive and attractive interfaces that captivate your users and improve retention.",
        },
        {
          title: "SEO Optimization",
          description: "I improve your site's visibility in search engines to attract more qualified organic traffic.",
        }
      ],
    }
  };

  const t = translations[language];

  const offers = t.offers.map((offer, index) => ({
    ...offer,
    icon: [<Code />, <ShoppingCart />, <PenTool />, <Search />][index]
  }));

  const projects = [
    { name: 'TuaTienda Web', url: 'https://tua.ar/' },
    { name: 'TuaTienda App V1', url: 'https://apptuav1.netlify.app/home' },
    { name: 'Voglio Ecommerce', url: 'https://vogliofirmat.com' },
    { name: 'Catalog example', url: 'https://practica-autos.netlify.app/' },
    { name: 'Ecommerce example', url: 'https://js-practica-auris.netlify.app/' },
    { name: 'Blog example', url: 'https://practica-thewkndtour.netlify.app/' }
  ];

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: <MessageSquare className="w-8 h-8" />,
      url: "https://wa.link/l295pv",
    },
    {
      name: "Email",
      icon: <Mail className="w-8 h-8" />,
      url: "mailto:elidanielp9@gmail.com",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      url: "https://www.instagram.com/eliezerrpz",
    }
  ];

  const toggleLanguage = () => {
    if (!isAnimating) {
      setLanguage(prev => prev === 'es' ? 'en' : 'es');
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 3000); // Ajusta este valor según la duración de tu animación

      return () => clearTimeout(timer);
    }
  }, [isAnimating, language]);

  const renderName = () => {
    if (isAnimating) {
      return (
        <Typical
          steps={['E', 100, 'El', 100, 'Eli', 100, 'Elie', 100, 'Eliez', 100, 'Elieze', 100, 'Eliezer', 100, 'Eliezer ', 100, 'Eliezer P', 100, 'Eliezer Pe', 100, 'Eliezer Per', 100, 'Eliezer Pere', 100, 'Eliezer Perez', 100]}
          loop={1}
          wrapper="span"
          onComplete={() => setIsAnimating(false)}
        />
      );
    }
    return 'Eliezer Perez';
  };

  return (
    <div name='home' className='w-full min-h-screen bg-[#fefefe] text-[#0f172a]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-12'>
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleLanguage}
            disabled={isAnimating}
            className={`flex items-center bg-[#f0f4f8] px-2 py-1 sm:px-3 sm:py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-300 ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <img
              src={language === 'es' ? '/argentina-flag.png' : '/united-states-flag.png'}
              alt={language === 'es' ? 'Bandera Argentina' : 'USA Flag'}
              className="w-6 h-4 sm:w-8 sm:h-6 mr-1 sm:mr-2 object-cover"
            />
            <span className="text-xs sm:text-sm font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
        
        <h1 className='text-5xl sm:text-8xl font-bold text-[#192544] mb-4'>
          {renderName()}
        </h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#0f172a] mb-6'>{t.developer}</h2>
        <a 
          href="https://wa.link/l295pv" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center text-2xl sm:text-3xl font-normal text-[#0f172a hover:text-[#0f172a] transition-colors duration-300 mb-12 group"
        >
          <span className="relative">
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0f172a] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            <span className="italic">{t.schedule}</span>
          </span>
          <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
        </a>
        
        <section className="mb-16">
          <h3 className='text-2xl sm:text-3xl font-bold text-[#192544] mb-6'>{t.services}</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {offers.map((offer, index) => (
              <div key={index} className='bg-[#f0f4f8] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300'>
                <div className="flex items-center mb-4">
                  {React.cloneElement(offer.icon, { className: "w-12 h-12 text-[#192544]" })}
                  <h4 className='text-xl font-semibold ml-4 text-[#192544]'>{offer.title}</h4>
                </div>
                <p className='text-[#0f172a]'>{offer.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h3 className='text-2xl sm:text-3xl font-bold text-[#192544] mb-6'>{t.projects}</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <div key={index} className='bg-[#f0f4f8] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300'>
                <h4 className='text-xl font-semibold mb-4 text-[#192544]'>{project.name}</h4>
                <a href={project.url} target='_blank' rel="noreferrer" className='text-[#3b82f6] hover:underline'>
                  {t.viewProject}
                </a>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h3 className='text-2xl sm:text-3xl font-bold text-[#192544] mb-6'>{t.contact}</h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.url}
                target='_blank'
                rel="noreferrer"
                className='flex items-center justify-center bg-[#f0f4f8] text-[#192544] px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#e1e7ef]'
              >
                {React.cloneElement(method.icon, { className: "w-8 h-8" })}
                <span className="ml-2 font-semibold">{method.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImprovedPortfolio;