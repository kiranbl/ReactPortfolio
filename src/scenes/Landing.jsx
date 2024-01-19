import useMediaQuery from '../hooks/useMediaQuery';
import {motion} from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profileimg from "../assets/profileimg.jpg";
import resume from "../assets/KiranResume2024.pdf";
import SocialMediaIcons from '../components/SocialMediaIcons';

const Landing =({selectedPage,setSelectedPage})=>{
 const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

 return(
  <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-8">

    <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
    {isAboveMediumScreens ? (
        <div className='relative z-0 ml-20 before:absolute before:-top-5 before:-left-10 
        before:rounded-full before:w-full before:max-w-[600px] before:h-full
        before:border-2 before:border-dark  before:z-[-1]'>
            <img src={profileimg}
             alt="profile"
             className='z-10 w-full max-w-[300px] md:max-w-[500px] rounded-full'
              />
       </div>        
   ) :(  <img src={profileimg}
    alt="profile"
    className='z-10 w-full max-w-[300px] md:max-w-[500px] rounded-full'
     />)}
     </div>

    {/*Main Section*/}
    <div className='z-30 basis-2/5 mt-12 md:mt-32'>
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true,amount:0.5}}
    transition={{duration:0.5}}
    variants={
        {
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0},
        }
    }
    >
        <p className='text-5xl text-dark font-poppins font-bold z-10 text text-center md:text-start'>
            Kiran Bhaskaran Lakshman
        </p>
        <p className='mt-10 mb-7 text-dark-cream text-xl text-center font-semibold md:text-start'> ----------- Full Stack Developer</p>

        <p className='mt-5 mb-7 text-dark-cream text-sm text-center font-medium md:text-start'
        >I'm a developer based in Sheffield, UK and I recently graduated with a Masters from The University of Sheffield </p>
    </motion.div>

    <motion.div
    className='flex mt-5 justify-center md:justify-start'
     initial="hidden"
     whileInView="visible"
     viewport={{once:true,amount:0.5}}
     transition={{delay:0.2,duration:0.5}}
     variants={
         {
             hidden:{opacity:0,x:-50},
             visible:{opacity:1,x:0},
         }
     }>

        <AnchorLink
        className='bg-cream text-dark rounded-sm py-3 px-7 font-semibold
        hover:bg-light-cream hover:text-dark transition duration-500'
        onClick={()=> setSelectedPage("contact")}
        href={`#contact`}
        >Contact Me</AnchorLink>

        <a
        className='bg-dark text-cream rounded-sm py-3 px-7 font-semibold
        hover:bg-light-cream hover:text-black transition duration-500'
        href={resume}
        download="Kiran_Resume.pdf"
        >
            Download CV</a>

    </motion.div>

    <motion.div
    className='flex mt-5 justify-center md:justify-start'
     initial="hidden"
     whileInView="visible"
     viewport={{once:true,amount:0.5}}
     transition={{delay:0.2,duration:0.5}}
     variants={
         {
             hidden:{opacity:0,x:-50},
             visible:{opacity:1,x:0},
         }
     }>

      <SocialMediaIcons/>

    </motion.div>
    </div>

  </section>)
}


export default Landing;