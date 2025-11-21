import  '../assets/styles/components/Education.scss';

// Img
import customLine from '../assets/img/custom-line.png'

const Education = () => {
  return (
    <section className="education-area mt-[80px] lg:mt-[100px]">
        <div className="container mx-auto px-4 py-4">
             <div className="skills-custom-line flex items-center mb-5">
                <h2 className='font-bold text-white mr-5 text-[35px] lg:text-[35px] leading-[35px] sm:leading-inherit'>Cursos / Formação</h2>
                <img className='opacity-[0.3] hidden sm:block' src={customLine} alt="Linha divisória" title="Linha divisória" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="box-education-name col-span-1 rounded-[15px] bg-[#141414] py-[40px] px-[40px] flex flex-col items-start">
                    <span className='text-[18px] text-white secondary-font font-bold mb-1'>React do zero a maestria (Udemy)</span>
                    <p className='mt-5 text-[16px] leading-[30px] text-gray-300 secondary-font'>
                        Curso completo de React, do básico ao avançado, com fundamentos, componentização, hooks, Context API, Redux, projetos práticos e integração com back-end...
                    </p>
                </div>
                <div className="box-education-name col-span-1 rounded-[15px] bg-[#141414] py-[40px] px-[40px] flex flex-col items-start">
                    <span className='text-[18px] text-white secondary-font font-bold mb-1'>Curso de Javascript completo (Udemy)</span>
                    <p className='mt-5 text-[16px] leading-[30px] text-gray-300 secondary-font'>
                        Curso com exemplos reais, ES6, orientação a objetos, TypeScript, MVC e criação de uma API Rest, desenvolvendo bases sólidas para projetos profissionais e evolução na programação....
                    </p>
                </div>
                <div className="box-education-name col-span-1 rounded-[15px] bg-[#141414] py-[40px] px-[40px] flex flex-col items-start">
                    <span className='text-[18px] text-white secondary-font font-bold mb-1'>Lógica de programação PHP (Udemy)</span>
                    <p className='mt-5 text-[16px] leading-[30px] text-gray-300 secondary-font'>
                        Curso com exercícios práticos, entendendo variáveis, operadores, controles, repetições e a metodologia Ágora, que ensina a pensar como programador e dominar os fundamentos da linguagem...
                    </p>
                </div>
                <div className="box-education-name col-span-1 rounded-[15px] bg-[#141414] py-[40px] px-[40px] flex flex-col items-start">
                    <span className='text-[18px] text-white secondary-font font-bold mb-1'>Desenvolvimento Web com PHP e Banco de dados MySQL (Udemy)</span>
                    <p className='mt-5 text-[16px] leading-[30px] text-gray-300 secondary-font'>
                        Curso para aprender a criar sites com login, trabalhar com MySQL, gerar senhas seguras, evitar SQL injection e desenvolver sistemas web completos, dominando os fundamentos de SQL e PHP integrados a bancos de dados...
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education