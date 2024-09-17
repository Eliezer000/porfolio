import React from 'react'
import './Hero.css';
import Html from '../assets/html5-01-svgrepo-com.svg'
import Photoshop from '../assets/photoshop-svgrepo-com.svg'
import Css from '../assets/cssssss.svg'
import JavaScript from '../assets/js02-svgrepo-com.svg'
import ReactLogo from '../assets/react-svgrepo-com.svg'
import Tailwind from '../assets/tailwind-css-svgrepo-com.svg'
import Typical from 'react-typical';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-900 bg-animated'>
        <div className='max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-12'>
            <h1 className='text-5xl sm:text-9xl font-bold text-[#ccd6f6]'>
            <Typical
          steps={['E', 100, 'El', 100, 'Eli', 100, 'Elie', 100, 'Eliez', 100, 'Elieze', 100, 'Eliezer', 100, 'Eliezer ', 100, 'Eliezer P', 100, 'Eliezer Pe', 100, 'Eliezer Per', 100, 'Eliezer Pere', 100, 'Eliezer Perez', 100]}
          loop={2}
          wrapper="span"
        />
      </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>Desarrollador web</h2>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#616c8d] '>Portfolio personal.</h2>
            <div className='mt-4'>
              <p className='text-2xl md:text-3xl font-bold text-[#dedede] pt-8 pb-2'>Habilidades</p>
              <div className='w-40 grid grid-cols-6 gap-1 text-center'>
                <div>
                <img className='w-8 mx-auto md:w-8' src={Html} alt="html" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={Css} alt="html" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={JavaScript} alt="html" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={ReactLogo} alt="html" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={Tailwind} alt="htm" />
                
                </div>
                <div>
                <img className='w-8 mx-auto md:w-8 ' src={Photoshop} alt="html" />
                
                </div>
                
            </div>
            
            
            <p className='text-2xl font-bold text-[#dedede] pt-8 pb-2'>Proyectos</p>
            <div className='w-60 grid grid-cols-1 gap-2 ' >
            <a href="https://apptuav1.netlify.app/home" target='_blank'  rel="noreferrer"><p className='text-[#8892b0] content-pr'>TuaDrop App </p></a>
            <a href="https://tua.ar/" target='_blank' rel="noreferrer"><p className='text-[#8892b0] content-pr'>TuaDrop Web</p></a>
            <a href="https://practica-autos.netlify.app/" target='_blank' rel="noreferrer"><p className='text-[#8892b0] content-pr'>Car Website</p></a>
            <a href="https://js-practica-auris.netlify.app/" target='_blank' rel="noreferrer"><p className='text-[#8892b0] content-pr'>Commerce JBL</p></a>
            <a href="https://practica-thewkndtour.netlify.app/" target='_blank' rel="noreferrer"><p className='text-[#8892b0] content-pr'>The Wknd Tour</p></a>
            
            </div>

            <p className='text-2xl font-bold text-[#dedede] pt-8 pb-2'>Contacto</p>
            <a href="https://wa.link/l295pv" target='_blank'><p className='text-[#8892b0] content-pr'>Whatsapp</p></a>
            <p className='text-[#8892b0] '>elidanielp9@gmail.com</p>
            </div>
        </div>
    </div>

    

    
  )
}
export default Hero