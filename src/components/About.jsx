import imgAbout from '../assets/img/pitt-about.jpg';

// Icons
import { FaGithub, FaLinkedinIn  } from "react-icons/fa";


const About = () => {
  return (
    <section className="about-area mt-[40px] md:mt-[80px]">
        <div className="container mx-auto px-4 py-4">
            <h2 className="text-blue-500 text-center font-semibold text-[20px] uppercase mb-3">Sobre mim</h2>
            <p className="text-white text-center font-bold text-[35px] lg:text-[45px] leading-[40px]">Em busca da evolução...</p>
            
            <div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 mt-15">
                <div className="h-auto lg:h-[600px] 2xl:h-[500px]">
                    <img
                        className="rounded-lg w-full h-full object-cover object-top"
                        src={imgAbout}
                        alt=""
                    />
                </div>

                <div className="">
                    <div className="rounded-lg mt-5 md:mt-0 bg-[#141414] py-[25px] px-[25px] h-full lg:flex lg:items-center lg:flex-col lg:justify-center lg:items-start">
                        <p className='text-[16px] leading-[27px] text-gray-300 secondary-font'>
                            Iniciei minha jornada em 2015 e acredito que ao longo desse tempo obtive ótimas experiências, tanto no que diz respeito ao que
                            exerço de fato quanto ao convívio com diversas equipes, seja ela de desenvolvimento ou qualquer outra
                            que contribua diretamente em relação ao que faço. Desde minhas primeiras experiências profissionais
                            busco cada vez mais me capacitar e trabalhar com equipes sólidas, em um bom ambiente, creio que assim
                            é inevitável oferecermos cada vez mais o melhor para o cliente, dessa forma é impossível não obter
                            evolução e resultados, tanto para mim quanto para a empresa.
                        </p>
                        <p className='mt-5 text-[16px] leading-[27px] text-gray-300 secondary-font'>
                            Hoje com 38 anos, possuo uma boa bagagem profissional e busco oportunidades de trabalho onde
                            eu possa exercer todo meu conhecimento e contribuir para alcançar o real objetivo da empresa, que é o
                            crescimento/faturamento.
                        </p>

                        <div className="follow-me flex mt-4">
                            <div className="infos flex flex-col w-full sm:flex-row">
                                <a href="https://github.com/PeterRoberto" target='_blank' className='mr-4 mb-2 sm:mb-0 sm:w-max w-full bg-[#144ea9] py-2 px-3 rounded-full flex justify-center items-center hover:bg-gray-700 transition duration-700 ease-in-out mr-3' title='Github - Peter Roberto' alt="Github - Peter Roberto">
                                    <FaGithub className='text-white' />
                                    <span className='ml-2 text-white'>/PeterRoberto</span>
                                </a>
                                <a href="https://www.linkedin.com/in/peterrobertoweb/" target='_blank' className='mr-4 w-full sm:w-max bg-blue-500 py-2 px-3 rounded-full flex justify-center items-center hover:bg-gray-700 transition duration-700 ease-in-out mr-3' title='Linkedin - Peter Roberto' alt="Linkedin - Peter Roberto">
                                    <FaLinkedinIn className='text-white' />
                                    <span className='ml-2 text-white'>/peterrobertoweb</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            
        </div>
        <div id="skills"></div>
    </section>
  )
}

export default About