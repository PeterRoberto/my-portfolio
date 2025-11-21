import '../assets/styles/components/CounterArea.scss'


const CounterArea = () => {
  return (
    <section className="counter-area mt-[80px] 2xl:mt-[200px]">
        <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="col-span-1 text-white">
                    <div className="experience-area relative overflow-hidden bg-[#141414] py-[25px] px-[25px] 2xl:py-[40px] 2xl:px-[40px] rounded-[20px]">
                        <div className="years-of-experience 2xl:flex relative justify-center items-center">
                            <span className='block text-[80px] 2xl:text-[170px] text-blue-500 font-bold '>+10</span>
                            <span className='block text-[30px] 2xl:text-[50px]  2xl:ml-[65px] font-bold leading-[35px] 2xl:leading-[55px] mb-3'>Anos de Experiência</span>
                        </div>

                        <p className='secondary-font'>Aliando experiência e busca contante por aprendizado, para que assim cada vez mais consiga trazer eficientes soluções com ótimo desempenho.</p>
                    </div>
                </div>
                <div className="col-span-1 text-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="col-span-1 rounded-[15px] bg-[#141414] py-[40px] px-[40px] flex flex-col justify-center items-center">
                            <span className='font-bold secondary-secondary text-[30px]'>Experiência</span>
                            <p className='secondary-font text-gray-400 text-[14px] text-center'>Seguindo os melhores caminhos com design de bom gosto.</p>
                        </div>
                        <div className="col-span-1 rounded-[15px] bg-[#141414] py-[40px] px-[40px] flex flex-col  justify-center items-center">
                            <span className="font-bold secondary-secondary text-[30px]">Desempenho</span>
                            <p className='secondary-font text-gray-400 text-[14px] text-center'>Priorizar desempenho é entregar soluções rápidas, estáveis e capazes de suportar qualquer desafio com excelência.</p>
                        </div>
                        <div className="col-span-1 rounded-[15px] bg-[#141414] py-[40px] px-[40px] flex flex-col  justify-center items-center">
                            <span className="font-bold secondary-secondary text-[30px]">Soluções</span>
                            <p className='secondary-font text-gray-400 text-[14px] text-center'>Meu foco é encontrar a solução ideal, combinando técnica, simplicidade e propósito.</p>
                        </div>
                        <div className="col-span-1 rounded-[15px] bg-[#141414] py-[40px] px-[40px] flex flex-col  justify-center items-center">
                            <span className="font-bold secondary-secondary text-[30px]">Eficiência</span>
                            <p className='secondary-font text-gray-400 text-[14px] text-center'>Trabalho focado em eficiência, buscando sempre a solução mais inteligente, simples e otimizada para cada projeto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="about"></div>
    </section>
  )
}

export default CounterArea