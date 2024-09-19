import React, { useState } from 'react';
import Typical from 'react-typical';
import { Layout, Code, ShoppingCart, PenTool, MessageSquare, Mail, Instagram, Search, ChevronDown, ChevronUp } from 'lucide-react';

const ImprovedPortfolio = () => {
  const [language, setLanguage] = useState('es');
  const [isExpanded, setIsExpanded] = useState(false);

  const translations = {
    es: {
      developer: "Desarrollador Web",
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
      url: "https://www.instagram.com/tu_usuario",
    }
  ];

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setIsExpanded(false);
  };

  const LanguageOption = ({ lang, flag, label }) => (
    <button
      onClick={() => toggleLanguage(lang)}
      className="flex items-center w-full px-3 py-2 hover:bg-[#e1e7ef] transition-colors duration-200"
    >
      <img
        src={flag}
        alt={`${lang.toUpperCase()} flag`}
        className="w-8 h-6 mr-2 object-cover"
      />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );

  return (
    <div name='home' className='w-full min-h-screen bg-[#fefefe] text-[#0f172a]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-12'>
        <div className="flex justify-end mb-4">
          <div className="relative">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center bg-[#f0f4f8] px-3 py-2 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={language === 'es' ? '/argentina-flag.png' : '/united-states-flag.png'}
                alt={language === 'es' ? 'Bandera Argentina' : 'USA Flag'}
                className="w-8 h-6 mr-2 object-cover"
              />
              <span className="text-sm font-medium mr-1">{language.toUpperCase()}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isExpanded && (
              <div className="absolute right-0 mt-1 w-full bg-white rounded-md shadow-lg overflow-hidden z-10">
                <LanguageOption
                  lang={language === 'es' ? 'en' : 'es'}
                  flag={language === 'es' ? '/united-states-flag.png' : '/argentina-flag.png'}
                  label={language === 'es' ? 'EN' : 'ES'}
                />
              </div>
            )}
          </div>
        </div>
        
        <h1 className='text-5xl sm:text-8xl font-bold text-[#192544] mb-4'>
          <Typical
            steps={['E', 100, 'El', 100, 'Eli', 100, 'Elie', 100, 'Eliez', 100, 'Elieze', 100, 'Eliezer', 100, 'Eliezer ', 100, 'Eliezer P', 100, 'Eliezer Pe', 100, 'Eliezer Per', 100, 'Eliezer Pere', 100, 'Eliezer Perez', 100]}
            loop={2}
            wrapper="span"
          />
        </h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#0f172a] mb-12'>{t.developer}</h2>
        
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