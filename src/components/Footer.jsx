import { FaArrowUp } from "react-icons/fa6";
import Socials from "./Socials";


const Footer = ({isScrolled, scrollToSection}) => {

  return (
    <section className="contact-area pt-[80px] pb-[100px]" id="contact">
      <div className="container mx-auto px-4 py-4">
          <h2 className="text-blue-500 text-center font-semibold text-[20px] uppercase mb-3">Contato</h2>
          <p className="text-white text-center font-bold text-[35px] lg:text-[45px] leading-[40px]">Tire suas dúvidas!</p>

        <div className="contact-icons flex flex-wrap justify-center mt-[80px]">
          <Socials isFooter={true} />
        </div>
      </div>

      <div 
        className={`${isScrolled ? '' : 'opacity-0'} scroll-to-top transition-opacity duration-500 cursor-pointer fixed right-[15px] bottom-[20px] w-[50px] h-[50px] rounded-full bg-blue-500 flex justify-center items-center`}
        onClick={() => scrollToSection('home')}
        >
        <FaArrowUp className="text-white" size={20} />
      </div>
    </section>
  )
}

export default Footer