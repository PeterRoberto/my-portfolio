// Styles
import '../assets/styles/components/banner.scss'

// Icons
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Components
import userBanner from '../assets/img/pitt.png';
import Socials from './Socials';


const Banner = () => {
  return (
    <section className="banner-area">
        <div className="container mx-auto px-4 py-4 grid grid-cols-3 gap-4 lg:relative lg:pt-[250px] lg:pb-[250px]">
            <div className="box-image-user lg:pt-[70px] 2xl:pt-[200px] col-span-4 relative lg:absolute lg:left-0 lg:right-0">
                <img 
                    className='m-auto max-h-[400px] md:max-h-max'
                    src={userBanner} 
                    alt="Peter Roberto" 
                    title='Peter Roberto' 
                />
                <div className="box-texts-animation -mt-[27px]">
                    <div className="texts-one up-down-2 uppercase text-[40px] sm:text-[50px] md:text-[60px] 2xl:text-[250px] 2xl:absolute 2xl:bottom-[90px]">
                        Front End
                    </div>
                    <div className="texts-two up-down uppercase text-[30px] sm:text-[40px] md:text-[50px] 2xl:text-[100px] 2xl:absolute 2xl:bottom-[10px]">
                        Front End Developer
                    </div>
                </div>
            </div>

            
            <div className="infos-user col-span-4 lg:col-start-1 lg:col-span-1 z-2">
                <span className='text-white text-[20px] sm:text-[25px] font-bold'>Olá, eu sou o</span>
                <h2 className='mt-3 text-white font-bold text-[40px] sm:text-[55px] leading-[30px] lg:text-[90px] lg:leading-[80px]'>
                    Peter Roberto
                </h2>
                <a href={import.meta.env.BASE_URL + "/peterroberto-dev-front-end.pdf"} className='mt-5 w-[200px] text-[18px] py-3 button rounded-full text-white bg-blue-800 font-bold hover:bg-blue-900 transition-colors duration-300 ease-in-out rounded-3xl flex items-center justify-center' target='_blank'> 
                    Baixar currículo
                    <ArrowRightIcon className="ml-2 h-4 w-4 text-white" />
                </a>
            </div>

            <div className="box-about-banner mt-6 col-span-4 lg:col-start-3 lg:col-span-1 z-2">
                <h3 className='text-white font-bold mb-2'>Sobre mim</h3>
                <p className='text-gray-300 text-[18px]'>Seja bem vindo(a) ao meu <span className='text-blue-500'>portfólio</span> pessoal, um pouco mais sobre mim, o que faço e todo o conhecimento/experiência/habilidades que alcancei durante minha jornada...</p>
            
                <div className="socials-banner mt-8">
                    <h3 className='text-white mb-3 text-[18px]'>Encontre-me</h3>
                    <Socials />
                </div>
            </div>

        </div>
    </section>
    )
}

export default Banner