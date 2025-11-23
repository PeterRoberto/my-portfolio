import '../assets/styles/components/MyTimeline.scss'


const MyTimeline = () => {
  return (
    <section className="timeline-area py-[60px] md:py-[100px] mt-[80px] lg:mt-[100px] bg-[#141414] rounded-t-[40px] rounded-b-[40px]">
        <div className="container mx-auto px-4 py-4">
            <h2 className="text-blue-500 text-center font-semibold text-[20px] uppercase mb-3">Minha trajetória</h2>
            <p className="text-white text-center font-bold text-[35px] lg:text-[45px] leading-[40px]">Minha rota até os dias atuais</p>
            <div className="grid">

                <div class="timeline">
                    <ul className='time-list'>
                        <li className='relative list-none w-[50%] py-[8px] px-[40px] box-border'>
                            <div class="content pb-[20px]">
                                <h3 className='text-white font-bold text-[18px] uppercase'>Lottaleben (Ger)</h3>
                                <h3 className='text-blue-400 block text-[16px] font-bold  mb-5'>Desenvolvedor Front End</h3>
                                <p className='text-white'>Atuei na implementação de novas seções e updates em torno de todo o tema Canvayo, utilizando tanto Wordpress, quanto React.js em algumas aplicações. Foi também minha primeira grande oportunidade de atuar em uma empresa fora do Brasil, dividir projetos com profissionais falando outra língua foi de suma importância pra minha evolução profissional.</p>
                            </div>
                            <div class="time absolute top-[12px] right-[-180px] m-[0] py-[8px] px-[16px] bg-[#144ea9] rounded-[18px]">
                                <h4 className='text-white text-center font-bold w-[112px]'>2021 a 2024</h4>
                            </div>
                        </li>
                        
                        <li className='relative list-none w-[50%] py-[8px] px-[40px] box-border'>
                            <div class="content pb-[20px]">
                                <h3 className='text-white font-bold uppercase'>CIA Web Sites</h3>
                                <h3 className='text-blue-400 block text-[16px] font-bold  mb-5'>Desenvolvedor Front End</h3>

                                <p className='text-white'>Desenvolvi sites institucionais em Wordpress, realizei alterações e atuei na melhoria dos processos de desenvolvimento, fiz com que componentes fossem reutilizáveis e consequetemente obter agilidade em todo o processo.</p>
                            </div>
                            <div class="time bg-[#144ea9] left-[-183px]">
                                <h4 className='text-white text-center font-bold w-[112px]'>2017 a 2019</h4>
                            </div>
                        </li>
                      
                        <li className='relative list-none w-[50%] py-[8px] px-[40px] box-border'>
                            <div class="content pb-[20px]">
                                <h3 className='text-white font-bold uppercase'>Quartel Design</h3>
                                <h3 className='text-blue-400 block text-[16px] font-bold  mb-5'>Desenvolvedor Front End</h3>

                                <p className='text-white'>Uma grande oportunidade, onde aprofundei boa parte do meu conhecimento, obtive diversas experiências trafegando por grandes processos e trabalhei em conjunto com diversos profissionais, desde o estágio de briefing, design e também o próprio desenvolvimento, onde compartilhei muitos projetos.</p>
                            </div>
                            <div class="time absolute top-[12px] right-[-180px] m-[0] py-[8px] px-[16px] bg-[#144ea9] rounded-[18px]">
                                <h4 className='text-white text-center font-bold w-[112px]'>2017</h4>
                            </div>
                        </li>


                        <li className='relative list-none w-[50%] py-[8px] px-[40px] box-border'>
                            <div class="content pb-[20px]">
                                <h3 className='text-white font-bold uppercase'>909 Web Studio</h3>
                                <h3 className='text-blue-400 block text-[16px] font-bold  mb-5'>Desenvolvedor Front End</h3>

                                <p className='text-white'>Minha primeira oportunidade como Front End, onde desenvolvi sites institucionais em Wordpress e pude obter muita experiência em torno de todos os processos internos e até desenvolvimento de fato.</p>
                            </div>
                            <div class="time bg-[#144ea9] left-[-183px]">
                                <h4 className='text-white text-center font-bold w-[112px]'>2015 a 2016</h4>
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MyTimeline