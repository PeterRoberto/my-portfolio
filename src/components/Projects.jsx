// Styles
import '../assets/styles/components/Projects.scss';

// Icons
import { GoArrowUpRight } from "react-icons/go";

// Data
import projectsData from '../data/ProjectsList';

const Projects = () => {
  return (
    <section className="projects-area py-[60px] md:py-[100px] mt-[80px] lg:mt-[100px] bg-[#141414] rounded-t-[40px] rounded-b-[40px]" id="projects">
        <div className="container mx-auto px-4 py-4">
            <h2 className="text-blue-500 text-center font-semibold text-[20px] uppercase mb-3">Projetos mais recentes</h2>
            <p className="text-white text-center font-bold text-[35px] lg:text-[45px] leading-[40px]">Transformando ideias em algo excepcional</p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mt-[80px]">
                {projectsData.map((item) => (
                    <div className={`col-span-1 box-all-content ${item.id % 2 === 0 ? 'md:mt-[100px]' : ''}`} key={item.id}>
                        <div className="box-border mb-5 lg:px-[25px] lg:py-[25px] border border-gray-500/30 rounded-[20px] h-[275px] sm:h-[300px] lg:h-[490px]">
                            <a className='overflow' href={item.url} target='_blank'>
                                <img className='img-client w-full rounded-[20px] h-full object-cover hover:scale-105 transition-transform duration-300' src={item.img} alt={item.alt} title={item.title} />
                            </a>
                        </div>
                        
                        <div className="botoom-infos flex items-center justify-between">
                            <div className="infos-left">
                                <a href={item.url} target='_blank'>
                                    <h3 className='client-name text-white font-bold text-[20px] lg:text-[24px]'>{item.name}</h3>
                                </a>
                                <span className='type-of-service text-gray-400 secondary-font'>{item.type}</span>
                            </div>
                            <a href={item.url} className='button-rounded rounded-lg p-2 border-2 border-gray-500/30 hover:bg-blue-500 transition duration-700 ease-in-out' target='_blank'>
                                <GoArrowUpRight className='text-white size-7' />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects