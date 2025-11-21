// Styles
import '../assets/styles/components/skills.scss';

// Img
import customLine from '../assets/img/custom-line.png';

import { iconsMap } from '../data/SkillsList';
import { skillsData } from '../data/SkillsList';

const Skills = () => {


  return (
    <section className="skills-area mt-[80px] lg:mt-[100px]">
        <div className="container mx-auto px-4 py-4">
            <div className="skills-custom-line flex justify-center items-center mb-10">
                <img className='opacity-[0.3] hidden sm:block' src={customLine} alt="Linha divisória" title="Linha divisória" />
                <h2 className='font-bold text-white ml-5 mr-5 text-[35px] lg:text-[35px]'>Competências</h2>
                <img className='opacity-[0.3] hidden sm:block' src={customLine} alt="Linha divisória" title="Linha divisória" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-gray-500/30 border-t border-l">                
                {skillsData.map((item) => {
                    const Icon = iconsMap[item.importName];
                    return (
                        <div key={item.id} className="group relative overflow-hidden flex items-center flex-col justify-center col-span-1 h-[160px] border-gray-500/30 border-r border-b">
                            <div
                                className="absolute inset-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                                style={{
                                    background: item.color,
                                }}
                                >
                            </div>

                            <div className="relative z-100 text-white flex flex-col justify-center items-center">
                                <Icon size={60} color={item.color} title={item.name} alt={item.name} />
                                <span className="text-white">{item.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
                    

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-25">
                <div className="col-span-1 ">
                    <div className="skills-custom-line flex items-center mb-5">
                        <h2 className='font-bold text-white mr-5 text-[35px] lg:text-[35px] leading-[35px] sm:leading-inherit'>Outros conhecimentos</h2>
                        <img className='opacity-[0.3] hidden sm:block' src={customLine} alt="Linha divisória" title="Linha divisória" />
                    </div>
                    
                    <div className="progress-bar-area">
                        <div className="skills-progress-bar mb-10">
                            <div className="skill-name-count flex items-center justify-between mb-3">
                                <span className='text-white uppercase secondary-font text-[14px]'>Less</span>
                                <span className='text-white secondary-font'>85%</span>
                            </div>
                            <div className="col-span-1 bg-[#141414] w-full h-2 rounded-full">
                                <div className="bg-blue-500 w-[85%] h-full rounded-full"></div>
                            </div>
                        </div>
                        <div className="skills-progress-bar mb-10">
                            <div className="skill-name-count flex items-center justify-between mb-3">
                                <span className='text-white uppercase secondary-font text-[14px]'>Sass</span>
                                <span className='text-white secondary-font'>85%</span>
                            </div>
                            <div className="col-span-1 bg-[#141414] w-full h-2 rounded-full">
                                <div className="bg-blue-500 w-[85%] h-full rounded-full"></div>
                            </div>
                        </div>
                        <div className="skills-progress-bar mb-10">
                            <div className="skill-name-count flex items-center justify-between mb-3">
                                <span className='text-white uppercase secondary-font text-[14px]'>Photoshop</span>
                                <span className='text-white secondary-font'>60%</span>
                            </div>
                            <div className="col-span-1 bg-[#141414] w-full h-2 rounded-full">
                                <div className="bg-blue-500 w-[60%] h-full rounded-full"></div>
                            </div>
                        </div>
                        <div className="skills-progress-bar mb-10">
                            <div className="skill-name-count flex items-center justify-between mb-3">
                                <span className='text-white uppercase secondary-font text-[14px]'>Figma</span>
                                <span className='text-white secondary-font'>60%</span>
                            </div>
                            <div className="col-span-1 bg-[#141414] w-full h-2 rounded-full">
                                <div className="bg-blue-500 w-[60%] h-full rounded-full"></div>
                            </div>
                        </div>
                        <div className="skills-progress-bar mb-10">
                            <div className="skill-name-count flex items-center justify-between mb-3">
                                <span className='text-white uppercase secondary-font text-[14px]'>API REST</span>
                                <span className='text-white secondary-font'>70%</span>
                            </div>
                            <div className="col-span-1 bg-[#141414] w-full h-2 rounded-full">
                                <div className="bg-blue-500 w-[70%] h-full rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-span-1">
                    <div className="skills-custom-line flex items-center mb-5">
                        <h2 className='font-bold text-white mr-5 text-[35px] lg:text-[35px]'>Diferenciais</h2>
                        <img className='opacity-[0.3] hidden sm:block' src={customLine} alt="Linha divisória" title="Linha divisória" />
                    </div>

                    <div className="progress-bar-area">
                        <div className="skills-progress-bar mb-10">
                            <div className="skill-name-count flex items-center justify-between mb-3">
                                <span className='text-white uppercase secondary-font text-[14px]'>Inglês</span>
                                <span className='text-white secondary-font'>70%</span>
                            </div>
                            <div className="col-span-1 bg-[#141414] w-full h-2 rounded-full">
                                <div className="bg-blue-500 w-[70%] h-full rounded-full"></div>
                            </div>
                        </div>
                        <div className="skills-progress-bar mb-10">
                            <div className="skill-name-count flex items-center justify-between mb-3">
                                <span className='text-white uppercase secondary-font text-[14px]'>Scrum / Ambientes ágeis</span>
                                <span className='text-white secondary-font'>70%</span>
                            </div>
                            <div className="col-span-1 bg-[#141414] w-full h-2 rounded-full">
                                <div className="bg-blue-500 w-[70%] h-full rounded-full"></div>
                            </div>
                        </div>
                        <div className="skills-progress-bar mb-10">
                            <div className="skill-name-count flex items-center justify-between mb-3">
                                <span className='text-white uppercase secondary-font text-[14px]'>Acessibilidade</span>
                                <span className='text-white secondary-font'>70%</span>
                            </div>
                            <div className="col-span-1 bg-[#141414] w-full h-2 rounded-full">
                                <div className="bg-blue-500 w-[70%] h-full rounded-full"></div>
                            </div>
                        </div>
                        <div className="skills-progress-bar mb-10">
                            <div className="skill-name-count flex items-center justify-between mb-3">
                                <span className='text-white uppercase secondary-font text-[14px]'>Mobile first</span>
                                <span className='text-white secondary-font'>90%</span>
                            </div>
                            <div className="col-span-1 bg-[#141414] w-full h-2 rounded-full">
                                <div className="bg-blue-500 w-[90%] h-full rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills