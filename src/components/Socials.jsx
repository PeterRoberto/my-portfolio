import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Socials = ({isFooter}) => {
  const headerClasses = 'cursor-pointer size-9 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-blue-500 transition duration-700 ease-in-out mr-3';
  const footerClasses = 'mr-10 mb-8';

  return (
    <div className={`socials-icons items-center flex flex-wrap ${isFooter ? 'justify-center' : ''}`}>
      <a href="https://www.linkedin.com/in/peterrobertoweb/" target="_blank" className={`${isFooter ? footerClasses : headerClasses}`}>
        <FaLinkedinIn className={`${isFooter ? 'text-gray-200 hover:text-[#0A66C2] transition duration-700 ease-in-out size-15' : 'text-white'}`} />
      </a>

      <a href="https://github.com/PeterRoberto" target="_blank" className={`${isFooter ? footerClasses : headerClasses}`}>
        <FaGithub className={`${isFooter ? 'text-gray-200 hover:text-gray-500 transition duration-700 ease-in-out size-15' : 'text-white'}`} />
      </a>

      <a href="mailto:peterrobertoweb@gmail.com" target="_blank" className={`${isFooter ? footerClasses : headerClasses}`}>
        <AiOutlineMail className={`${isFooter ? 'text-gray-200 hover:text-[#D7413B] transition duration-700 ease-in-out size-15' : 'text-white'}`} />
      </a>

      <a href="https://api.whatsapp.com/send?phone=5531984480454&text=Olá! Venho através do seu portfólio." target="_blank" className={`${isFooter ? footerClasses : headerClasses}`}>
        <FaWhatsapp className={`${isFooter ? 'text-gray-200 hover:text-[#44C052] transition duration-700 ease-in-out size-15' : 'text-white'}`} />
      </a>

      <a href="https://www.instagram.com/pittshift/" target="_blank" className={`${isFooter ? footerClasses : headerClasses}`}>
        <FaInstagram className={`${isFooter ? 'text-gray-200 hover:text-[#FF2A66] transition duration-700 ease-in-out size-15' : 'text-white'}`} />
      </a>
    </div>
  )
}

export default Socials