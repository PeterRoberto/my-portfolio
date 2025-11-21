
// Images
import logo from '../assets/img/teste-logo.png';

// Icons
import { Bars3CenterLeftIcon } from "@heroicons/react/20/solid";
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { GoArrowUpRight } from "react-icons/go";

// Hooks
import { useState } from "react";

// Components
import Socials from './Socials';

const Header = ({isScrolled, scrollToSection, activeSection}) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 z-[999]
        ${isScrolled && activeSection
          ? "bg-black/60 backdrop-blur-md shadow-lg border border-b-gray-600"
          : "bg-transparent"
        }
      `} 
      >
      
        <Dialog open={open} onClose={setOpen} className="relative z-9999">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/85 transition-opacity duration-500 ease-in-out data-closed:opacity-0 blur-[45px]"
          />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                >
                  <TransitionChild>
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <span className="absolute -inset-2.5 cursor-pointer" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="relative flex h-full flex-col overflow-y-auto bg-[#141414] py-6 shadow-xl">
                    <div className="">
                      <a href="/" className='px-4 sm:px-6 block'>
                        <img src={logo} alt="My portfolio - Peter Roberto" title="My portfolio - Peter Roberto" />
                      </a>

                      <ul className="box-menu flex flex-col my-[40px]">
                        <li className=''>
                          <a 
                            onClick={() => scrollToSection("home")} 
                            className= {`${activeSection === 'home' ? 'text-blue-500' : 'text-white'} block py-1 px-4  border-b-1 border-gray-200 w-full block text-[18px] cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                            >
                            Home
                          </a>
                        </li>
                        <li className=''>
                          <a 
                            onClick={() => scrollToSection("about")} 
                            className= {`${activeSection === 'about' ? 'text-blue-500' : 'text-white'} block py-1 px-4  border-b-1 border-gray-200 w-full block text-[18px] cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                            >
                            Sobre
                          </a>
                        </li>
                        <li className=''>
                          <a 
                            onClick={() => scrollToSection("skills")} 
                            className= {`${activeSection === 'skills' ? 'text-blue-500' : 'text-white'} block py-1 px-4  border-b-1 border-gray-200 w-full block text-[18px] cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                            >
                            Competências
                          </a>
                        </li>
                        <li className=''>
                          <a 
                            onClick={() => scrollToSection("projects")} 
                            className= {`${activeSection === 'projects' ? 'text-blue-500' : 'text-white'} block py-1 px-4  border-b-1 border-gray-200 w-full block text-[18px] cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                            >
                            Projetos
                          </a>
                        </li>
                        <li className=''>
                          <a 
                            onClick={() => scrollToSection("contact")} 
                            className= {`${activeSection === 'contact' ? 'text-blue-500' : 'text-white'} block py-1 px-4  border-b-1 border-gray-200 w-full block text-[18px] cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                            >
                            Contato
                          </a>
                        </li>
                      </ul>

                      <div className="welcome my-[40px] px-4 sm:px-6 block">
                        <h3 className='text-white font-bold mb-2'>Sobre mim</h3>
                        <p className='text-gray-300'>Seja bem vindo(a) ao meu <span className='text-blue-500'>portfólio</span> pessoal, um pouco mais sobre mim, o que faço e todo o conhecimento/experiência/habilidades que alcancei durante minha jornada...</p>
                      </div>
                      
                      <div className="middle-contact px-4 sm:px-6 block">
                        <div className="infos flex items-center mb-5">
                          <a href="https://bernardoelopes.com.br" className='button-rounded rounded-lg p-2 border-2 border-gray-500/30' target='_blank'>
                            <GoArrowUpRight className='text-white size-7' />
                          </a>
                          <div className="infos-right  ml-3">
                            <span className='text-blue-500 block font-semibold text-[18px]'>Email</span>
                            <span className='text-white block font-bold'>peterrobertoweb@gmail.com</span>
                          </div>
                        </div>

                        <div className="infos flex items-center">
                          <a href="https://bernardoelopes.com.br" className='button-rounded rounded-lg p-2 border-2 border-gray-500/30' target='_blank'>
                            <GoArrowUpRight className='text-white size-7' />
                          </a>
                          <div className="infos-right  ml-3">
                            <span className='text-blue-500 block font-semibold text-[18px]'>WhatsApp</span>
                            <span className='text-white block font-bold'>(31) 98448-0454</span>
                          </div>
                        </div>
                        
                      </div>

                      <div className="follow-me mt-20 px-4 sm:px-6 block">
                        <span className='text-white block mb-4'>Encontre-me</span>
                        <Socials />
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
        
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="My portfolio - Peter Roberto" title="My portfolio - Peter Roberto" />
          </a>
          
          <ul className="box-menu hidden lg:flex">
            <li className='mr-7'>
              <a 
                onClick={() => scrollToSection("home")} 
                className= {`${activeSection === 'home' ? 'text-blue-500' : 'text-white'} cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                >
                Home
              </a>
            </li>
            <li className='mr-7'>
              <a 
                onClick={() => scrollToSection("about")} 
                className= {`${activeSection === 'about' ? 'text-blue-500' : 'text-white'} cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                >
                Sobre
              </a>
            </li>
            <li className='mr-7'>
              <a 
                onClick={() => scrollToSection("skills")} 
                className= {`${activeSection === 'skills' ? 'text-blue-500' : 'text-white'} cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                >
                Competências
              </a>
            </li>
            <li className='mr-7'>
              <a 
                onClick={() => scrollToSection("projects")} 
                className= {`${activeSection === 'projects' ? 'text-blue-500' : 'text-white'} cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                >
                Projetos
              </a>
            </li>
            <li className='mr-7'>
              <a 
                onClick={() => scrollToSection("contact")} 
                className= {`${activeSection === 'contact' ? 'text-blue-500' : 'text-white'} cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}
                >
                Contato
              </a>
            </li>
          </ul>

          <div className="box-hamburguer flex items-center">
            <div className="box-socials hidden md:flex">
              <Socials />
            </div>

            <button
              onClick={() => setOpen(true)}
              className="hamburger ml-8 size-10 rounded-full bg-blue-500 hover:bg-transparent border hover:border-2 hover:border-blue-500 transition duration-700 ease-in-out flex justify-center items-center"
            >
              <Bars3CenterLeftIcon className="h-6 w-6 text-white rotate-180 cursor-pointer hover:text-blue-500 transition duration-700 ease-in-out" />
            </button>
          </div>
        </div>
    </header>
  )
}

export default Header