// Styles
import '../assets/styles/components/skills.scss';

// Img
import customLine from '../assets/img/custom-line.png';

// Swiper (Carousel)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Import additional styles if you use modules like Pagination, Navigation, etc.
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Data
import { iconsMap } from '../data/SkillsList';
import { skillsData } from '../data/SkillsList';

// Icons
import { FaLess, FaSass, FaFigma, FaMobileAlt  } from "react-icons/fa";
import { DiPhotoshop, DiScrum } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";



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
                    

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-25">
                <div className="col-span-1 ">
                    <div className="skills-custom-line flex justify-center items-center mb-5">
                        <img className='opacity-[0.3] hidden sm:block' src={customLine} alt="Linha divisória" title="Linha divisória" />
                        <h2 className='font-bold text-white mx-5 text-[35px] lg:text-[35px] leading-[35px] sm:leading-inherit'>Outros conhecimentos</h2>
                        <img className='opacity-[0.3] hidden sm:block' src={customLine} alt="Linha divisória" title="Linha divisória" />
                    </div>

                    <div className="2xl:w-6xl mx-auto overflow-x-hidden">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            // spaceBetween={5}
                            // slidesPerView={5}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            speed={3000}
                            centeredSlides={true}
                            centeredSlidesBounds={true}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                320: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                            }}
                        >
                            <SwiperSlide className='!flex !justify-center !items-center'><FaLess className='text-[#2A4C80] size-15'/></SwiperSlide>
                            <SwiperSlide className='!flex !justify-center !items-center'><FaSass className='text-[#C66394] size-15'/></SwiperSlide>
                            <SwiperSlide className='!flex !justify-center !items-center'><DiPhotoshop className='text-[#2FA3F7] size-15'/></SwiperSlide>
                            <SwiperSlide className='!flex !justify-center !items-center'><FaFigma className='text-[#EA4C1D] size-15'/></SwiperSlide>
                            <SwiperSlide className='!flex !justify-center !items-center'><RiEnglishInput className='text-[#0A5FA7] size-15'/></SwiperSlide>
                            <SwiperSlide className='!flex !justify-center !items-center'><TbApi className='text-[#F5B95B] size-15'/></SwiperSlide>
                            <SwiperSlide className='!flex !justify-center !items-center'><DiScrum className='text-[#F5B411] size-15'/></SwiperSlide>
                            <SwiperSlide className='!flex !justify-center !items-center'><IoAccessibility className='text-[#0A5FA7] size-15'/></SwiperSlide>
                            <SwiperSlide className='!flex !justify-center !items-center'><FaMobileAlt className='text-[#ED185C] size-15'/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills